import { asyncScheduler } from 'rxjs';

// *Realmente es una Subscription no un Observable


const saludar = () => console.log('Hola mundo');
const saludar2 = ( nombre ) => console.log(`Hola ${ nombre }`);

// Definición
// asyncScheduler.schedule( funcionAejecutar, Delay, Estado );

// Timeout
// asyncScheduler.schedule( saludar, 3000 );
// asyncScheduler.schedule( saludar2, 3000, 'Chema' );

// Interval
// NO PUEDE SER una función de flecha
const subs = asyncScheduler.schedule( function( state ){
    console.log('State', state);

    // Itera nuevamente
    this.schedule( state + 1, 1000 );

}, 3000, 0);


// Se puede comprobar de varias maneras

// Con timeOut
// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);

// Con otro asyncScheduler
asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )