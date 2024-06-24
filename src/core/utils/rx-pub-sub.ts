import { Subject, Observable, filter } from "rxjs";
import { type Event } from "../types";

class RxPubSub {
  private readonly subject = new Subject<Event>();

  /**
   * Publish an event to the subscribers.
   * @param event - The event to publish.
   */
  publish(event: Event): void {
    this.subject.next(event);
  }

  /**
   * Subscribe to a topic and receive events of that type.
   * @param topic - The topic to subscribe to.
   * @returns An observable of events of the specified topic.
   */
  subscribe<T extends Event['type']>(topic: T): Observable<Extract<Event, { type: T }>> {
    return this.subject.pipe(
      filter((data): data is Extract<Event, { type: T }> => data.type === topic),
    );
  }
}

export default RxPubSub;
