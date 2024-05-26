import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">StoryBook</h3>
                <span className="loginDesc">
                    Connect with friends and 
                    the world around you on StoryBook.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <span className="LoginRegister">Don't have an account, Click here to</span>
                    <button className="loginRegisterButton">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
