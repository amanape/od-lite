import type Runtime from "@core/abc/runtime";
import type TerminalManager from "@core/abc/terminal-manager";
import type { Action } from "@core/types/actions";
import type { Observation } from "@core/types/observations";
import ObservationFactory from "@core/utils/observation-factory";

class BasicRuntime implements Runtime {
  constructor(private readonly terminalManager: TerminalManager) { }

  public async handle(action: Action): Promise<Observation> {
    const output = await this.terminalManager.write(action.data.command);
    return ObservationFactory.fromTerminalOutput(action.data.command, output);
  }
}

export default BasicRuntime;
