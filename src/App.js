// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPage from './containers/TeamPage';
import Home from './containers/Home';
import InnovationLab from './containers/InnovationLab';
import Gallery from './containers/Gallery';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/gallery" component={Gallery} />
          <Route path="/innovation-lab" component={InnovationLab} />
          <Route path="/Team" component={TeamPage} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
