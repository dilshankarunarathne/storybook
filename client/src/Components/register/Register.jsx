import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">StoryBook</h3>
                <span className="registerDesc">
                    Connect with friends and 
                    the world around you on StoryBook.
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input type="text" placeholder="Username" className="registerInput" />
                    <input type="email" placeholder="Email" className="registerInput" />
                    <input type="password" placeholder="Password" className="registerInput" />
                    <input type="password" placeholder="Confirm Password" className="registerInput" />
                    <div className="nameContainer">
                        <div className="fnameLeft">
                            <input placeholder="First name" className="registerInput" />
                        </div>
                        <div className="lnameRight">
                            <input placeholder="Last name" className="registerInput" />
                        </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Date of Birth"
                      onFocus={(e) => e.target.type = 'date'}
                      className="registerInput"
                    />
                    <button className="registerButton">Sign Up</button>
                    <br />
                    Already have an account ?
                    <button className="logRegisterButton">Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}
