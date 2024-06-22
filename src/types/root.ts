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
