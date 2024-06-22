import type { Action } from "src/types/actions";

export type Message = {
  message: string;
};

abstract class Agent {
  public abstract act(state: Message[]): Action;
}

export default Agent;
