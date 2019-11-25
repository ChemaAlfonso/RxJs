import { interval, from } from "rxjs";
import { scan, map } from "rxjs/operators";

const numeros = [1,2,3,4,5,6];

// Funcionamiento igual que el reducer pero...
// Devuelve el valor acumulado TRAS CADA notificación
const scaner = ( acumulador: number, actual: number ) => acumulador + actual;

from(numeros).pipe(
    scan( scaner, 0 )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
})


// Redux scan ejemplo
interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user:Usuario[] = [
    {id: 'chem', autenticado: false, token: null},
    {id: 'chem', autenticado: true, token: 'ABC'},
    {id: 'chem', autenticado: true, token: 'ABC123'},
];

// Crea el estado
const state$ = from( user ).pipe(

    // trabaja cado dato mediante acumulador con scan()
    scan<Usuario>( ( acc, curr ) => {
        return {...acc, ...curr}
    }, {edad: 28})
)

// Por ejemplo para obtener el id
const id$ = state$.pipe(
    map( state => state )
)

// Suscripción a los datos
id$.subscribe( console.log )