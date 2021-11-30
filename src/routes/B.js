import { useEffect, useState, useCallback, useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import { ContextSocket } from "../context/context-sio";
import '../styles/B.css'

export default function PageB(props) {
    
    const {socket, contagem, limite_padrao} = useContext(ContextSocket);

    

    const [count01, setCount01] = useState(0);
    const [count02, setCount02] = useState(0);
    const [count03, setCount03] = useState(0);
    const [count04, setCount04] = useState(0);
    const [count05, setCount05] = useState(0);
    const [count06, setCount06] = useState(0);
    const [count07, setCount07] = useState(0);
    const [count08, setCount08] = useState(0);
    const [count09, setCount09] = useState(0);
    const [count10, setCount10] = useState(0);
    const [count11, setCount11] = useState(0);
    const [count12, setCount12] = useState(0);
    const [count13, setCount13] = useState(0);
    const [count14, setCount14] = useState(0);
    const [count15, setCount15] = useState(0);


    const HandleChange = useCallback((num) => {
        
        setCount01(count01 + num);
        setCount02(count02 + num);
        setCount03(count03 + num);
        setCount04(count04 + num);
        setCount05(count05 + num);
        setCount06(count06 + num);
        setCount07(count07 + num);
        setCount08(count08 + num);
        setCount09(count09 + num);
        setCount10(count10 + num);
        setCount11(count11 + num);
        setCount12(count12 + num);
        setCount13(count13 + num);
        setCount14(count14 + num);
        setCount15(count15 + num);

    }, [count01, count02, count03, count04, count05, count06, count07, count08, count09, count10, count11, count12, count13, count14, count15])


    // RECEBER CONTAGEM DE GOLPES
    const contagemInicialHandler = useCallback((dados) => {
        let data = JSON.parse(dados);
        console.log(dados);


        setCount01(data[0]);
        setCount02(data[1]);
        setCount03(data[2]);
        setCount04(data[3]);
        setCount05(data[4]);
        setCount06(data[5]);
        setCount07(data[6]);
        setCount08(data[7]);
        setCount09(data[8]);
        setCount10(data[9]);
        setCount11(data[10]);
        setCount12(data[11]);
        setCount13(data[12]);
        setCount14(data[13]);
        setCount15(data[14]);

    }, [])


useEffect(() => {

    socket.on('conta_golpes', (num) => HandleChange(num));

    contagemInicialHandler(contagem);

    return () =>{
    // socket.off('conta_golpes', HandleChange);
    }


    }, [socket, HandleChange, contagemInicialHandler]);
    
    return (
        <div className="grid">
            <h3>
                <Button variant="success">01 <Badge bg="secondary">{count01}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">02 <Badge bg="secondary">{count02}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">03 <Badge bg="secondary">{count03}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">04 <Badge bg="secondary">{count04}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">05 <Badge bg="secondary">{count05}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">06 <Badge bg="secondary">{count06}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">07 <Badge bg="secondary">{count07}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">08 <Badge bg="secondary">{count08}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">09 <Badge bg="secondary">{count09}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">10 <Badge bg="secondary">{count10}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">11 <Badge bg="secondary">{count11}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">12 <Badge bg="secondary">{count12}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">13 <Badge bg="secondary">{count13}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">14 <Badge bg="secondary">{count14}</Badge></Button>
            </h3>
            <h3>
                <Button variant="success">15 <Badge bg="secondary">{count15}</Badge></Button>
            </h3>

        </div>


    )
}