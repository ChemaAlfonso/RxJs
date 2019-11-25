import { Observable, Observer } from 'rxjs';

// Metodo 1 de devolver observables
const observer: Observer<any> = {
    next: value => console.log('Next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
}

// Crear Observable metodo 1
// const obs$ = Observable.create();

// Crear Observable metodo 2
const obs$ = new Observable<string>( subs => {

    subs.next( 'Hola' );
    subs.next( 'Mundo con RxJs' );
    subs.next( 'Hola' );
    subs.next( 'Mundo con RxJs' );

    // Error forzado
    // const a = undefined;
    // a.nombre = 'Chema';

    subs.complete();

    // Nunca se notifica
    subs.next( 'Hola' );
    subs.next( 'Mundo con RxJs' );
});

// Metodo 2 de devolver observables
// obs$.subscribe( 
//     valor => console.log('next', valor),
//     err => console.warn( 'Error: ', err ),
//     () => console.info('Completado')
// );

obs$.subscribe( observer );


