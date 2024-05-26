import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import AuthProvider from './context/AuthProvider';
import Register from './Components/register/Register';
import Login from "./Components/login/Login";
import Profile from "./Components/profile/Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
