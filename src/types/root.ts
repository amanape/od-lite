import type { Action } from "./actions";
import type { Message } from "./messages";
import type { Observation } from "./observations";

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

export type Event = Message | Action | Observation;
