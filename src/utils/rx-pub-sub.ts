import { Subject, Observable, filter, map } from "rxjs";
import { type Event } from "../types/events";
import type { Topic } from "../types/root";

class RxPubSub {
  private readonly subject = new Subject<Event>();

  publish(event: Event): void {
    this.subject.next(event);
  }

  subscribe(topic: Topic): Observable<Event['data']> {
    return this.subject.pipe(
      filter((data) => data.type === topic),
      map((data) => data.data)
    );
  }
}

export default RxPubSub;
