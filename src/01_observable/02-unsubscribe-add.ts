import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>( subscriber => {
    // Contador 1,2,3,4,5,...
    let i = 0;
    const interval = setInterval(() => {
        i++;
        subscriber.next(i);
    },1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500)

    return () => {
        clearInterval( interval );
        console.log('intervalo destruido');
    }
});


const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);


subscription1.add( subscription2 )
             .add( subscription3 )

setTimeout(() => {
    subscription1.unsubscribe();
    console.log('Subscripciones finalizadas');
}, 6000)