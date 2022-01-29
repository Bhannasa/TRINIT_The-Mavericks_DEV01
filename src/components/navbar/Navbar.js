import React, { useEffect, useState } from 'react';
import Settings from '../Settings';
import AddRem from './additionals/AddRem';

function Navbar(props) {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setItems(props.items);
    },[items])
    return(

    <nav id="Navbar" className="navbar navbar-expand-lg navbar-light bg-light component">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {items.map(i=>{
                        return (<li key={i.name} className="nav-item">
                            <a className="nav-link" href={i.link}>{i.name}</a>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
        <Settings additional={[<AddRem items={items} setItems={setItems}/>]}/>
    </nav>
    );
}

export default Navbar;