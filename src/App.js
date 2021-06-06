import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
