import RxPubSub from "./src/rx-pub-sub";
import { Topic, type Event, type UserMessage } from "./src/events";
import Agent from "./src/agent";
import Runtime from "./src/runtime";
import TerminalManager from "./src/terminal-manager";

const isUserMessageEvent = (payload: Event['data']): payload is UserMessage['data'] => 'message' in payload;

const pubsub = new RxPubSub();
const agent = new Agent();
const runtime = new Runtime(new TerminalManager());

const user = pubsub.subscribe(Topic.USER_MESSAGE);
const observations = pubsub.subscribe(Topic.OBSERVATION);

user.subscribe({
  next: (payload) => {
    // TODO: properly handle
    if (!isUserMessageEvent(payload)) return;

    const action = agent.act(payload);
    const observation = runtime.handle(action);

    pubsub.publish({ type: Topic.OBSERVATION, data: observation });
  },
});

observations.subscribe((payload) => console.log('observation', JSON.stringify(payload, null, 2)));

pubsub.publish({ type: Topic.USER_MESSAGE, data: { message: "Hello from a User!" } });
