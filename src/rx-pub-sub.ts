import { Subject, Observable, filter, map } from "rxjs";
import { type Payload, type Event } from "./events";

class RxPubSub {
  private readonly subject = new Subject<Payload>();

  publish(action: Payload): void {
    this.subject.next(action);
  }

  subscribe(type: Event): Observable<Payload['data']> {
    return this.subject.pipe(
      filter((data) => data.type === type),
      map((data) => data.data)
    );
  }
}

export default RxPubSub;
