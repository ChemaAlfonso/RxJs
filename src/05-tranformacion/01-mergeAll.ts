import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

//Unifica la respuesta de un observable devuelto por otro en una sola linea de tiempo
// Interfaces
import { GithubUsersResponse, GithubUser } from '../interfaces/githubUsers.interface';

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log(usuarios);
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li  = document.createElement('li');

        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href  = usuario.html_url; 
        anchor.text  = 'Ver página'; 
        anchor.target  = '_blank'; 

        li.append( img );
        li.append( usuario.login + ' ' );        
        li.append(anchor);

        orderList.append(li);
    }
}

// REFERENCIAS
const body       = document.querySelector('body');
const textInput  = document.createElement('input');
const orderList  = document.createElement('ol');
body.append( textInput, orderList )


// STREAMS
const input$ = fromEvent<KeyboardEvent>( textInput , 'keyup' );

// SIN APLANAMIENTO
// input$.pipe(
//     debounceTime(500),
//     map( event => {
//         const texto = event.target['value'];

//         return ajax.getJSON(
//           `https://api.github.com/search/users?q=${texto}`
//         );
//     })
// ).subscribe( resp => {
//     resp.subscribe(console.log )
// });

// CON APLANAMIENTO
input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResponse>>( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    mergeAll<GithubUsersResponse>(),
    pluck<GithubUsersResponse, GithubUser[]>('items')
).subscribe( mostrarUsuarios );