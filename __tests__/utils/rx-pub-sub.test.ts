import { describe, beforeEach, it, expect } from "bun:test";
import RxPubSub from "../../src/core/utils/rx-pub-sub";
import { Topic } from "../../src/core/types/root";

describe("RxPubSub", () => {
  let rxPubSub: RxPubSub;

  beforeEach(() => {
    rxPubSub = new RxPubSub();
  });

  it("should publish and subscribe to a message", (done) => {
    const subscription = rxPubSub.subscribe(Topic.MESSAGE);
    subscription.subscribe((payload) => {
      expect(payload.data.message).toBe("Hello from a User!");
      done();
    });

    rxPubSub.publish({ type: Topic.MESSAGE, data: { role: "user", message: "Hello from a User!" } });
  });
});
