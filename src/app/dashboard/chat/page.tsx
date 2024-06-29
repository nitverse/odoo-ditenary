"use client";
import { useChatStore, type ChatState } from "@/store/store";
import ChatList from "@/components/ChatList";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { nanoid } from "nanoid";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
function Page() {
  const chatstore = useChatStore();
  const chatBoxRef = useRef(null);
  //   const GEMINI_API_KEY = "addhere";
  //   const geminiGenAI = GEMINI_API_KEY
  //     ? new GoogleGenerativeAI(GEMINI_API_KEY)
  //     : null;
  //   const geminiPro = geminiGenAI?.getGenerativeModel({ model: "gemini-pro" });
  //   const handleStreamResponse = async (prompt: string) => {
  //     const chatStoreIdSend = nanoid(); // Generate a unique ID for the new message
  //     const chatStoreIdReceive = nanoid(); // Generate a unique ID for the new message

  //     console.log(chatStoreIdReceive, chatStoreIdSend);

  //     chatstore.addMessage(
  //       {
  //         id: chatStoreIdSend,
  //         chat: prompt,
  //         chatType: "send",
  //       },
  //       chatstore.current
  //     );

  //     chatstore[chatstore.current].loading = true;
  //     console.log(chatstore[chatstore.current].loading);

  //     const result = await geminiPro?.generateContentStream(prompt);
  //     let text = "";

  //     chatstore.addMessage(
  //       {
  //         id: chatStoreIdReceive,
  //         chat: text,
  //         chatType: "receive",
  //       },
  //       chatstore.current
  //     );

  //     for await (const chunk of result.stream) {
  //       const chunkText = await chunk.text();
  //       text += chunkText;
  //       chatstore.updateMessage(
  //         chatStoreIdReceive,
  //         {
  //           chat: text,
  //           chatType: "receive",
  //         },
  //         chatstore.current
  //       );
  //       // if (chatBoxRef.current) {
  //       //   console.log("scrolling", chatBoxRef.current.scrollHeight);
  //       //   chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  //       //   chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  //       // }
  //     }
  //     chatstore[chatstore.current].loading = false;
  //     console.log(chatstore[chatstore.current].loading);

  //     console.log(text);
  //   };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center box-border w-full">
      <div className="h-screen flex flex-col p-3 gap-3 box-border w-full">
        {/* <ChatList /> */}
        <h1 className="text-3xl font-mono">Diet Ai_</h1>
        <div className="w-full flex flex-col flex-auto overflow-y-auto">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-lg bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2" ref={chatBoxRef}>
                  {chatstore.messages.map((chat: ChatState) => {
                    return (
                      <div
                        key={chat.id}
                        className={` p-3 rounded-lg flex items-center ${
                          chat.chatType === "send"
                            ? "col-start-6 col-end-13 justify-start flex-row-reverse"
                            : " col-start-1 col-end-8 flex-row"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center h-10 w-10 rounded-full border-2 flex-shrink-0 ${
                            chat.chatType === "send"
                              ? "bg-[url(/icons/user.svg)] bg-no-repeat bg-center"
                              : "bg-[url(/icons/gemini.svg)]"
                          }`}
                        >
                          {chat.chatType === "send" ? "" : ""}
                        </div>
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
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    // disabled={chatstore[chatstore.current].loading}
                    type="text"
                    placeholder="Aa"
                    // onKeyDown={(e) => {
                    //   if (e.key === "Enter") {
                    //     handleStreamResponse(e.target.value, chatstore);
                    //     e.currentTarget.value = "";
                    //   }
                    // }}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
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
