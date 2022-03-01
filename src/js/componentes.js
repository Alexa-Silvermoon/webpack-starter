import '../css/componentes.css'; //traigo mi estilo h1 indigo
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'sin nombre') => { //si no entra nada a nombre, lo pone como sin nombre

    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `hola ${nombre} !!!`;

    document.body.append(h1);

    //img
    /*
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
    */

}
