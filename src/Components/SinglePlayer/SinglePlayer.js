import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player, setCart, cart}) => {
    // console.log(player);    
    const {strPlayer, strCutout, idPlayer} = player;

    const handleAddToCart = () =>{
        const info ={
            strPlayer,
            idPlayer,
            strCutout,
            price: 114
        }
        if(cart){
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }
        else{
            setCart(info);
        }
    }
    // console.log(cart);

    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
            <button className='card-btn'>BookMark</button>
        </div>
    );
};


export default SinglePlayer;