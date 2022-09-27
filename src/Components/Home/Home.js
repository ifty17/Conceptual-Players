import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';
 import { ToastContainer, toast } from 'react-toastify';
 import Swal from 'sweetalert2';

const Home = () => {

    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
 
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player));
    }, [search]);
    // console.log(players);

    const handleDelete = (id) =>{
        const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
        setCart(leftPlayer);
        toast("Wow deleted from cart!");
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )

    }

    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)} className='search-input' type="text" />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players players={players} cart={cart} setCart={setCart}></Players>
                    </div>
                </div>
                <div className="right-side">
                    <div className='cart'>
                        <h4>Cart </h4>
                        
                        {cart.map((p) => (
                            <div className='cart-info-container'>
                                <li>{p.strPlayer}</li>
                                <button onClick={() => handleDelete(p.idPlayer)} className='delete-btn'>X</button>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;