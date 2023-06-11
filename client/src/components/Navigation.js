import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Navigation = () => {
  return (
    <nav>
      <div>
      <ul>
        <li>
        
          
          <NavLink to="/" className="pagebtn1" activeClassName="active">Pizzas</NavLink>
        </li>
        <li>
          <NavLink  to="/burgers" className="pagebtn1" activeClassName="active">Burgers</NavLink>
          
          
        </li>
        <li>
           <NavLink to="/desserts" className="pagebtn1" activeClassName="active">Desserts</NavLink> 
        </li>
        <li>
          <NavLink to="/drinks" className="pagebtn1" activeClassName="active">Drinks</NavLink> 

          


          
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navigation;
