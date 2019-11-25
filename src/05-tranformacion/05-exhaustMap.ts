import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap, concatMap } from 'rxjs/operators';

// Funciona como concatMap pero no emite la siguiente seuencia
// SI no está finalizado el observable anterior (no finaliza automaticamente)
const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click');

click$.pipe(
    //concatMap( () => interval$ )
    exhaustMap( () => interval$ )
).subscribe(console.log)