import React from 'react';
import '../assets/styles/components/NotFount.scss'
import tristeIcon from '../assets/static/triste.png'

const NotFount = () =>(
    <section>
        <div className="wrap">
            <div className="box">
                <div className="text animated pulse">
                    <h1>Error 404</h1>
                </div>
                <p className="text p__error--404">HTTP 404 Not Found o HTTP 404 No encontrado es un código de estado HTTP que indica que el host ha sido capaz de comunicarse con el servidor, pero no existe el recurso que ha sido pedido. Este error no debe ser confundido con "servidor web no encontrado" o errores similares en los que se indica que no se ha podido realizar la conexión con el servidor.</p>
                <div className="text animated wobble">
                    <img src={tristeIcon} alt="triste" />
                </div>
            </div>
        </div>
    </section>
);

export default NotFount;