import type { Action } from "../types/actions";

abstract class Agent {
  public abstract query(message: string): Promise<Action>;
}

export default Agent;
