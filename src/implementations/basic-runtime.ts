import type Runtime from "@abc/runtime";
import ObservationFactory from "@utils/observation-factory";
import type { Action } from "../types/actions";
import type TerminalManager from "@abc/terminal-manager";
import type { Observation } from "../types/observations";

class BasicRuntime implements Runtime {
  constructor(private readonly terminalManager: TerminalManager) { }

  public async handle(action: Action): Promise<Observation> {
    const output = await this.terminalManager.write(action.data.command);
    return ObservationFactory.fromTerminalOutput(action.data.command, output);
  }
}

export default BasicRuntime;
