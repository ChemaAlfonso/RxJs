import { fromEvent } from 'rxjs';
import { takeWhile, map } from "rxjs/operators";

const numeros = [1,2,3,4,5,6];

// Notifica hasta que se cumpla la condición
const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    map( ({ x, y }) => ({ x,y }) ),
    
    // Sin inclusive NO devuelve el valor que rompe la condición
    // takeWhile( ({y}) => y >= 150),

    // Con inclusive devuelve el valor que rompe la condición
    takeWhile( ({y}) => y >= 150, true)
);

click$.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado!')
})