import type { Action } from "./types/actions";

type Message = {
  message: string;
}

class Agent {
  public act(state: Message): Action {
    return { command: state.message + "ls" };
  };
}

export default Agent;
