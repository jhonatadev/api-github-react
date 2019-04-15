import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: 'https://api.github.com/users',
        client_id: 'e53febbd554644d70b00',
        client_secret: '0eabb5d3af6d3ae419c42913f660f0523a19140e',
        count: 7,
        sort: 'created: asc'
      },
      user: [],
      repos: []
    }
  }

  getUser = (e) => {
    const user = e.targe.value;
  }
  render() {
    return (
      <div className="App">
        <NavBar/>

        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuarios do GitHub</h1>
            <p className="lead">Digite um nome para encontrar usuários e repositórios</p>
            <input onChange={this.getUser} id="search" type="text" className="form-control" required/>
          </div>        
        </div>
      </div>
    );
  }
}

export default App;
