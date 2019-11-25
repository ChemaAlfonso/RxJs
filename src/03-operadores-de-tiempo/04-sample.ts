import { fromEvent, interval } from "rxjs";
import { sample } from 'rxjs/operators';

// Realiza emisiones cada vez que recibe notificación y le sigue una notificación de sample (Es una combinación)
const interval$ = interval( 500 );
const click$ = fromEvent<MouseEvent>( document, 'click' );

// ******************* Ejemplo 1 *******************
interval$.pipe(

    // Solo realiza emisiones cuando se emite el valor de interval && realiza el click$
    sample( click$ )

).subscribe( console.log )
