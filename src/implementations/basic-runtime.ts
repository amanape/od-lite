import type Runtime from "../abc/runtime";
import ObservationFactory from "../utils/observation-factory";
import type TerminalManager from "./basic-terminal-manager";
import type { Action } from "../types/actions";

class BasicRuntime implements Runtime {
  constructor(private readonly terminalManager: TerminalManager) { }

  public handle(action: Action) {
    const output = this.terminalManager.write(action.command);
    return ObservationFactory.fromTerminalOutput(action.command, output);
  }
}

export default BasicRuntime;
