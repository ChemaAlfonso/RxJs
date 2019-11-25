import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const btn = document.createElement('button');
btn.innerHTML = 'Btn timer';
document.querySelector('body').append(btn);

// takeUntil()
// Emite valores hasta que otro observable emite el primer valor
const counter$ = interval(1000);
//const clickBtn$ = fromEvent( btn, 'click');

// skip()
// Salta las primeras X emisiones
// Tras skip() no continua hasta que no se cumple la condición
const clickBtn$ = fromEvent( btn, 'click').pipe(
    tap(() => console.log('Tap antes del skip')),
    skip(1),
    tap(() => console.log('Despues antes del skip')) // Solo se ejecuta tras pasar el skip
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado')
});



