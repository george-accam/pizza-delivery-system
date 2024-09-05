import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { filterotherStuffsAction } from '../action/otherStuffAction';
import { filterPizzaDataAction } from '../action/pizzaAction';

export default function Filter() {
    const [searchkey,setSearchkey] = useState("");
    const [category,setCategory] = useState("all");
    const dispatch = useDispatch();
    function filter(){
        dispatch(filterPizzaDataAction(searchkey,category));
        dispatch(filterotherStuffsAction(searchkey,category));
    }
  return (
    <div className='container'>
        <div className='row justify-content-center m-4 shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='col-md-3'>
                <div className='w-100 m-1'>
                <input type='text' className='form-control w-100' placeholder='search' value={searchkey} onChange={(e)=>setSearchkey(e.target.value)}/>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='w-100 m-1'>
                <select className='form-select w-100' value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='veg'>Veg</option>
                    <option value='nonveg'>Non Veg</option>
                </select>
                </div>
            </div>
            <div className='col-md-3 m-1'>
                <div className='w-100'>
                <Button variant='danger' className='w-100' onClick={filter}>Filter</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
