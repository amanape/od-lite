type Observation = {
  type: "OBSERVATION";
  data: Record<string, string>;
}

interface TerminalObservation extends Observation{
  data: {
    output: string;
  };
}
