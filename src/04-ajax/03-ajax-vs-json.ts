import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinds.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const controlaError = (err: AjaxError) => {
    console.warn('Error: ', err.message );
    return of({
        ok:false,
        usuarios: []
    })
};

// *************** Diferencias ***************
// Devuelve la respuesta directamente en JSON
const obs$ = ajax.getJSON( url );

// Devuelve información de la respuesta aparte de ésta
const obs2$ = ajax( url );

// *************** Control de error con cathError() en ambas ***************
// obs$.pipe(
//     catchError( controlaError )
// )
// .subscribe( data => console.log('Data1: ', data) );

// obs2$.pipe(
//     catchError( controlaError )
// )
// .subscribe( data => console.log('Data2: ', data) );


// De esta manera se controla el error en el subscribe y .subscribe() ejecuta el error()
obs$
.subscribe({
    next: val => console.log('Valor: ', val),
    error: err => console.warn('Error final', err),
    complete: () => console.log('Completado')
});

// De esta manera NO se controla el error en el subscribe y .subscribe() ejecuta el next()
obs$.pipe(
    catchError( controlaError )
)
.subscribe( {
    next: val => console.log('Valor: ', val),
    error: err => console.warn('Error final', err),
    complete: () => console.log('Completado')
} );
