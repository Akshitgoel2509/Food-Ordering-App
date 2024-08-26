/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef,useState,useEffect } from 'react'
import { useDispatchCart,useCart } from './context';


const Card = (props) => {

  let dispatch = useDispatchCart();
  let data=useCart();
  const priceref=useRef();

  let options=props.options;
  let priceOptions=Object.keys(options);
  
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart=async()=>{
    let food=[];
    for(const item of data){
      if(item.id===props.foodItem._id){
        food=item;
        break;
      }
    }
    if(food!=[]){
      if(food.size === size){
      await dispatch({type:"UPDATE",id:props.foodItem._id,price:FinalPrice,qty:qty,size:size});
      return;
      }
    else if(food.size!=size) {
      await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:FinalPrice,qty:qty,size:size,img:props.foodItem.img})
      return;
    }
    return;
  }
  await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:FinalPrice,qty:qty,size:size,img:props.foodItem.img})
}
  let FinalPrice=qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceref.current.value)
  }, [])
  
  return (
    <>
       <div className="card mt-3 border border-3 border-success" style={{width:"20rem","maxHeight": "360px"}} >
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{objectFit:"cover",height:"180px"}} />
          
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            {/* <p className="card-text">
             {props.desc}
            </p> */}
            <div className=" w-100 ">
              <select className=" h-100 p-1 bg-success rounded text-white" onChange={(e)=>{setQty(e.target.value)}}>
                {
                  Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )  
                  })
                }
              </select>
              <select className=" ms-2 h-100 p-1 w-auto bg-success rounded text-white" ref={priceref} onChange={(e)=>{setSize(e.target.value)}}>
                {priceOptions.map((data)=>{
                  return(
                    <option key={data} value={data}>{data}</option>
                  )
                })}
              </select>
              <div className=" fs-5 h-100 d-inline ms-2">$ {FinalPrice}</div>
            </div>
            <hr />
            <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
    </>
  )
}

export default Card
