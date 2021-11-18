import '../styles/Header.css';
import EletrodoLimiteModal from './substituicaoModal';
import { Navbar } from 'react-bootstrap';


export default function Header() {
  return (
    <Navbar bg="light" expand="xxl">

        <EletrodoLimiteModal />
        <Navbar.Brand href="/A">
          <img src="/logo-arcelormittal.png" className="logo d-inline-block align-top "
            alt="Arcelormittal Logo" />
        </Navbar.Brand>

        <Navbar.Brand href="/">
          Software de Monitoramento da Máquina de Fabricação de Telas
        </Navbar.Brand>


        <Navbar.Brand href="/A">
          <img src="/logo-UNIP-1024x683.png" className="logo d-inline-block align-top" alt="Unip Logo" />
        </Navbar.Brand>

    </Navbar>
  )
}