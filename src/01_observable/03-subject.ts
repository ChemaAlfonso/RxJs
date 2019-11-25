import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
}

const intervalos$ = new Observable<number>( subs => {
    let randInterval = setInterval( () => subs.next( Math.random() ), 1000);

    // Solo se ejecuta cuando se llama al unsubscribe
    return () => {
        clearInterval( randInterval );
        console.log('Intervalo limpio');
    };
});

/* Características del Subject
* 1- Casteo múltiple
* 2- Es un observer
* 3- Next, error, complete
*/

// PASO DE COLD OBSERVABLE A HOT OBSERVABLE
const subject$ = new Subject();
const subscription = intervalos$.subscribe( subject$ );

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe( observer );

// const sub1 = intervalos$.subscribe( value => console.log('Subs 1', value ) );
// const sub2 = intervalos$.subscribe( value => console.log('Subs 2', value ) );

setTimeout( () => {
    subject$.next(10);
    subject$.complete();

    // Limpia la subscripción y ejecuta el return
    subscription.unsubscribe();
}, 3500)