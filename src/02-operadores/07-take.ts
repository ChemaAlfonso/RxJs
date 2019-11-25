import { from } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros = [1,2,3,4,5,6];

// Limita la cantidad de notificaciones recibidas
from(numeros).pipe(
    tap( (t) => console.log('Tap ', t)),
    take( 4 )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
})