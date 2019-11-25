import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/usesrs?per_page=5';

// **************************** Fetch API **************************** 
// Evita seguir con la promesa si hay un error (Salta al catch)
// const controlaErrores = (resp: Response) => {
//     if( !resp.ok ){
//         throw new Error( resp.statusText )
//     }
//     return resp;
// }

// const fetchPromesa = fetch( url );

// // fetchPromesa
// //  .then( resp => resp.json() )
// //  .then( console.log )
// //  .catch( err => console.warn('Error en url', err));

// fetchPromesa
//     .then( ( resp ) => controlaErrores(resp) )
//     .then( resp => resp.json() )
//     .then( console.log )
//     .catch( err => console.warn('Error en url', err));


    
// **************************** RxJs ajax **************************** 

const controlaError = ( err: AjaxError ) => {
    console.warn('Error en: ', err.message );

    // Devuelve (por ejemplo) objeto vacio para no romper el código
    return of([]);
}

ajax( url ).pipe(

    // Varias maneras
    // map( resp => resp.response )
    pluck( 'response' ),

    // devuelve error, mensaje u otro Observable que al completarse completa el principal
    catchError( controlaError )
)
.subscribe(console.log);