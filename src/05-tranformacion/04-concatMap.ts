import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

// Funciona como switchMap pero devuelve los resultados de forma secuencial
const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click');

click$.pipe(
    //switchMap( () => interval$ )
    concatMap( () => interval$ )
).subscribe(console.log)