export enum Topic {
  MESSAGE,
  ACTION,
  OBSERVATION,
}

type Data = Record<string, string>;

export type BaseEvent = {
  type: Topic;
  data: Data;
};
