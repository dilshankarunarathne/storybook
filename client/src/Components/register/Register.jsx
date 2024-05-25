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
                            <input placeholder="Firstname" className="registerInput" />
                        </div>
                        <div className="lnameRight">
                            <input placeholder="Lastname" className="registerInput" />
                        </div>
                        </div>
                    <input placeholder="Date of Birth" className="registerInput" />
                    <button className="registerButton">Sign Up</button>
                    <button className="logRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
