import React from "react";
import { ChatStore, useChatStore } from "@/store/store";
const ChatList = () => {
  const chatstore = useChatStore();
  return (
    <div className="h-full">
      <div className="max-w-md mx-auto h-full bg-gray-100 shadow-sm rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="relative">
              {" "}
              <input
                type="text"
                className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md"
                placeholder="Search..."
              />{" "}
              <i className="fa fa-search absolute right-3 top-4 text-gray-300"></i>{" "}
            </div>
            <ul className="min-w-48">
              <li
                className={`flex justify-between items-center bg-white ${
                  chatstore.current == "chatgpt" ? "border-gray-900" : ""
                } border mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition`}
              >
                <div className="flex items-center ml-2">
                  {" "}
                  <img
                    src="/icons/chatgpt.svg"
                    width="40"
                    height="40"
                    className="rounded-full"
                    alt="profile"
                  />
                  <div className="flex flex-col ml-2">
                    {" "}
                    <span className="font-medium text-black">ChatGPT</span>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center">
                      {" "}
                      <span className="text-gray-300">11:26</span>{" "}
                      <i className="fa fa-star text-green-400"></i>{" "}
                    </div> */}
              </li>
              <li
                className={`flex justify-between items-center bg-white ${
                  chatstore.current == "gemini" ? "border-gray-900" : ""
                } border mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition`}
              >
                <div className="flex ml-2">
                  {" "}
                  <img
                    alt="profile"
                    src="/icons/gemini.svg"
                    width="40"
                    height="40"
                    className="rounded-full"
                  />
                  <div className="flex justify-center flex-col ml-2">
                    <span className="font-medium text-black">Gemini</span>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center">
                      {" "}
                      <span className="text-gray-300">12:26</span>{" "}
                      <i className="fa fa-star text-green-400"></i>{" "}
                    </div> */}
              </li>
              <li
                className={`flex justify-between items-center bg-white ${
                  chatstore.current == "claude" ? "border-gray-900" : ""
                } border mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition`}
              >
                <div className="flex ml-2">
                  {" "}
                  <img
                    alt="profile"
                    src="/icons/claude.svg"
                    width="40"
                    height="40"
                    className="rounded-full"
                  />
                  <div className="flex justify-center flex-col ml-2">
                    {" "}
                    <span className="font-medium text-black">Claude</span>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center">
                      {" "}
                      <span className="text-gray-300">8:26</span>{" "}
                      <i className="fa fa-star text-green-400"></i>{" "}
                    </div> */}
              </li>
              <li
                className={`flex justify-between items-center bg-white ${
                  chatstore.current == "llama" ? "border-gray-900" : ""
                } border mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition`}
              >
                <div className="flex ml-2">
                  {" "}
                  <img
                    alt="profile"
                    src="/icons/llama2.svg"
                    width="40"
                    height="40"
                    className="rounded-full "
                  />
                  <div className="flex justify-center flex-col ml-2">
                    <span className="font-medium text-black">LLama 2</span>
                    {/* <span className="text-sm text-gray-400 truncate w-32">
                          May be yes
                        </span>{" "} */}
                  </div>
                </div>
                {/* <div className="flex flex-col items-center">
                      {" "}
                      <span className="text-gray-300">3:26</span>{" "}
                      <i className="fa fa-star text-green-400"></i>{" "}
                    </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
