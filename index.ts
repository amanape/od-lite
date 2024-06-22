import RxPubSub from "./src/rx-pub-sub";
import { Event } from "./src/events";

const pubsub = new RxPubSub();

const user = pubsub.subscribe(Event.USER_MESSAGE);
const ai = pubsub.subscribe(Event.AI_MESSAGE);

user.subscribe((payload) => console.log(payload.message));
ai.subscribe((payload) => console.log(payload.message));

pubsub.publish({ type: Event.USER_MESSAGE, payload: { message: "Hello from a User!" } });
pubsub.publish({ type: Event.AI_MESSAGE, payload: { message: "Hello from an AI!" } });
