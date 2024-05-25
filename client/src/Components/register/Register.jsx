import "./register.css"

export default function Register() {
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
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <div className="nameContainer">
                        <div className="fnameLeft">
                            <input placeholder="Firstname" className="loginInput" />
                        </div>
                        <div className="lnameRight">
                            <input placeholder="Lastname" className="loginInput" />
                        </div>
                        </div>
                    <input placeholder="Date of Birth" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
