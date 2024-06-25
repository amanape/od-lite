import type { Observable } from "rxjs";
import type Agent from "./abc/agent";
import type Runtime from "./abc/runtime";
import { Topic, type ActionEvent, type ObservationEvent } from "./types/root";
import RxPubSub from "./utils/rx-pub-sub";

class Session<T extends ActionEvent, U extends ObservationEvent> {
  public readonly pubsub = new RxPubSub();

  public readonly messages = this.pubsub.subscribe(Topic.MESSAGE);
  public readonly actions = this.pubsub.subscribe(Topic.ACTION) as Observable<T>;
  public readonly observations = this.pubsub.subscribe(Topic.OBSERVATION) as Observable<U>;

  constructor(
    private readonly agent: Agent<T>,
    private readonly runtime: Runtime<T, U>,
  ) {
    this.registerMessages();
    this.registerActions();
    this.registerObservations();
  }

  private registerMessages() {
    this.messages.subscribe({
      next: async (payload) => {
        if (payload.data.role === 'user') {
          const action = await this.agent.query(payload.data.message);
          this.pubsub.publish(action);
        }
      },
    });
  }

  private registerActions() {
    this.actions.subscribe({
      next: async (payload) => {
        const observation = await this.runtime.handle(payload);
        this.pubsub.publish(observation);
      },
    });
  }

  private registerObservations() {
    this.observations.subscribe({
      next: async (payload) => {
        const actionOrMessage = await this.agent.query(payload.data.output);
        this.pubsub.publish(actionOrMessage);
      }
    });
  }
}

export default Session;
