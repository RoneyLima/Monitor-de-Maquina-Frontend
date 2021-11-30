import { Button, Badge, Row, Col, Container } from "react-bootstrap";
import { useCallback, useContext, useEffect, useState } from "react";
import { ContextSocket } from "../context/context-sio";
import '../styles/A.css';
import '../data-mock.json'

export default function PageA(props) {

    const socketio = useContext(ContextSocket);
    const [maquina, setMaquina] = useState(false);
    const [contagem, setContagem] = useState(0);
    const [dados, setDados] = useState({
        limite: '',
        produto: '',
        lote: ''
    });


    let estado_maquina = maquina ? 'LIGADA' : 'DESLIGADA';

    const handleEstadoDaMaquina = useCallback(() => {
        console.log('Mudando o State');
        setMaquina(!maquina)
    }, [maquina]);


    const mudaMaquina = () => {
        if (!maquina) {
            socketio.emit("maquina_on", dados.limite);
        }
        else if (maquina) {
            socketio.emit("maquina_off");
        }
    };

    const handleSetLimite = useCallback((data) => {
        setDados({
            limite: data.limite,
            produto: data.produto,
            lote: data.lote        
        })
        console.log(dados);
    }, [])


    const limiteExtendido = useCallback((limext) => {
        setDados({
            ...dados,
            limite:limext
        })
        console.log(limext);
    }, [dados])


    useEffect(() => {

        socketio.on('maquina_ligada', handleEstadoDaMaquina);
        socketio.on('maquina_desligada', handleEstadoDaMaquina);
        
        // Define o limite da contagem
        socketio.on('set_limite', data => handleSetLimite(data));

        socketio.on('conta_golpes', (cont) => {
            setContagem(cont)
        });
        
        socketio.on('limite_extendido', limext => limiteExtendido(limext));


        return () => {

        }
    }, [socketio, handleEstadoDaMaquina, handleSetLimite, limiteExtendido])


    return (
        <div className="info">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col>
                        <span className="item card">
                            <h3>
                                Status da Máquina:
                                <br />
                                <Badge bg={maquina ? "success" : "danger"}> {estado_maquina} </Badge>
                                <br />
                                <Button variant="primary" onClick={mudaMaquina}> ON/OFF</Button>

                            </h3>
                        </span>
                    </Col>
                    <Col>

                        <span className="item card">
                            <h3>
                                Soldagens Contínuas:<br />
                                <Badge bg="secondary">{contagem}</Badge>
                            </h3>
                            <h3>
                                Limite de golpes: <br />
                                <Badge bg="secondary">{dados.limite}</Badge>
                            </h3>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <span className="item card">
                            
                            <h3>
                                Informações do Produto <br />
                            </h3>
                            <h4>Tipo: <Badge bg="secondary">{dados.produto}</Badge></h4>
                            <h4>Lote: <Badge bg="secondary">{dados.lote}</Badge></h4>

                            <br /> <br />
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
