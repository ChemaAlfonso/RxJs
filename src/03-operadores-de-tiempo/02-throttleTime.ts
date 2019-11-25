import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

// Establece un delay entre emisiones del tiempo pasado por parámetro
// Empieza a contar JUSTO AL pasar por el throttleTime()
const click$ = fromEvent( document, 'click' );

// ******************* Ejemplo 1 *******************
click$.pipe(
    throttleTime(3000)
)
//.subscribe(console.log)

// ******************* Ejemplo 2 *******************
const input = document.createElement('input');
document.querySelector('body').append(input);  


const input$ = fromEvent<KeyboardEvent>( input, 'keyup');

input$.pipe(

    // Varias posibilidades...
    //map( (elm: any) => elm.target.value)
    pluck('target', 'value'),

    // Realiza petición JUSTO al pasar la función
    // No devuelve el último, solo el valor correspodiente al tiempo
    // throttleTime(500),

    // Para devolver el primero y el último
    throttleTime(1000 , asyncScheduler, {
        leading: true,
        trailing: true
    }),

    // No realiza la petición si el resultado es igual
    distinctUntilChanged()
)
.subscribe(console.log)