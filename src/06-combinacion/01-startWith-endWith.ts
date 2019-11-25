import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

// Comienza con el valor pasado por parámetro
const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

numeros$.subscribe(console.log)


// Finaliza con el valor pasado por parámetro
const numeros2$ = of(1,2,3).pipe(
    endWith(0)
);

numeros2$.subscribe(console.log)