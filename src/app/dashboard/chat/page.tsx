"use client";
import { useChatStore, type ChatState } from "@/store/store";
import { currentProfile } from "@/utils/currentProfile";
import getUser from "@/utils/getUserClient";
import { useUser } from "@clerk/nextjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { Bot } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";

function Page() {
  // const { user } = useUser();
  // console.log("user:", user);
  const [userData, setUserData] = useState({});

  const { messages, addMessage, updateMessage } = useChatStore();
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("/api/user");
  //       console.log("response:", response.data);
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       // Handle error (e.g., show error message to user)
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  const geminiGenAI = GEMINI_API_KEY
    ? new GoogleGenerativeAI(GEMINI_API_KEY)
    : null;
  const geminiPro = geminiGenAI?.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const handleStreamResponse = async (prompt: string) => {
    if (!geminiPro) return;

    const chatStoreIdSend = nanoid();
    const chatStoreIdReceive = nanoid();

    addMessage({
      id: chatStoreIdSend,
      chat: prompt,
      chatType: "send",
    });

    setLoading(true);

    const result = await geminiPro.generateContentStream(
      `
      '''
          Assume you are a nutritionist. You are chatting with a user about their diet and nutrition.
          USER_CONTEXT: {
            ${JSON.stringify(userData)}
          }
          Only answer the questions realted to diet and nutrition
      '''
      ` + prompt
    );
    let text = "";

    addMessage({
      id: chatStoreIdReceive,
      chat: text,
      chatType: "receive",
    });

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;
      updateMessage(chatStoreIdReceive, chunkText);
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    }

    setLoading(false);
  };

  const handleSendMessage = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      handleStreamResponse(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center box-border w-full">
      <div className="h-screen flex flex-col p-3 gap-3 box-border w-full">
        <h1 className="text-3xl font-mono">Diet Ai_</h1>
        <div className="w-full flex flex-col flex-auto overflow-y-auto">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-lg bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2" ref={chatBoxRef}>
                  {messages.map((chat: ChatState) => (
                    <div
                      key={chat.id}
                      className={`p-3 rounded-lg flex items-center ${
                        chat.chatType === "send"
                          ? "col-start-6 col-end-13 justify-start flex-row-reverse"
                          : "col-start-1 col-end-8 flex-row"
                      }`}
                    >
                      {chat.chatType === "send" ? (
                        <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 flex-shrink-0 bg-[url(/user.svg)] bg-no-repeat bg-center"></div>
                      ) : (
                        <Bot size={32} />
                      )}
                      {/* <div
                        className={`flex items-center justify-center h-10 w-10 rounded-full border-2 flex-shrink-0 ${
                          chat.chatType === "send"
                            ? "bg-[url(/user.svg)] bg-no-repeat bg-center"
                            : "bg-[url(/user.svg)] bg-no-repeat bg-center"
                        }`}
                      ></div> */}
                      <div
                        className={`relative text-sm py-2 px-4 shadow rounded-xl ${
                          chat.chatType === "send"
                            ? "bg-indigo-100 mr-3"
                            : "bg-white ml-3"
                        }`}
                      >
                        <div>{chat.chat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    ref={inputRef}
                    disabled={loading}
                    type="text"
                    placeholder="Aa"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={handleSendMessage}
                  disabled={loading}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
