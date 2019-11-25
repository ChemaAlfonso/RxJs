import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1,2,3,4,5,6);
// const src$ = range(valorInicial, numeroDeEmisiones);

// Proceso en síncrono
//const src$ = range(1,5);

// Tranforma el proceso en asíncrono
const src$ = range(1,5, asyncScheduler);


console.log('Inicio');
src$.subscribe( console.log );
console.log('Fin');