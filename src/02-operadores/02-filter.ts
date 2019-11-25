import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// **********************************************
// ******************* Filter *******************
// **********************************************

// ********************* Ejemplo 1 *********************
// Filtra el valor con un return booleano
range(1,10).pipe(
    filter( (val, i) => {
        // i retorna el indice, siempre desde 0
        console.log('index ', i);
        return val % 2 === 0;
    })
)
.subscribe( console.log );


// ********************* Ejemplo 2 *********************
interface Personaje{
    tipo: string,
    nombre: string
}
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

let heroes$ = from<Personaje[]>( personajes );

heroes$.pipe(
    filter<Personaje>( heroe => heroe.tipo === 'heroe')
).subscribe(console.log);



const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ),
    filter( key => key == 'Enter' )
);

keyUp$.subscribe(console.log)