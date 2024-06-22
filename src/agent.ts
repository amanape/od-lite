type Message = {
  message: string;
}

type Command = {
  command: string;
}

class Agent {
  public act(state: Message): Message | Command {
    if (state.message === "terminal") return { command: "ls" };
    return { message: "Hello from an AI!" };
  };
}

export default Agent;
