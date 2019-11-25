import { fromEvent } from "rxjs";
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

// Establece un delay entre emisiones del tiempo pasado por parámetro
// Empieza a contar TRAS pasar el tiempo de debounceTime()
const click$ = fromEvent( document, 'click' );

// ******************* Ejemplo 1 *******************
click$.pipe(
    debounceTime(3000)
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

    // No realiza petición hasta que pasa el tiempo
    debounceTime(500),

    // No realiza la petición si el resultado es igual
    distinctUntilChanged()
)
.subscribe(console.log)