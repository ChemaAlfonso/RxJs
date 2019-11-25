import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// ***********************************************
// ********************* Map *********************
// ***********************************************

// ********************* Ejemplo 1 *********************
// Mapeo para modificar el valor
range(1,5).pipe(
    map<number, number>( data => data * 10)
)
.subscribe( console.log );

// ********************* Ejemplo 2 *********************
const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup');
keyUp$.subscribe( key => console.log('Map', key));

// Mapeo para retornar solamente el KeyboardEvent.code
const keyUpCodes$ = keyUp$.pipe(
    map( ev => ev.code )
);
keyUpCodes$.subscribe( key => console.log('Map ejemplo 2', key))

// ***********************************************
// ******************** Pluck ********************
// ***********************************************

// Extrae directamente elementos de un objeto mediante parámetros
const keyUpPluck$ = keyUp$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')
);
keyUpPluck$.subscribe( key => console.log('Pluck', key))

// ***********************************************
// ******************* Map To ********************
// ***********************************************

// Transforma la entrada en una salida predefinida
const keyUpMapTo$ = keyUp$.pipe(
    mapTo<KeyboardEvent, string>('valor')
);
keyUpMapTo$.subscribe( key => console.log('mapTo', key))