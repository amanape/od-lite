import RxPubSub from "@utils/rx-pub-sub";
import { type Event, type UserMessage } from "./types/events";
import { BasicAgent } from "@implementations/basic-agent";
import BasicRuntime from "@implementations/basic-runtime";
import { MockTerminalManager } from "@implementations/basic-terminal-manager";
import { Topic } from "./types/root";

const isUserMessageEvent = (payload: Event['data']): payload is UserMessage['data'] => 'message' in payload;

const pubsub = new RxPubSub();
const agent = new BasicAgent();
const runtime = new BasicRuntime(new MockTerminalManager());

const user = pubsub.subscribe(Topic.USER_MESSAGE);
const observations = pubsub.subscribe(Topic.OBSERVATION);

user.subscribe({
  next: async (payload) => {
    // TODO: properly handle
    if (!isUserMessageEvent(payload)) return;

    const action = agent.act([payload]);
    const observation = await runtime.handle(action);

    pubsub.publish(observation);
  },
});

observations.subscribe((payload) => console.log('observation', JSON.stringify(payload, null, 2)));

pubsub.publish({ type: Topic.USER_MESSAGE, data: { message: "Hello from a User!" } });
