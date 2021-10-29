import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './Pages/Header/Service/Service';
import Order from './Pages/Header/Service/Order/Order';
import Header from './Pages/Header/Header';
// import Home from './Pages/Home/Home';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Home/Banner/Footer/Footer';
import NotFound from './Pages/Header/Service/NotFound/NotFound';
// import Header from './Pages/Header/Header';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NewService from './Pages/MyOrders/NewService/NewService';
// import NotFound from './Pages/MyOrders/NotFound/NotFound';
// // import Manage from './Pages/MyOrders/ManageOrders/Manage';
// import Manage from './Pages/MyOrders/ManageOrders/Manage'

function App() {
  return (
    <div className="App">
      <Router>
       <Header></Header>
       <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/orders">
            <Order></Order>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </div>
  );
}

export default App;
