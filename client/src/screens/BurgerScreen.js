import React, { useEffect } from "react";
import burgers from "../burgersdata";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerActions";
export default function BurgerScreen(){
    const dispatch = useDispatch();
    // const burgerstate= useSelector((state) => state.getAllBurgersReducer);
    // const {burgers, error, loading}= burgerstate;
    
    useEffect(()=>{
        dispatch(getAllBurgers())
    }, []);
    return(
        <div>
            
            <div className="row justify-content-center">
                
                {burgers.map(burger=>{
                    
                    return <div className="col-md-3 m-3">
                        
                        <div>
                        
                            <Burger burger={burger} />
                        </div>
                        
                
           
            </div>
                })}
        </div>
        </div>
    )
}