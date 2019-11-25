import { combineLatest, fromEvent } from "rxjs";
import { take, pluck } from 'rxjs/operators';

// Devuelve un obs$ con un array con la última combinación de los obs$ pasados
// combineLatest( obs1$, obs2$, obs3$);

// ******************** Ejemplo 1 ********************
// const interval$ = interval(1000);

// Devuelve un obs$
// combineLatest(
//     // Notifica con el última valor de todos fusionados conjuntamente
//     // Se completa al completarse TODOS
//     interval$.pipe( take(3) ),

//     // Si se completa uno, se valor es notificado hasta completar todos los demas
//     interval$.pipe( take(2) )
// ).subscribe( console.log )


// ******************** Ejemplo 2 ********************
// const keyup$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest(
//     keyup$.pipe( pluck( 'type') ), 
//     click$.pipe( pluck( 'type') )
// )
// .subscribe(console.log);


// ******************** Ejemplo 3 ********************
const input1 = document.createElement('input');
const input2 = document.createElement('input');


// Helper
const getInpuString = ( elm: HTMLElement ) => 
        fromEvent<KeyboardEvent>( elm, 'keyup' ).pipe(
        pluck<KeyboardEvent, string>( 'target', 'value' )
);

input1.placeholder = 'email@email.com';
input2.placeholder = '******';
input2.type = 'password';
document.body.append( input1, input2);

combineLatest( 
    getInpuString( input1 ),
    getInpuString( input2 )
).subscribe(console.log)
