export enum Event {
  USER_MESSAGE = "USER_MESSAGE",
  AI_MESSAGE = "AI_MESSAGE",
  OBSERVATION = "OBSERVATION",
}

type Data = Record<string, string>;

export type BaseAction = {
  type: Event;
  data: Data;
};

interface UserMessage extends BaseAction {
  type: Event.USER_MESSAGE;
  data: {
    message: string;
  };
}

interface AIMessage extends BaseAction {
  type: Event.AI_MESSAGE;
  data: {
    message: string;
  };
}

export type Payload = UserMessage | AIMessage;
