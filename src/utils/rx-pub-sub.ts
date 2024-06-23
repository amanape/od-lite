import { Subject, Observable, filter, map } from "rxjs";
import { type Event } from "../types/root";

class RxPubSub {
  private readonly subject = new Subject<Event>();

  publish(event: Event): void {
    this.subject.next(event);
  }

  subscribe<T extends Event['type']>(topic: T): Observable<Extract<Event, { type: T }>> {
    return this.subject.pipe(
      filter((data): data is Extract<Event, { type: T }> => data.type === topic),
      map((data) => data.data)
    );
  }
}

export default RxPubSub;
