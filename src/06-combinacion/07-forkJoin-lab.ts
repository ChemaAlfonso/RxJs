import { forkJoin, of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { catchError } from "rxjs/operators";

const GIT_APIURL = 'https:api.github.com/users';
const GIT_USER   = 'ChemaAlfonso';

forkJoin({
    usuario: ajax.getJSON(
        `${ GIT_APIURL }/${GIT_USER}`
    ),
    repos: ajax.getJSON(
        `${ GIT_APIURL }/${GIT_USER}/repos23`
    ),
    gists: ajax.getJSON(
        `${ GIT_APIURL }/${GIT_USER}/gists`
    )
}).pipe(
    catchError( error => of( error.message ))
)
.subscribe( console.log )