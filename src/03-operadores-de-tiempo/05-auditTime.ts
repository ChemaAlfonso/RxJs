import { interval } from "rxjs";
import { auditTime, tap } from 'rxjs/operators';

// Emite el ÚLTIMO valor de observable emitido en un tiempo determinado
// Si se completa antes de emitir el último valor NO LO EMITE
const interval$ = interval( 500 );

// ******************* Ejemplo 1 *******************
interval$.pipe(
    tap( val => console.log('Tap: ', val) ),

    // Solo realiza emisiones cuando pasan 1000ms
    auditTime( 1000 )

).subscribe( console.log )
