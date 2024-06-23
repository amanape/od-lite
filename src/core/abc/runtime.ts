import type { Action, Observation } from "@core/types";

abstract class Runtime {
  public abstract handle(action: Action): Promise<Observation>;
}

export default Runtime;
