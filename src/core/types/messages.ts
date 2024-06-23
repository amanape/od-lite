import type { BaseEvent, Topic } from "./root";

export interface UserMessage extends BaseEvent {
  type: Topic.MESSAGE;
  data: {
    role: "user";
    message: string;
  };
}

export interface AIMessage extends BaseEvent {
  type: Topic.MESSAGE;
  data: {
    role: "ai";
    message: string;
  };
}
