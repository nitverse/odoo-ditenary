import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid"; // for generating unique IDs

export type ChatState = {
  id: string; // Unique identifier for each message
  chat: string;
  chatType: "send" | "receive";
};

export type ChatStore = {
  loading: boolean;
  messages: ChatState[];
  addMessage: (chat: ChatState) => void;
  updateMessage: (id: string, chat: Partial<ChatState>) => void;
};

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      loading: false,
      messages: [
        {
          id: nanoid(),
          chat: "Hello, I am DietAI, your personal diet assistant. How can I help you today?",
          chatType: "receive",
        },
      ],
      addMessage: (chat) => {
        set((state) => ({
          messages: [...state.messages, { ...chat, id: nanoid() }],
        }));
      },
      updateMessage: (id, chat) => {
        set((state) => ({
          messages: state.messages.map((message) =>
            message.id === id ? { ...message, ...chat } : message
          ),
        }));
      },
    }),
    {
      name: "chat-storage",
    }
  )
);
