import type { Message } from "@core/types";
import type { ActionEvent } from "@core/types/root";

abstract class Agent<T extends ActionEvent> {
  /**
   * Query the agent. The query could be a message or appropriately parsed observation.
   * @param message - The message to query the agent with.
   * @returns An action or message object.
   */
  public abstract query(message: string): Promise<T | Message>;
}

export default Agent;
