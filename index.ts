import RxPubSub from "./src/rx-pub-sub";
import { Event } from "./src/events";

const pubsub = new RxPubSub();

const subscription = pubsub.subscribe(Event.USER_MESSAGE);
subscription.subscribe((payload) => console.log(payload.message));

pubsub.publish({ type: Event.USER_MESSAGE, payload: { message: "Hello from a User!" } });
pubsub.publish({ type: Event.AI_MESSAGE, payload: { message: "Hello from an AI!" } });

