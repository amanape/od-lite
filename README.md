# `od-lite`

## Installation

Install the package with your favorite package manager.

```sh
bun add od-lite

# or

npm install od-lite
```

## What is `od-lite`?

`od-lite` is a lightweight framework that provides the necessary abstractions to build [OpenDevin](https://github.com/OpenDevin/OpenDevin)-like autonomous software agents. It is based on the paper by **Wang et al.** (coming soon).

## Table of Contents

- [General Overview](#general-overview)
- [Actions and Observations](#actions-and-observations)
  - [Action](#action)
  - [Observation](#observation)
- [Agents and Runtimes](#agents-and-runtimes)
  - [Agent](#agent)
  - [Runtime](#runtime)
- [Session](#session)
- [Custom Sessions](#custom-sessions)
- [Examples](#examples)

## General Overview

`od-lite` is built around three main concepts: **actions**, **observations**, and an **event stream**. An **action** represents something the agent wants to do, while an **observation** represents the result of the action. An event stream handles the events between the agent and the environment. These concepts are abstracted into the [`Agent`](./src/core/abc/agent.ts) and [`Runtime`](./src/core/abc/runtime.ts) classes. A complementary [`Session`](./src/core/session.ts) class manages the interaction between the agent and runtime.

## Actions and Observations

An **action** is an event that the agent wants to perform, while an **observation** is the result of that action. The [`Agent`](./src/core/abc/agent.ts) generates actions based on a query, and the [`Runtime`](./src/core/abc/runtime.ts) processes these actions in the environment to generate observations.

### Action

An action represents an event the agent wants to perform, such as running a terminal command, editing a file, or calling an API.

To define an action, `od-lite` provides an [`ActionEvent`](./src/core/types/root.ts) interface that you can extend. Below are examples of defining two actions: one for running a terminal command and another for reading the contents of a file.

```ts
import type { ActionEvent } from 'od-lite';

interface TerminalCommand extends ActionEvent {
  data: {
    command: string;
  };
}

interface ReadFile extends ActionEvent {
  data: {
    path: string;
  };
}

export type Action = TerminalCommand | ReadFile;
```

### Observation

An observation is the result of an action, such as the output of a command, the contents of a file, or the response from an API.

To define an observation, `od-lite` provides an [`ObservationEvent`](./src/core/types/root.ts) interface that you can extend. Below are examples of defining two observations: one for the output of a command and another for the contents of a file.

```ts
import type { ObservationEvent } from 'od-lite';

interface TerminalOutput extends ObservationEvent {
  data: {
    output: string; // The output of the command.
  };
}

interface FileContents extends ObservationEvent {
  data: {
    output: string; // The contents of the file.
  };
}

export type Observation = TerminalOutput | FileContents;
```

**Note**: An observation must always include an `output` field.

## Agents and Runtimes

An **agent** is an entity that interacts with the environment, generating actions based on queries and handling responses from the environment. An agent would typically be implemented with an LLM of your choice.

A **runtime** is an entity that handles actions in the environment and generates observations. It interacts with the environment and produces observations based on the received actions.

### Agent

To define an agent, create a class that implements the [`Agent`](./src/core/abc/agent.ts) abstraction. For type support, pass the action type defined earlier as a generic parameter. The class must implement the query method, which returns an action. It is also recommended to return a [`Message`](./src/core/types/index.ts) as the default response if the agent cannot generate an action.

The example below defines an [`OpenAI`](https://github.com/openai/openai-node) agent, but you can define any agent you want.

```ts
import { type Agent, type Message, Topic } from 'od-lite';
import type { Action } from './actions'; // Import the action type you defined earlier.
import OpenAI from 'openai'; // Import your LLM of choice.

class OpenAIAgent implements Agent<Action> {
  private readonly openai: OpenAI;

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey });
  }

  public async query(message: string): Promise<Action | Message> {
    const response = await this.openai.chat.completions.create({
      mode: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: message }],
    });

    // parse the response based on your prompt and return the data in the correct format.
    if (isCommand) return { type: Topic.ACTION, data: { command }};
    else if (isReadFile) return { type: Topic.ACTION, data: { path }};
    else return { type: Topic.MESSAGE, data: { role: 'ai', message }};
  }
}
```

### Runtime

To define a runtime, create a class that implements the [`Runtime`](./src/core/abc/runtime.ts) interface. For type support, pass the action and observation types defined earlier as generic parameters. The class must implement the handle method, which returns an observation.

```ts
import { type Runtime, Topic } from 'od-lite';
import type { Action, Observation } from './types'; // Import the action and observation types you defined earlier.

class NodeRuntime implements Runtime<Action, Observation> {
  public async handle(action: Action): Promise<Observation> {
    if (isTerminalCommand) {
      const output = await runCommand(action.data.command);
      return { type: Topic.OBSERVATION, data: { output }};
    } else if (isReadFile) {
      const output = await readFile(action.data.path);
      return { type: Topic.OBSERVATION, data: { output }};
    }
  }
}
```

## Session

A **session** brings the agent and runtime together, handling their interaction behind the scenes. It is implemented using a [pub/sub pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) and allows you to subscribe to messages, actions, and observations exchanged between the agent and runtime.

```ts
import { Session } from 'od-lite';
import { OpenAIAgent } from './agents'; // Import the agent you defined earlier.
import { NodeRuntime } from './runtimes'; // Import the runtime you defined earlier.

const agent = new OpenAIAgent('your-api-key');
const runtime = new NodeRuntime();

const session = new Session(agent, runtime); // Session type is inferred.
```

You can now query the agent and subscribe to the messages, actions, and observations exchanged between the agent and runtime.

```ts
// Query the agent.
session.pubsub.publish({ type: Topic.MESSAGE, data: { role: 'user', message: 'Please run ls in the terminal' });

// Subscribe to the messages, actions, and observations.
session.messages.subscribe((message) => {
  // user and ai messages.
  console.log(JSON.stringify(message, null, 2));
});

session.actions.subscribe((action) => {
  // actions sent to the runtime.
  console.log(JSON.stringify(action, null, 2));
});

session.observations.subscribe((observation) => {
  // observations sent by the runtime.
  console.log(JSON.stringify(observation, null, 2));
});
```

## Custom Sessions

To create your own session implementation, use the [`RxPubSub`](./src/core/utils/rx-pub-sub.ts) class to create a custom pub/sub implementation. For reference, you can look at the existing [`Session`](./src/core/session.ts) class.

## Examples

CLI: <https://github.com/amanape/od-lite-cli>
VSCode Extension: Coming soon...
