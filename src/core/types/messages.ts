import type { BaseEvent, Topic } from "./root";

interface UserMessage extends BaseEvent {
  type: Topic.MESSAGE;
  data: {
    role: "user";
    message: string;
  };
}

interface AIMessage extends BaseEvent {
  type: Topic.MESSAGE;
  data: {
    role: "ai";
    message: string;
  };
}

export type Message = UserMessage | AIMessage;
