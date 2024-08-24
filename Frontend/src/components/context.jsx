import {createContext,useContext,useReducer} from "react";

const cartStateContext=createContext();
const cartDispatchContext=createContext();

const reducer=(state,action)=>{

    switch (action.type) {
        case "ADD":
          return [...state,{id:action.id,name:action.name,qty:action.qty,price:action.price,img:action.img,size:action.size}] 
        
        case "REMOVE":
            var newArr=[...state];
            newArr.splice(action.index,1);
            return newArr;  
         
        case "UPDATE":
                var arr=[...state];
                arr.find((food,index)=>{
                    if(food.id===action.id){
                        // console.log(food.qty, parseInt(action.qty), action.price + food.price)
                        arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price+food.price}
                    }
                    return arr
                })
                return arr
        case "DROP":
            var empArray=[]
            return empArray
            
        default:
          console.log("error in reducer");
      }
}

// eslint-disable-next-line react/prop-types
export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[]);
    return(
        <cartDispatchContext.Provider value={dispatch}>
        <cartStateContext.Provider value={state}>
            {children}
        </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart=()=>useContext(cartStateContext);
// eslint-disable-next-line react-refresh/only-export-components
export const useDispatchCart=()=>useContext(cartDispatchContext);