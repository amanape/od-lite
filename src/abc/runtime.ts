import type { Action } from "../types/actions";

abstract class Runtime {
  public abstract handle(action: Action): any;
}

export default Runtime;
