import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid"; // for generating unique IDs

export type ChatState = {
  id: string; // Unique identifier for each message
  chat: string;
  chatType: "send" | "receive";
};

export type ChatStore = {
  messages: ChatState[];
  addMessage: (chat: ChatState) => void;
  updateMessage: (id: string, chunk: string) => void;
};

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      messages: [
        {
          id: nanoid(),
          chat: "Hello, I am DietAI, your personal diet assistant. How can I help you today?",
          chatType: "receive",
        },
      ],
      addMessage: (chat) => {
        set((state) => ({
          messages: [...state.messages, chat],
        }));
      },
      updateMessage: (id, chunk) => {
        set((state) => ({
          messages: state.messages.map((message) =>
            message.id == id
              ? { ...message, chat: message.chat + chunk }
              : message
          ),
        }));
      },
    }),
    {
      name: "chat-storage",
    }
  )
);
