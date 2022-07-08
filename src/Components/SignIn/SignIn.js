import React, { Component } from "react";
import { MdMailOutline, MdOutlineVpnKey } from 'react-icons/md';
import Logo from '../../Images/Logo.png'
import SignInBackground from '../../Images/SignInBackground.jpeg'
import './SignIn.css'

class Signin extends Component  {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        // fetch('http://localhost:5000/signin', {
        //     method: 'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({
        //         email: this.state.signInEmail,
        //         password: this.state.signInPassword
        //     })            
        // })
        // .then(response => response.json())
        // .then(data => {
        // //     if (data.id){
        //         this.props.loadUser(data);
                this.props.onRouteChange("home");
        //     }
        // })
        // .catch(err => console.log(err))
    }

    render(){
    const { onRouteChange } = this.props;
        return(
            <div className="flex items-center h-100 w-100 bgWash" style={{background: `url(${SignInBackground}) center center/cover no-repeat rgba(255,255,255,0.75) `}}>
                <div className="dib v-mid w-100">
                    <article className="mw6 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 signinform white">
                    <div className="f2 garamond tc"><img src={Logo} alt="Logo" width="150px"/></div>
                        <main className="pa1">
                            <div className="measure tc">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <div className="f2 fw6 ph0 mh0 tc">INICIAR SESION</div>
                                    <br /><br />
                                    <div className="mt3 bb tl">
                                        <MdMailOutline />
                                        <input onChange={this.onEmailChange} className="pa2 input-reset bn bg-transparent" type="email" placeholder="CORREO" name="email-address"  id="email-address" />
                                    </div>
                                    <br /><br />
                                    <div className="mv3 bb tl">
                                        <MdOutlineVpnKey />
                                        <input onChange={this.onPasswordChange} className="pa2 input-reset bn bg-transparent" type="password" placeholder="CONTRASEÑA" name="password"  id="password" />
                                    </div>
                                </fieldset>
                                <br /><br />
                                <div className="">
                                    <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba black-80 bg-white grow pointer f6 dib br-pill" type="submit" value="INICIO" />
                                </div>
                                <div className="lh-copy mt3">
                                    <p onClick={() => onRouteChange("register")} className="f6 link dim db pointer">REGISTRARSE</p>
                                </div>
                            </div>
                        </main>
                    </article>
                </div>
            </div>
        );
    }
}

export default Signin;