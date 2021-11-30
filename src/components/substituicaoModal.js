import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import { IoAlertCircleOutline } from "react-icons/io5";
import { ContextSocket } from "../context/context-sio";



export default function EletrodoLimiteModal() {

    const {socket} = useContext(ContextSocket);

    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const [elesubstituido, setElesubstituido] = useState(0);

    const handleClose = () => {
        setShow(false);
        setIndex(0)
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(index + 1)
        if (index === 3) {
            setIndex(2)
        }
    }


    const handleTroca = (e) => {
        setElesubstituido(e.target.id)
        handleSelect()
        socket.emit('eletrodo_substituido', e.target.id)
        console.log('Substuido o eletrodo:', elesubstituido);
    }


    useEffect(() => {

        socket.on('limite_atingido', handleShow);

        return () => {

        }
    }, [socket])


    return (
        <>
            <Modal
                show={show}
                // onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // controls={false}
                dialogClassName='meu-modal'
            >

                <Modal.Header>
                    <Modal.Title>Atingido Limite de Golpes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel
                        activeIndex={index}
                        indicators={false}
                        controls={false}
                        touch={false}
                    // slide={false}
                    >
                        <Carousel.Item bsPrefix={'carousel-item alerta-limite'}>
                            <center><IoAlertCircleOutline />
                                <h3>Fazer inspeção nos eletrodos</h3>
                                <Button variant="success" onClick={handleSelect}> PROSSEGUIR </Button>
                            </center>
                        </Carousel.Item>

                        <Carousel.Item>
                            <h3>Algum Eletrodo foi substituído ?</h3>
                            <center>
                                <Button variant="warning" onClick={handleClose}> NÃO </Button>
                                <Button variant="success" onClick={handleSelect}> SIM </Button>
                            </center>
                        </Carousel.Item>

                        <Carousel.Item>
                            <h3>Informe o eletrodo substituído.</h3>
                            <span className='btns-eletrodos'>

                                <h1>
                                    <Button id={1} onClick={handleTroca} variant="success">01</Button>
                                </h1>
                                <h1>
                                    <Button id={2} onClick={handleTroca} variant="success">02</Button>
                                </h1>
                                <h1>
                                    <Button id={3} onClick={handleTroca} variant="success">03</Button>
                                </h1>
                                <h1>
                                    <Button id={4} onClick={handleTroca} variant="success">04</Button>
                                </h1>
                                <h1>
                                    <Button id={5} onClick={handleTroca} variant="success">05</Button>
                                </h1>
                                <h1>
                                    <Button id={6} onClick={handleTroca} variant="success">06</Button>
                                </h1>
                                <h1>
                                    <Button id={7} onClick={handleTroca} variant="success">07</Button>
                                </h1>
                                <h1>
                                    <Button id={8} onClick={handleTroca} variant="success">08</Button>
                                </h1>
                                <h1>
                                    <Button id={9} onClick={handleTroca} variant="success">09</Button>
                                </h1>
                                <h1>
                                    <Button id={10} onClick={handleTroca} variant="success">10</Button>
                                </h1>
                                <h1>
                                    <Button id={11} onClick={handleTroca} variant="success">11</Button>
                                </h1>
                                <h1>
                                    <Button id={12} onClick={handleTroca} variant="success">12</Button>
                                </h1>
                                <h1>
                                    <Button id={13} onClick={handleTroca} variant="success">13</Button>
                                </h1>
                                <h1>
                                    <Button id={14} onClick={handleTroca} variant="success">14</Button>
                                </h1>
                                <h1>
                                    <Button id={15} onClick={handleTroca} variant="success">15</Button>
                                </h1>
                            </span>
                        </Carousel.Item>

                        <Carousel.Item>
                            <h3>Mais algum eletrodo foi substituído ?</h3>
                            <center>
                                <Button variant="warning" onClick={handleClose}> NÃO </Button>
                                <Button variant="success" onClick={handleSelect}> SIM </Button>
                            </center>
                        </Carousel.Item>
                    </Carousel>

                </Modal.Body>
                {/* 
                
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}

            </Modal>
        </>
    );
}
