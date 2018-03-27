import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { messages } from '../messages/mock';

export class FakeRestService {
    private messages = new BehaviorSubject<any[]>(messages);

    loadMessages(): Observable<any[]> {
        return this.messages.asObservable();
    }
}
