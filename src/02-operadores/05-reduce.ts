import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

// Funcionamiento igual que en JS nativo
// Devuelve el valor acumulado AL FINAL de todas las notificaciones
// Se puede usar el operador take() para limitar la cantidad
const reducer = ( acumulador: number, actual: number ) => acumulador + actual;

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce( reducer, 0 )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
})