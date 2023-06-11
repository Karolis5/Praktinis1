import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter , Route , Link , Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import BurgerScreen from './screens/BurgerScreen';
import Addpizza from './screens/Addpizza';
import AddBurger from './screens/Addburger';
import Editpizza from './screens/Editpizza';
import Editburger from './screens/Editburger';

function App() {
  return (
    <div className="App">






       <BrowserRouter>
       <Navbar/>
       
  
       <Route path="/" exact component={Homescreen} />

          <Route path="/burgers" exact component={BurgerScreen} />
          

          <Route path="/editpizza" component={Editpizza} />
          <Route path="/editburger" component={Editburger} />
          <Route path="/Addpizza" component={Addpizza} />
          <Route path='/Addburger' component={AddBurger} />
          <Route path="/cart" exact component={Cartscreen}/>
          <Route path="/register" exact component={Registerscreen}/>
          <Route path='/login' exact component={Loginscreen}/>
          <Route path='/admin' component={Adminscreen}/>
          <Route path='/admin/editpizza' exact component={Editpizza} />
          
  
          <Route path='/Orders' component={Ordersscreen} />
          
          
       </BrowserRouter>
       
    </div>
  );
}

export default App;
