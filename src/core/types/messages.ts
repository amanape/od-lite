import type { MessageEvent } from "./root";

export interface UserMessage extends MessageEvent {
  data: {
    identifier: "user";
    message: string;
  };
}

export interface AIMessage extends MessageEvent {
  data: {
    identifier: "ai";
    message: string;
  };
}
