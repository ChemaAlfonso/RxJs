import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

// Devuelve la respuesta directamente en JSON
// const obs$ = ajax.getJSON( url );

// Segundo parámetro envía headers
const obs$ = ajax.getJSON( url, {
    'Content-type': 'application/json',
    'token': 'ABC123'
});


obs$.subscribe( data => console.log('Data: ', data) );