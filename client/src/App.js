import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginSignup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
