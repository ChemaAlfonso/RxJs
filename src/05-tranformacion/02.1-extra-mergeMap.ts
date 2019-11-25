import { fromEvent } from 'rxjs';
import { mergeMap, pluck} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

// Mapea la respuesta de un observable que es respusta de otro en una sola linea de tiempo
// Extra

// REFERENCIAS
const body       = document.querySelector('body');
const textInput  = document.createElement('input');
const orderList  = document.createElement('ol');
body.append( textInput, orderList )


// STREAMS
const input$ = fromEvent<KeyboardEvent>( textInput , 'keyup' );


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),

    // Emite el valor producto de la clave
    // Emite una peticion por cada toque
    // poco eficiente en este caso (mejor switchMap())
    mergeMap( texto => ajax.getJSON( url + texto ))
)
.subscribe(console.log)