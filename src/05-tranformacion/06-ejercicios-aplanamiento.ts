import { fromEvent, of } from 'rxjs';
import { tap, pluck, map, mergeMap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const httpLoginRequest = ( userCredentials ) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userCredentials)
            .pipe(
                pluck('response', 'token'),
                catchError( err => of('Error!'))
            )
};

// HTML
const form       = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass  = document.createElement('input');
const btnSubmit  = document.createElement('button');

// Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Iniciar sesión';

form.append( inputEmail, inputPass, btnSubmit );
document.body.append(form);

// STREAMS
const submitForm$ = fromEvent( form, 'submit');

submitForm$.pipe(
    tap( (event) => event.preventDefault()),
    pluck('target'),
    map( target => ({
        email: target[0].value,
        password: target[1].value
    })),
    // Resuelve todas las peticiones
    // (Poco eficiente)
    //mergeMap( httpLoginRequest )

    // Solo toma la última y la resuelve
    //switchMap( httpLoginRequest )

    // Solo toma la primera hasta que se resuelva
    exhaustMap( httpLoginRequest )
)
.subscribe(console.log)