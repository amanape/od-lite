import type { Observation } from "src/types/observations";
import type { Action } from "src/types/actions";

abstract class Runtime {
  public abstract handle(action: Action): Promise<Observation>;
}

export default Runtime;
