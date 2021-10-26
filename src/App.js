// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamPage from './containers/TeamPage';
import Home from './containers/Home';
import About from './containers/About';
import InnovationLab from './containers/InnovationLab';
import Blog from './containers/Blog';
import Gallery from './containers/Gallery';
import Periodical from './containers/Periodical';
import Contact from './containers/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/team" component={TeamPage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/periodical" component={Periodical} />
          <Route path="/innovation-lab" component={InnovationLab} />
          <Route path="/blog" component={Blog} />
          <Route path="/aboutus" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />

        </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
