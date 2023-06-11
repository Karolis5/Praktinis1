import axios from "axios";
export const getAllBurgers=()=>async dispatch=>{

    dispatch({type:'GET_BURGERS_REQUEST'})

    try {
        const response = await axios.get('/api/burgers/getallburgers')
        console.log(response);
        dispatch({type:'GET_BURGERS_SUCCESS' , payload : response.data})
       
    } catch (error) {
        dispatch({type:'GET_BURGERS_FAILED' , payload : error})
    }

}

export const getBurgerById=(burgerid)=>async dispatch=>{

    dispatch({type:'GET_BURGERBYID_REQUEST'})

    try {
        const response = await axios.post('/api/burgers/getburgerbyid' , {burgerid})
        console.log(response);
        dispatch({type:'GET_BURGERBYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_BURGERBYID_FAILED' , payload : error})
    }

}

export const filterBurgers=(searchkey , category)=>async dispatch=>{

  
    dispatch({type:'GET_BURGERS_REQUEST'})

    try {
        var filteredBurgers ;
        const response = await axios.get('/api/BURGERS/getallburgers')
        filteredBurgers = response.data.filter(burger=>burger.name.toLowerCase().includes(searchkey))
         
        if(category!='all')
        {
            filteredBurgers = response.data.filter(burger=>burger.category.toLowerCase()==category)

        }
        dispatch({type:'GET_BURGERS_SUCCESS' , payload : filteredBurgers})
    } catch (error) {
        dispatch({type:'GET_BURGERS_FAILED' , payload : error})
    }

}

export const addBurger=(burger)=>async dispatch=>{
    dispatch({type:'ADD_BURGERS_REQUEST'})
    try {
        const response= await axios.post('/api/burgers/addburger' , {burger})
        console.log(response);
        dispatch({type:'ADD_BURGERS_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_BURGERS_FAILED' , payload : error})
    }
}

export const editBurger=(editedburger)=>async dispatch=>{
    dispatch({type:'EDIT_BURGERS_REQUEST'})
    try {
        const response= await axios.post('/api/burgers/editburger' , {editedburger})
        console.log(response);
        dispatch({type:'EDIT_BURGERS_SUCCESS'})
        window.location.href='/admin/burgerslist'
    } catch (error) {
        dispatch({type:'EDIT_BURGERS_FAILED' , payload : error})
    }
}

export const deleteBurger=(burgerid)=>async dispatch=>{

try {
    const response =await axios.post('/api/burgers/deleteburger' , {burgerid})
    alert('Burger Deleted Successfully')
    console.log(response);
    window.location.reload()
} catch (error) {
    alert('Something went wrong')
    console.log(error);
}
       

}