

import React from 'react';
import './Login.css';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { login_request, socialLogin_request } from "./../../Action/login_action"
import { store } from '../..';

const responseFacebook = (response) => {
  console.log(response);
}

class Login extends React.Component {

  componentDidMount() {
    console.log("store---->", store.getState().loginReducer)
  }


  handleLogin = () => {
    this.props.history.push({
      pathname: "/forgotPassword",
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert("lojjjj")
    let object = { "email": "vivek.brainium@gmail.com", "password": "123456", "devicetoken": "123", "apptype": "WEB" }
    this.props.getLoginApi(object)
  }


  googleSignup = (res) => {
    console.log("res for google==>", res)
    let googleObj = {
      "name": res.name,
      "email": res.email,
      "socialLogin": {
        "type": "GOOGLE",
        "image": res.imageUrl,
        "socialId": res.googleId
      },
      "devicetoken": 123456,
      "apptype": "ANDROID"
    }

    this.props.socialLogin(googleObj)
  }

  render() {
    const responseGoogle = (response) => {
      var res = response.profileObj;
      this.googleSignup(res);
    }


    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 class="active"> Sign In </h2>

          <form onSubmit={(event) => this.handleSubmit(event)}>

            <input type="text" className="fadeIn second" name="email" placeholder="Email" />
            <input type="text" className="fadeIn third" name="password" placeholder="Password" />


            <input type="submit" className="fadeIn fourth" value="Log In" />

            <button >
              <FacebookLogin
                appId="262442971559552"
                autoLoad={true}
                textButton=""
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />

            </button>
            <GoogleLogin
              clientId="487514539460-j9ec2fgd70lu7nr1c6oi7f70v6qkga28.apps.googleusercontent.com"

              buttonText="Login with Google"

              onSuccess={responseGoogle}

              onFailure={responseGoogle} >

            </GoogleLogin>

          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#" onClick={() => this.handleLogin()}>Forgot Password?</a>
          </div>

        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log("state===>", state);

  return {
    loginData: state.loginReducer.response,

  }
}



const mapDispatchToProps = dispatch => {

  return {
    getLoginApi: (object) => {
      dispatch(login_request(object))
    },
    socialLogin: (object) => {
      dispatch(socialLogin_request(object))
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

