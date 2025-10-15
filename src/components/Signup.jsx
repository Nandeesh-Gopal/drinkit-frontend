import Nav from "./Nav";
function signup(){
    return(
        <>
        <Nav/>
        <form className="login-form">
            <h2>Signup</h2>
                <div>
                    Enter Your Name:<br/>
                    <input type="text" placeholder='Username' />
                </div>
                <div>
                    Enter Your email:<br/>
                    <input type="text" placeholder='email' />
                </div>
                <div>
                    Enter Your Password:<br/>
                    <input type="password" placeholder='Password' />
                </div>
                <button type='submit'>Signup</button>
                <div>
                    Already have an account?
                    <a href="/login"> login!</a>
                </div>
        </form>
        </>
    )
}
export default signup;