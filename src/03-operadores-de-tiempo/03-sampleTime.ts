import { fromEvent } from "rxjs";
import { sampleTime, map } from 'rxjs/operators';

// Realiza emisiones cada tiempo establecido al sample
const click$ = fromEvent<MouseEvent>( document, 'click' );

// ******************* Ejemplo 1 *******************
click$.pipe(
    // Por el orden no ejecuta más código hasta que no pasa el sampleTime()
    sampleTime(2000),
    map( ({ x, y }) => ({ x,y }) )
   
)
.subscribe(console.log)
