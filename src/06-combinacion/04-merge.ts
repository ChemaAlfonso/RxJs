import { merge, fromEvent } from "rxjs";
import { interval } from 'rxjs';
import { take, pluck } from 'rxjs/operators';

// Es una función NO un operador
// merge( obs1$, obs2$, obs3$);

// ******************** Ejemplo 1 ********************
const interval$ = interval(1000);

// Devuelve un obs$
merge(
    // Notifican todos fusionados
    // Se completa al completarse TODOS
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) )
).subscribe( console.log )


// ******************** Ejemplo 2 ********************
const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge(
    keyup$.pipe( pluck( 'type') ), 
    click$.pipe( pluck( 'type') )
)
.subscribe(console.log);