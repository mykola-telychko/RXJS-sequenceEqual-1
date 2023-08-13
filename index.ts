console.clear();
import { of, from } from 'rxjs';
import { sequenceEqual, switchMap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/conditional/sequenceequal

const expectedSequence = from([4, 5, 6]);

const listOfArr = of([7, 6, 3], [1, 2, 3], [4, 5, 6], [7, 8, 9]);

listOfArr
  .pipe(switchMap((arr) => from(arr).pipe(sequenceEqual(expectedSequence))))
  .subscribe(console.log);
