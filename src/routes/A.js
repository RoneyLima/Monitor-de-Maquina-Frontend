import { Button, Badge, Row, Col, Container } from "react-bootstrap";
import { useCallback, useContext, useEffect, useState } from "react";
import { ContextSocket } from "../context/context-sio";
import '../styles/A.css';
// import '../data-mock.json'

export default function PageA(props) {

    const {socket, contagem, limite_padrao} = useContext(ContextSocket);

    const [maquina, setMaquina] = useState(false);
    // const [contagem, setContagem] = useState(0);
    const [dados, setDados] = useState({
        limite:limite_padrao,
        eletrodo: 0,
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
            socket.emit("maquina_on", dados);
        }
        else if (maquina) {
            socket.emit("maquina_off");
        }
    };

    const handleSetLimite = useCallback((data) => {
        setDados({
            limite: data.limite,
            eletrodo: data.eletrodo,
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
        // handleSetLimite({limite: limite_padrao,eletrodo: 5})
        // setDados({limite: limite_padrao, eletrodo: 5})

        socket.on('maquina_ligada', handleEstadoDaMaquina);
        socket.on('maquina_desligada', handleEstadoDaMaquina);
        
        // Define o limite da contagem
        // socket.on('set_limite', data => handleSetLimite(data));

        // socket.on('conta_golpes', (cont) => {
        //     setContagem(cont)
        // });
        
        // socket.on('limite_extendido', limext => limiteExtendido(limext));


        return () => {

        }
    }, [socket, handleEstadoDaMaquina, handleSetLimite, limiteExtendido])


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
                                <Badge bg="secondary">{limite_padrao}</Badge>
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
