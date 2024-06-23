import type { Message } from "../types/events";
import type { Action } from "../types/actions";

abstract class Agent {
  public abstract query(message: string): Promise<Action | Message>;
}

export default Agent;
