import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

// distinctUntilKeyChanged()
// Solo emite valores distintos a la key de objeto emitida JUSTO anteriormente
// funciona con ===

// ***************** Ejemplo 1 *****************
interface Personaje{
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Peter'
    },
    {
        nombre: 'Peter'
    },
    {
        nombre: 'Poter'
    },
    {
        nombre: 'Puter'
    },
    {
        nombre: 'Pater'
    },
    {
        nombre: 'Peter'
    }    
];

from(personajes).pipe(
    // Distingue segun key -> 'key'
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe( console.log )



