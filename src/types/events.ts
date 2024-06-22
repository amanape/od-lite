import type { Observation } from "./observations";
import type { BaseEvent, Topic } from "./root";

export interface UserMessage extends BaseEvent {
  type: Topic.USER_MESSAGE;
  data: {
    message: string;
  };
}

interface AIMessage extends BaseEvent {
  type: Topic.AI_MESSAGE;
  data: {
    message: string;
  };
}

export type Event = UserMessage | AIMessage | Observation;
