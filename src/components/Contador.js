import { useState } from "react";
import { Button } from "react-bootstrap";

function Contador(){


    const [contador, setContador] = useState(5);

    const sumar = () => {
        let contador1 = contador;

        contador1++;

        setContador(contador1);
    }

    const restar = () => {
        let contador1 = contador;

        contador1--;

        setContador(contador1);
    }

    const reiniciar = () => {
        setContador(0);
    }

    return(
        <>
            <p>Contador: { contador }</p>
            <p>
                <Button variant="primary" onClick={ sumar }>+</Button>{' '}
                <Button variant="danger" onClick={ restar }>-</Button>{' '}
                <Button variant="success" onClick={ reiniciar }>Inicializar</Button>{' '}
            </p>
        </>
    );
}

export default Contador;
