export enum Topic {
  MESSAGE,
  ACTION,
  OBSERVATION,
}

type DataValue = string | number | boolean;
type Data = {
  identifier: string;
  [key: string]: DataValue;
}

export interface BaseEvent {
  type: Topic;
  data: Data;
};

export interface MessageEvent extends BaseEvent {
  type: Topic.MESSAGE;
}

export interface ActionEvent extends BaseEvent {
  type: Topic.ACTION;
}

export interface ObservationEvent extends BaseEvent {
  type: Topic.OBSERVATION;
  data: Data & { output: string; } // all observations should have an output
}
