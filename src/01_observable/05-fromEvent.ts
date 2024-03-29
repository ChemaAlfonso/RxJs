import { fromEvent } from 'rxjs';

// Eventos del DOM
const scr1$ = fromEvent<MouseEvent>(document, 'click');
const scr2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next ', val)
}

// Destructuración de objetos (x, y) de MouseEvent
scr1$.subscribe( ({x, y}) => {
    console.log(x, y);
});

scr2$.subscribe( evento => {
    console.log(evento.key);
});