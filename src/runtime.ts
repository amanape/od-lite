import ObservationFactory from "./observation-factory";
import type TerminalManager from "./terminal-manager";
import type { Action } from "./types/actions";

class Runtime {
  constructor(private readonly terminalManager: TerminalManager) { }

  public handle(action: Action) {
    const output = this.terminalManager.write(action.command);
    return ObservationFactory.fromTerminalOutput(action.command, output);
  }
}

export default Runtime;
