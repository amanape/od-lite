export enum Topic {
  MESSAGE,
  ACTION,
  OBSERVATION,
}

export interface BaseEvent {
  type: Topic;
  data:  Record<string, string | number>;
};

export interface MessageEvent extends BaseEvent {
  type: Topic.MESSAGE;
}

export interface ActionEvent extends BaseEvent {
  type: Topic.ACTION;
}

export interface ObservationEvent extends BaseEvent {
  type: Topic.OBSERVATION;
}
