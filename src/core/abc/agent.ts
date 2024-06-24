import type { Action, Message } from "@core/types";

abstract class Agent {
  /**
   * Query the agent. The query could be a message or appropriately parsed observation.
   * @param message - The message to query the agent with.
   * @returns An action or message object.
   */
  public abstract query(message: string): Promise<Action | Message>;
}

export default Agent;
