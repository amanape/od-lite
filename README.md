# `od-lite`

[![npm version](https://badge.fury.io/js/od-lite.svg)](https://badge.fury.io/js/od-lite)

## Installation

Install the package with `bun add od-lite` or with your favorite package manager.

```sh
bun add od-lite
```

## What is `od-lite`?

`od-lite` is a lightweight framework that offers the required abstractions to build [OpenDevin](https://github.com/OpenDevin/OpenDevin)-like autonomous software agents. Instead of maintainging a WebSocket connection, it handles the event stream through a pub/sub implementation. It is based on the paper by **Wang et al.** (paper coming soon).

## Basic Usage

### Agents

To setup an agent, you need to create a new class that implements the `Agent` interface. Your agent should return an `Action` or a `Message` in response to a query.

```ts
import type { Agent, Action, Message } from 'od-lite';

class OpenAIAgent implements Agent {
  async query(message: string): Promise<Action | Message> {
    // Implement your agent's logic here.
  }
}
```

### Runtime

To handle actions, you need to create a new `Runtime` instance that handles your agents interactions.

```ts
import type { Runtime, Action, Observation } from 'od-lite';

class BasicRuntime implements Runtime {
  public async handle(action: Action): Promise<Observation> {
    // Implement your runtime's logic here.
  }
}
```

### Session

To bring it all together, you need to create a new `Session` instance that handles the interaction between the agent and the runtime.

```ts
import { Session } from 'od-lite';

const agent = new OpenAIAgent();
const runtime = new BasicRuntime();

const session = new Session(agent, runtime);
```

From here, you can query the agent and handle the response.

```ts
import { Topic } from 'od-lite';

session.pubsub.publish({ type: Topic.MESSAGE, data: { role: 'user', message: 'Please run ls in the terminal' } });
```

The `Session` class already contains a basic implementation of how the agent and runtime interact with each otger. You can subscribe to either topic to do things such as log the messages or actions that are being sent to the agent or runtime.

```ts
session.messages.subscribe((payload) => {
  console.log(JSON.stringify(payload, null, 2));
});
```

The available topics are `Topic.MESSAGE`, `Topic.ACTION`, and `Topic.OBSERVATION`.

## Custom Sessions

To create your own session implementation, you can use the [`RxPubSub`](./src/core/utils/rx-pub-sub.ts) class to create a custom pub/sub implementation. For reference, you can look at the existing [`Session`](./src/core/session.ts) class.

## Examples

Coming soon...
