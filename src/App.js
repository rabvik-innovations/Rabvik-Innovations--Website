// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPage from './containers/TeamPage';
import Home from './containers/Home';
import InnovationLab from "./containers/InnovationLab";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/innovation-lab" component={InnovationLab} />
        <Route path="/team" component={TeamPage} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
