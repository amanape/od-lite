import type { Action, Message } from "@core/types";

abstract class Agent {
  public abstract query(message: string): Promise<Action | Message>;
}

export default Agent;
