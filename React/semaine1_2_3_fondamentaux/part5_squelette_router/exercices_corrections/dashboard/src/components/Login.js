import React, { Component } from 'react';
import { 
  Redirect 
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      auth: false, // auth pour vérifier que l'authentification
      message :''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handSubmit = this.handSubmit.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value, message : '' })
  }

  handSubmit(e) {
    e.preventDefault();

    if (this.state.email === 'alan@alan.fr' && this.state.password === '123') {

      this.setState({ 
        auth: true, 
        message : 'Welcome Dashboard',
        password : '' // pas d'enregistrement de mot de passe par secu
      });
      
      return;
    }

    this.setState({
      message : `votre identifiant ou password n'est pas valid`, password : ''   })
  }

  render() {
    const { auth, email, password, message } = this.state;

    if (auth === true)
      return (
        <Redirect
          to={{ 
            pathname: '/dashboard', 
            state: { fromLogin: "/login", message: "Welcome Dashboard" } 
          }}
        />
      )

    return (
      <form onSubmit={this.handSubmit}>
        {message && <p>{message}</p>}
        <p>Email <input onChange={this.handleChange} type="email" name="email" value={email} /></p>
        <p>Pass <input onChange={this.handleChange} type="password" name="password" value={password} /></p>
        <p> <button>Valider</button>  </p>
      </form>
    )
  }
}

export default Login;
