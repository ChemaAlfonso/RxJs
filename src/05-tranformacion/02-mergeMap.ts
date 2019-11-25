import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

// Mapea la respuesta de un observable que es respusta de otro en una sola linea de tiempo
const letras$ = of('a','b','c');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ))
)

// .subscribe({
//     next: val => console.log('NEXT: ', val),
//     complete: () => console.log('Completado')
// })


const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$   = fromEvent(document, 'mouseup');
const interval$  = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)

.subscribe(console.log)