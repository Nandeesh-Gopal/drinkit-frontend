import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import Nav from './Nav';
function Login(){
    const navi=useNavigate();

    return(
        <> 
            <Nav />
                <form className="login-form">
                    <h2>Login</h2>
                    <div>
                        Enter Your email:<br/>
                        <input type="text" placeholder='email' />
                    </div>
                    <div>
                        Enter Your Password:<br/>
                        <input type="password" placeholder='Password' />
                    </div>
                    <button type='submit'>Login</button>
                    <div>
                        Don't have an account?
                        <a href="/signup"> signup!</a>
                    </div>
                </form>
        </>
    )
}
export default Login;