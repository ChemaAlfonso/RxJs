import { fromEvent } from 'rxjs';
import { switchMap, pluck } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

// switchMap
// Funciona igual que el mergeMap pero SOLO se mantiene suscrito a la última linea del tiempo que emite valores
// Completa las demás suscripciones y cancela peticiones anteriores

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

    // Emite el valor producto de la última petición realizada
    switchMap( texto => ajax.getJSON( url + texto ))
)
.subscribe(console.log)