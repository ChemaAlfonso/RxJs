import { forkJoin, of, interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';

// Los obs$ tienes que ser FINITOS
// Devuelve el valor de todos los obs$ CUANDO SE COMPLETAN
// forkJoin( obs1$, obs2$, obs3$);

// ******************** Ejemplo 1 ********************
const numeros$ = of(1,2,3,4,5);
const interval$ = interval(1000).pipe( take(3) );
const letras$ = of('a','b','c').pipe( delay(500) );

// forkJoin( numeros$, interval$, letras$)
// .subscribe(console.log);
   
// En array
forkJoin( numeros$, interval$, letras$)
.subscribe(resp => {
    console.log('numeros: ', resp[0]);
    console.log('intervalo: ', resp[1]);
    console.log('letras: ', resp[2]);
});
   
// En json
forkJoin({ 
    num: numeros$, 
    int: interval$, 
    letr: letras$ })
.subscribe( console.log );

