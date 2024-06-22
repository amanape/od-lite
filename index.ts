import RxPubSub from "./src/rx-pub-sub";
import { Event } from "./src/events";
import Agent from "./src/agent";
import Runtime from "./src/runtime";
import TerminalManager from "./src/terminal-manager";

const pubsub = new RxPubSub();
const agent = new Agent();
const runtime = new Runtime(new TerminalManager());

const user = pubsub.subscribe(Event.USER_MESSAGE);
const observations = pubsub.subscribe(Event.OBSERVATION);

user.subscribe((payload) => {
  const action = agent.act(payload);
  const observation = runtime.handle(action);

  pubsub.publish({ type: Event.OBSERVATION, data: observation });
});

observations.subscribe((payload) => console.log(payload));

pubsub.publish({ type: Event.USER_MESSAGE, data: { message: "Hello from a User!" } });
