import React from 'react';
import LoginForm from './LoginForm'
<<<<<<< HEAD
import './style.css'

function Login(props){
=======
import { connect } from 'dva'

import './style.css'

function Login(props) {
>>>>>>> 9-25 update

    return (
        <div className="login">
            <LoginForm />
        </div>
    )
}

<<<<<<< HEAD
export default Login
=======


export default connect()(Login)
>>>>>>> 9-25 update
