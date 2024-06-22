import { describe, beforeEach, it, expect } from "bun:test";
import RxPubSub from "../../src/utils/rx-pub-sub";
import { Topic } from "../../src/types/root";

describe("RxPubSub", () => {
  let rxPubSub: RxPubSub;

  beforeEach(() => {
    rxPubSub = new RxPubSub();
  });

  it("should publish and subscribe to a message", (done) => {
    const subscription = rxPubSub.subscribe(Topic.USER_MESSAGE);
    subscription.subscribe((payload) => {
      expect(payload.message).toBe("Hello from a User!");
      done();
    });

    rxPubSub.publish({ type: Topic.USER_MESSAGE, data: { message: "Hello from a User!" } });
  });
});
