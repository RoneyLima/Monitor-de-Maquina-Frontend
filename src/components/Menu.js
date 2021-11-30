import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaExclamationCircle, FaTh } from 'react-icons/fa';

import '../styles/Menu.css';




export default function Menu() {

    const [activeA, setActiveA] = useState(false);
    const [activeB, setActiveB] = useState(false);
    const [activeC, setActiveC] = useState(false);


    let buttonA_state = activeA ? "btn_active menuico" : "btn_deactive menuico";
    let buttonB_state = activeB ? "btn_active menuico" : "btn_deactive menuico";
    let buttonC_state = activeC ? "btn_active menuico" : "btn_deactive menuico";

    return (
        <div className="menu">
            <span className={buttonA_state}>
                <Link to="/" value="index" onClick={() => { setActiveA(!activeA); setActiveB(false); setActiveC(false)  }} >
                <h1><FaClipboardList /></h1>
                </Link>
            </span>

            <span className={buttonB_state}>
                <Link to="/A" value="a" onClick={() =>  { setActiveB(!activeB); setActiveA(false);  setActiveC(false);  }} >
                <h1><FaTh /></h1>
                </Link>
            </span>

            <span className={buttonC_state}>
                
                <Link to="/B" value="b" onClick={() => { setActiveC(!activeC); setActiveA(false); setActiveB(false); }} >
                    <h1><FaExclamationCircle /></h1>
                </Link>
            </span>
        </div>
    )
}