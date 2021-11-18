import { createContext } from "react";
import client from "socket.io-client"

export const ContextSocket = createContext();

export const socket = client('http://127.0.0.1:5000/');
