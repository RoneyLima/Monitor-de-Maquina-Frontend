import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { ContextSocket } from "../context/context-sio";



export default function TesteComponente() {

    const socketio = useContext(ContextSocket)

    const [contagem, setContagem] = useState('');
    const [teste, setTeste] = useState('COISA');

    const handleContagem = useCallback(() => {
        setTeste('AS COISAS MUDAM');
    }, []);

    const mudarCoisas = useCallback(() => {
        socketio.emit("mudar");
    }, []);


    useEffect(() => {
        
        // subscribe to socketio events
        socketio.on('mudar_coisas', handleContagem);

        

        return () => {
            // before the component is destroyed
            // unbind all event handlers used in this component
            // socketio.off("JOIN_REQUEST_ACCEPTED", handleInviteAccepted);
        };
    }, [socketio, handleContagem]);


    return (
        <div>
            {teste}
            <h2>Status da Contagem:{contagem}</h2>
            <Button variant="success" onClick={mudarCoisas}> Acessar chat</Button>
        </div>
    )
}