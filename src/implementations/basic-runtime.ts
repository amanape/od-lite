import type Runtime from "@abc/runtime";
import ObservationFactory from "@utils/observation-factory";
import type { Action } from "../types/actions";
import type TerminalManager from "@abc/terminal-manager";
import type { Observation } from "src/types/observations";
import { Topic } from "src/types/root";

class BasicRuntime implements Runtime {
  constructor(private readonly terminalManager: TerminalManager) { }

  public async handle(action: Action): Promise<Observation> {
    const output = await this.terminalManager.write(action.command);
    const data = ObservationFactory.fromTerminalOutput(action.command, output);

    return { type: Topic.OBSERVATION, data };
  }
}

export default BasicRuntime;
