import type { Observation } from "./observations";
import type { BaseEvent, Topic } from "./root";

export type Message = {
  message: string;
}

export interface UserMessage extends BaseEvent {
  type: Topic.USER_MESSAGE;
  data: Message;
}

interface AIMessage extends BaseEvent {
  type: Topic.AI_MESSAGE;
  data: Message;
}

export type Event = UserMessage | AIMessage | Observation;
