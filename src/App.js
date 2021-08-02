import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header  from './components/Header'
import { Home } from "./pages/Home";
import  Details  from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;