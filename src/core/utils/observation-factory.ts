import type { Observation } from "../types";
import { Topic } from "../types/root";

class ObservationFactory {
  static fromTerminalOutput(input: string, output: string): Observation {
    const data = { input, output };
    return { type: Topic.OBSERVATION, data };
  }
}

export default ObservationFactory;
