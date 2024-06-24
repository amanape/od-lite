import type { Action, Observation } from "@core/types";

abstract class Runtime {
  /**
   * Handle an action.
   * @param action - The action to handle.
   * @returns An observation.
   */
  public abstract handle(action: Action): Promise<Observation>;
}

export default Runtime;
