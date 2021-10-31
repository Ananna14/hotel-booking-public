import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './Pages/Header/Service/Service';
import Order from './Pages/Header/Service/Order/Order';
import Header from './Pages/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Home/Banner/Footer/Footer';
import NotFound from './Pages/Header/Service/NotFound/NotFound';
import Login from './Pages/Login/Login';
// import AuthProvider from './Firebase/Context/AuthProvider';
import Details from './Pages/Home/Details';
import Manage from './Pages/Header/Service/Order/Manage';
import ExtraAdd from './Pages/Home/ExtraAdd/ExtraAdd';
import ExtraOne from './Pages/Home/ExtraAdd/ExtraOne/ExtraOne';
import AuthProvider from './Firebase/Context/AuthProvider';
import PrivateRouter from './Firebase/Context/PrivateRouter';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       <Header></Header>
       <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <ExtraOne></ExtraOne>
            <ExtraAdd></ExtraAdd>
          </Route>
          <Route path="/home">
            <Home></Home>
            <ExtraOne></ExtraOne>
            <ExtraAdd></ExtraAdd>
          </Route>
          <PrivateRouter path="/myOrder">
            <Order></Order>
          </PrivateRouter>
          <Route path="/orders">
            <Manage></Manage>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     </div>
  );
}

export default App;
