import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div class="wrapper fadeInDown">
            <div id="formContent">
              {/* <!-- Tabs Titles --> */}
              <h2 class="active"> Forgot password </h2>
              {/* <h2 class="inactive underlineHover">Sign Up </h2> */}
          
              {/* <!-- Icon --> */}
              {/* <div class="fadeIn first">
                <img src="https://media.istockphoto.com/photos/bright-neon-font-with-fluorescent-yellow-tubes-letter-s-picture-id1040898222?k=6&m=1040898222&s=612x612&w=0&h=5kHRi8e7zKfCv5Jq2EhVUMGxmauh_HvRzQS1mYuvu4E=" id="icon" alt="User Icon" />
              </div>
           */}
              {/* <!-- Login Form --> */}
              <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="password"/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="confirm password"/>
                <input type="submit" class="fadeIn fourth" value="Submit"/>
              </form>
              
            </div>
          </div>
        )
    }
}

export default Login;
