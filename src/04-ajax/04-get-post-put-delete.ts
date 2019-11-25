import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

// GET
// ajax.get( url, {headers})
let pet$ = ajax.get(url, {
    'Content-type': 'application/json'
}).subscribe(console.log)

// POST
// ajax.post( url, {body}, {headers})
let post$ = ajax.post(url, 
{
    id: 1,
    nombre: 'Chema'
},
{
    'token': 'ABC123'
})
.subscribe(console.log);


// PUT
// ajax.post( url, {body}, {headers})
let put$ = ajax.put(url, 
{
    id: 1,
    nombre: 'Chema'
},
{
    'token': 'ABC123'
})
.subscribe(console.log);


// DELETE
// ajax.detele( url, {headers})
let del$ = ajax.delete(url, {
    'Content-type': 'application/json'
}).subscribe(console.log);


// Determinar tipo programáticamente
// Mayor control sobre peticiones (mismo resultado)
// ajax({}: AjaxObservable)
ajax({
    url,
    method: 'GET',
    headers: {
        token: 'ABC123CONTROL'
    },
    body: {
        id: 1,
        nombre: 'Chema'
    }
}).subscribe(console.log);