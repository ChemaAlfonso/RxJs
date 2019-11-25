import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const btn = document.createElement('button');
btn.innerHTML = 'Btn timer';
document.querySelector('body').append(btn);

// distinctUntilChanged()
// Solo emite valores distintos al emitido JUSTO anteriormente
// funciona con ===
// ***************** Ejemplo 1 *****************
const numeros$ = of<number | string>(1,'1','1',2,4,5,1,1,2,5,3,5);

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado')
});

// ***************** Ejemplo 2 *****************
// Aumentar precisión del distinctUntilChanged para trabajo con objetos (por ===)
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
    // Distingue segun return -> (previo, actual) => previo.nombre === actual.nombre
    distinctUntilChanged( (prev, curr) => prev.nombre === curr.nombre )
)
.subscribe( console.log )



