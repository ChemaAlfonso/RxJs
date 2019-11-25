import { of } from 'rxjs';

//const obs$ = of<number>(1,2,3,4,5,6);
const obs$ = of<any>([1,2],{a:3,b:4},true,Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe( 
    next => console.log('Next ',next),
    null,
    () => console.log('Fin de la secuencia')
)
console.log('Fin  del obs$')