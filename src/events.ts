export enum Topic {
  USER_MESSAGE,
  AI_MESSAGE,
  OBSERVATION,
}

type Data = Record<string, string>;

export type BaseEvent = {
  type: Topic;
  data: Data;
};

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

interface TerminalObservation extends BaseEvent {
  type: Topic.OBSERVATION;
  data: {
    output: string;
  };
}

export type Event = UserMessage | AIMessage | TerminalObservation;
