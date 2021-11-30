import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { ContextSocket } from './context/context-sio';
import {socket} from './context/socket_functions'
import Index from './routes/index'
import pageA from './routes/A'
import pageB from './routes/B'
import Menu from './components/Menu';
import Header from './components/Header';
import './styles/App.css';


function App() {


  const [contagem, setContagem] = useState()
  const limite_padrao = 25

  socket.emit('iniciando_front');

  useEffect(() => {

    socket.on('conta_golpes', (cont) => {
      setContagem(cont)
    });

    socket.on('contagem_inicial', (dados) => {
      let data = JSON.parse(dados);
      console.log(data)
    });

    return () => {

    }
  }, [])

  return (

    <ContextSocket.Provider value={{socket, contagem, limite_padrao}}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main className="main">
          <Menu />
          <div className='visual'>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/a" component={pageA} />
            <Route exact path="/b" component={pageB} />
          </Switch>
          </div>
        </main>
      </BrowserRouter>
    </ContextSocket.Provider>
  );
}

export default App;
