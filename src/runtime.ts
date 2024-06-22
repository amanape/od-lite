import ObservationFactory from "./observation-factory";
import type TerminalManager from "./terminal-manager";

class Runtime {
  constructor(private readonly terminalManager: TerminalManager) { }

  public handle(input: Action) {
    const output = this.terminalManager.write(input);
    return ObservationFactory.fromTerminalOutput(input, output);
  }
}

export default Runtime;
