import { concat } from "rxjs";
import { interval } from 'rxjs';
import { take } from "rxjs/operators";

// Es una función NO un operador
// concat( obs1$, obs2$, obs3$);

const interval$ = interval(1000);

// Devuelve un obs$
concat(
    // Notifica el primero hasta que se completa 
    interval$.pipe( take(3) ),

    // SI SE COMPLETA sigue con el siguiente
    interval$.pipe( take(2) )
).subscribe( console.log )