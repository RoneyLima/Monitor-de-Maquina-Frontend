import { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { ContextSocket } from "../context/context-sio";


export default function Index(props) {

    const socketio = useContext(ContextSocket);

    const [inidata, setData] = useState({
        limite: '',
        produto: '',
        lote: ''
    });

    const handleSubmit = (e) => {
        socketio.emit('novo_limite', inidata)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setData({
            ...inidata,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='form-inicio'>
            <center>
                <Form >
                    <h2>Bem-Vindo (a) !</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Informe o limite de golpes</Form.Label>
                        <Form.Control type="number" placeholder="Limite" name='limite' value={inidata.limite} onChange={handleChange} bsPrefix={'recebe-numero'} />
                        <Form.Text className="text-muted">
                            Valor limite até a parada para inspeção.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Informe o produto a ser monitorado:</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Produto" name='produto' value={inidata.produto} onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Produto em produção.
                                </Form.Text>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Lote" name='lote' value={inidata.lote} onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Lote que será inspecionado.
                                </Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Button variant="primary" onClick={e => handleSubmit(e)} href='/A' value="a">
                        Iniciar
                    </Button>
                </Form>
            </center>
        </div>
    )
}
