import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

// **********************************************
// ******************* Tap *******************
// **********************************************

// ********************* Ejemplo 1 *********************
// Filtra el valor con un return booleano
const numeros$ = range(1,5);
numeros$.pipe(
    tap( x => console.log('Tap antes', x) ),
    map( val => val * 10 ),
    tap({
        next: val => console.log('Despues', val),
        complete: () => console.log('Fin de los tiempos')
    })
)
.subscribe( console.log );