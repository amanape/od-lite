import type { ActionEvent, ObservationEvent } from "@core/types/root";

abstract class Runtime<T extends ActionEvent, U extends ObservationEvent> {
  /**
   * Handle an action.
   * @param action - The action to handle.
   * @returns An observation.
   */
  public abstract execute(action: T): Promise<U>;
}

export default Runtime;
