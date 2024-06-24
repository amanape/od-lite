import type { MessageEvent } from "./root";

export interface UserMessage extends MessageEvent {
  data: {
    role: "user";
    message: string;
  };
}

export interface AIMessage extends MessageEvent {
  data: {
    role: "ai";
    message: string;
  };
}
