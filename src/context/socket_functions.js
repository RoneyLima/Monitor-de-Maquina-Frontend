
import { useState } from "react";
import client from "socket.io-client"

export const socket = client('http://127.0.0.1:5000/');



const conta = () => {
    socket.on('conta_golpes', (contador) => {
    const [contagem, setContagem] = useState(contador)
    })
}