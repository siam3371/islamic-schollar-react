import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Preachers from '../Preacheras/Preachers'; 
const Info = () => {
    const [preachers, setPreachers] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=> {
        fetch('./Person.JSON')
        .then(res => res.json())
        .then(data =>  setPreachers(data)) 
    } ,[])
    // handle button clicK
    const handleCart = (preacher) => {
         const newCart = [...cart, preacher]
        setCart(newCart) 
    }
    return (
        <div className="row info-container mt-3 mx-5">
            <div className="col-lg-9">
            <div className="row g-4">   
        {
            preachers.map(preacher=> <Preachers 
                preacher={preacher}
                key={preacher.age}
                handleCart={handleCart}
                ></Preachers>)
        }
            </div> 
            </div>
            <div className="col-lg-3"> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Info;