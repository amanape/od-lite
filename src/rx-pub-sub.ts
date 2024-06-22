import { Subject, Observable, filter, map } from "rxjs";
import { type BaseAction } from "./events";

class RxPubSub {
  private readonly subject = new Subject<BaseAction>();

  publish(action: BaseAction): void {
    this.subject.next(action);
  }

  subscribe(type: BaseAction['type']): Observable<BaseAction['payload']> {
    return this.subject.pipe(
      filter((data) => data.type === type),
      map((data) => data.payload)
    );
  }
}

export default RxPubSub;
