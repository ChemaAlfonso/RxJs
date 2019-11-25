import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const btn = document.createElement('button');
btn.innerHTML = 'Btn timer';
document.querySelector('body').append(btn);

// distinct()
// Solo emite valores distintos a los emitidos anteriormente
// funciona con ===
// ***************** Ejemplo 1 *****************
const numeros$ = of<number | string>(1,'1',2,4,5,1,1,2,5,3,5);

numeros$.pipe(
    distinct()
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado')
});

// ***************** Ejemplo 2 *****************
// Aumentar precisión del distinct para trabajo con objetos (por ===)
interface Personaje{
    nombre: string;
}

const personajes: Personaje[] = [
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
    // Distingue segun return
    distinct( p => p.nombre )
)
.subscribe( console.log )



