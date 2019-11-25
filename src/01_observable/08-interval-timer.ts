import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado')
}

// Siempre son asíncronos

// INTERVAL
// Crea un intervalo
const interval$ = interval(1000);

// TIMER
// 1 - Crea un timeOut en el tiempo especificado
//const timer$    = timer(1000);

// 2 - Crea un intervalo que empieza a los 2 segundos
//const timer$    = timer(2000, 1000);

// 3 - Crea un intervalo en una fecha determinada
const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );
const timer$ = timer(hoyEn5);


console.log('Inicio');
//interval$.subscribe( console.log );
timer$.subscribe( observer );
console.log('Fin');