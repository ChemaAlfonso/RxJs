import { from, fromEvent } from 'rxjs';
import { first, tap, map } from "rxjs/operators";

const numeros = [1,2,3,4,5,6];

// Notifica el primero y permite una funcion de filtrado
const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    tap( val => console.log ),
    first<MouseEvent>( event => event.clientY > 150)
);

click$.subscribe({
    next: val => console.log('next del first(): ', val),
    complete: () => console.log('Completado')
})

// *************** Extra ***************
click$.pipe(
    tap<MouseEvent>( console.log ),
    // Destructuración directa ({ key })
    map( ({clientX, clientY}) => ({
        clientY,
        clientX
    }) ),
    first( event => event.clientY > 150)
)
.subscribe({
    next: val => console.log('next del extra: ', val),
    complete: () => console.log('Completado')
})