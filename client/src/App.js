import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AuthProvider from './context/AuthProvider';
import PrivateRoute from "./context/PrivateRoute";

import Home from './pages/home/Home';
import ForgotPassword from "./pages/forgot/Forgot";
import ResetPassword from "./pages/reset/Reset";
import Register from './Components/register/Register';
import Login from "./Components/login/Login";
import Profile from "./Components/profile/Profile";
import EditProfile from "./Components/edit_profile/EditProfile";
import LandingPage from './Components/landingPage/LandingPage';
import VerificationSuccess from "./pages/success/Success";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/landing" component={LandingPage}/>
                    <Route path="/reset" component={ResetPassword}/>
                    <Route path="/forgot" component={ForgotPassword}/>
                    <Route path="/success" component={VerificationSuccess}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <PrivateRoute path="/edit" component={EditProfile}/>
                    <PrivateRoute path="/" component={Home}/>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
