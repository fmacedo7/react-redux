import React from "react";

export default (props) => {
    const { min, max } = props; //Destructuring, e o mesmo que const min = props.min; const max = props.max

    const aleatorio = parseInt(Math.random() * (max - min)) + min; //gerar um valor aleatorio
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p>
                <strong>Valor Minimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Maximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Sorteado: </strong> {aleatorio}
            </p>
        </div>
    )
};