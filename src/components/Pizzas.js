import React, {useState } from 'react'
import { Button } from 'react-bootstrap'
import Pizzades from './Pizzades';
import { useDispatch } from'react-redux';
import { addToCartAction } from '../action/cartAction';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pizzas({pizza}) {
    AOS.init();
    const [quantity,setQuantity] = useState(1);
    const [varient,setVarient] = useState('small');
    const [modalshow , setModalshow] = useState(false);
    const dispatch = useDispatch();
    function addtocart(){
        dispatch(addToCartAction(pizza,quantity,varient));
    }
  return (
    <>
    <div className=" m-4 shadow-lg p-3 mb-5 bg-white rounded" data-aos='fade-up' >
        <div onClick={()=>setModalshow(true)}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{height:'200px' , width:'200px'}} alt='pizzas'/>
        </div>
        <div className="flex-container">
            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-select' value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
                    {pizza.varients.map(varient=>{
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
            </div>
            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className="form-select"value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='flex-container'>
            <div className='w-100 mt-1'>
                <p>Price : {quantity * pizza.prices[0][varient]} /-</p>
            </div>
            <div className='w-100'>
                <Button onClick={addtocart} variant="danger">Add to Cart</Button>
            </div>
        </div>
    </div>
    <Pizzades 
        pizza={pizza}
        show={modalshow}
        onHide={()=>setModalshow(false)}
    />
    </>
  )
}
