import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Profile from './Profile';

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
    const user = e.target.value;

    const { url, client_id, client_secret, count, sort } = this.state.github;
    
      axios.get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data}));
    }
  
  render() {
    const { user } = this.state;
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

        { user.length !== 0 ? <Profile user={user}/> : null}
      </div>
    );
  }
}

export default App;
