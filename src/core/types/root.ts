export enum Topic {
  MESSAGE,
  ACTION,
  OBSERVATION,
}

type DataValue = string | number | boolean;

export interface BaseEvent {
  type: Topic;
  data: Record<string, DataValue>;
};

export interface MessageEvent extends BaseEvent {
  type: Topic.MESSAGE;
}

export interface ActionEvent extends BaseEvent {
  type: Topic.ACTION;
}

export interface ObservationEvent extends BaseEvent {
  type: Topic.OBSERVATION;
  data: {
    output: string; // all observations should have an output
    [key: string]: DataValue;
  }
}
