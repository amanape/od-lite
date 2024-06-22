import type { Observation } from "../types/observations";
import type { Action } from "../types/actions";

abstract class Runtime {
  public abstract handle(action: Action): Promise<Observation>;
}

export default Runtime;
