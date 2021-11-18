import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { socket, ContextSocket } from './context/context-sio';
import Index from './routes/index'
import pageA from './routes/A'
import pageB from './routes/B'
import Menu from './components/Menu';
import Header from './components/Header';
import './styles/App.css';


function App() {


  const [contagem, setContagem] = useState(0);

  socket.emit('iniciando_front');
  socket.on('client_connect', () => console.log('Front Conectado ao servidor'))


  useEffect(() => {

    socket.on('conta_golpes', (cont) => {
      setContagem(cont)
    });


    return () => {

    }
  }, [contagem])

  return (

    <ContextSocket.Provider value={socket}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main className="main">
          <Menu />
          <div className='visual'>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/a" component={pageA} contagem={contagem} />
            <Route exact path="/b" component={pageB} contagem={contagem} />
          </Switch>
          </div>
        </main>
      </BrowserRouter>
    </ContextSocket.Provider>
  );
}

export default App;
