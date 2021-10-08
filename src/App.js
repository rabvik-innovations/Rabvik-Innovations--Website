// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPage from './containers/TeamPage';
import Home from './containers/Home';
import Blog from './components/Blog';

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/Team" component={TeamPage} />
        <Route path="/" component={Home} />
        <Route path="/Blogs" component={Blog} />
      </Switch>
    </BrowserRouter>
    </>
  );
}


export default App;
