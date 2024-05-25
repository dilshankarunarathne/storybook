import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './Components/login/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
