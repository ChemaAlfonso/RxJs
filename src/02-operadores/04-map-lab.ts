import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ex neque, eu rutrum lectus fringilla a. Cras tincidunt felis id dolor elementum, id dapibus nibh aliquam. Nam commodo venenatis diam vel rhoncus. Pellentesque urna ipsum, vestibulum pretium arcu non, dictum sollicitudin magna. Aliquam consequat sapien et odio placerat imperdiet. Curabitur ut purus vitae diam ornare tincidunt. Nunc enim nisi, vulputate a ornare id, consectetur at odio. Sed elementum quis urna sed viverra. Maecenas id turpis et elit posuere vehicula. Fusce faucibus et felis ut feugiat. Donec molestie commodo venenatis. Cras venenatis cursus nibh. Ut rhoncus tortor lectus, porta tincidunt orci pretium quis. Mauris quis malesuada sem. In consectetur auctor mi at tincidunt.
<br/>
Suspendisse in tristique lectus, id ultrices tortor. Nulla facilisi. Duis ac quam sed eros sodales tincidunt. Aenean sagittis elit ultrices erat imperdiet vehicula. Donec sed metus at quam sagittis ornare. Ut tincidunt dictum libero eu lobortis. Aenean ac suscipit felis. In id euismod elit.
<br/>
Praesent a velit eu mi elementum interdum. Nullam in fermentum odio. Vivamus quis leo justo. Curabitur in lacus eu augue pretium accumsan ut quis dui. Cras efficitur ex sapien, eu malesuada est venenatis volutpat. Donec sollicitudin, sapien ut lacinia imperdiet, nisi orci euismod nisi, et hendrerit magna tortor vel nulla. Ut commodo id libero at vulputate. Sed volutpat nibh fringilla sapien luctus dictum.
<br/>
Donec ligula augue, lobortis vitae ante ut, viverra tincidunt mauris. Sed laoreet elit tempus, sodales libero eu, elementum enim. Cras turpis justo, ullamcorper nec sapien et, eleifend viverra dui. Ut tincidunt gravida ligula, sit amet porttitor felis mattis vel. Morbi nunc urna, facilisis quis nisi in, elementum ullamcorper nisi. In suscipit tincidunt est ac viverra. Nam quis ante et purus rhoncus pretium eu nec ex. Quisque dapibus erat in dictum tincidunt. Pellentesque sit amet vehicula diam. Fusce ullamcorper et massa eu condimentum. Vivamus dignissim auctor dolor, et sodales ligula consequat eu. Nullam turpis ligula, facilisis ut lectus a, auctor imperdiet eros. Maecenas vulputate suscipit accumsan. Etiam quis rutrum nisl. Quisque consectetur orci quis ligula vehicula consequat. Vestibulum vel purus ut purus mattis ullamcorper at sed lorem.

`;

const body = document.querySelector('body');
body.append(texto);

const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar')
body.append(progressbar);

// Calculo scroll
const porcentajeScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
};


// Streams
const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(
    map( event => porcentajeScroll(event) ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressbar.style.width = `${ porcentaje }%`;
})