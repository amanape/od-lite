export enum Event {
  USER_MESSAGE = "USER_MESSAGE",
  AI_MESSAGE = "AI_MESSAGE",
}

type Payload = Record<string, string>;

export type BaseAction = {
  type: Event;
  payload: Payload;
};

interface UserMessage extends BaseAction {
  type: Event.USER_MESSAGE;
  payload: {
    message: string;
  };
}

interface AIMessage extends BaseAction {
  type: Event.AI_MESSAGE;
  payload: {
    message: string;
  };
}

type Action = UserMessage | AIMessage;
