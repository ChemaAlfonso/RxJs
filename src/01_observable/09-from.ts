import { of, from } from 'rxjs';

/*
* of   = Toma argumentos y genera secuencia de valores
* from = array, promise, iterable, osservable,...
*/

const observer = {
    next: val => console.log('Next: ', val),
    complete: () => console.log('Completado')
}

// **************************** Misma funcionalidad con from y of ****************************
// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// **************************** Divide en caracteres un string ****************************
// const source$ = from('Chema');


// **************************** Permite peticiones externas ****************************
// const source$ = from( fetch('https://api.github.com/users/ChemaAlfonso' ) );
// source$.subscribe( async (resp) => {

//     // ReadeableStream se puede trabajar pasandolo a json
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });

// source$.subscribe( observer );


// **************************** Trabajo con iterables ****************************
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// Mediante cliclo for
// for (const id of miIterable) {
//     console.log(id);
// }

// Mediante from
from( miIterable ).subscribe( observer );

