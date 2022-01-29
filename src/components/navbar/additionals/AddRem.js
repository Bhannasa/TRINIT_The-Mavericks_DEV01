import React from 'react';

function AddRem(props) {
    const remove = idx =>{
        const nitems = props.items;
        nitems.splice(idx,1);
        props.setItems(nitems);
    }
    return (
    <div id="AddRem">
            {props.items.map((i,idx)=>{
                return (
                    <div className='addRemItem'>
                        {/* {i.name}: */} 
                        {"= "}
                        <input type="text" placeholder={i.name} onChange={(e)=>{props.items[idx].name=e.target.value;props.setItems(props.items)}}/>
                        <input type="text" placeholder={i.link} onChange={(e)=>{props.items[idx].link=e.target.value;props.setItems(props.items)}}/>
                        <button className='btn btn-danger' onClick={()=>{remove(idx)}}>X</button>
                    </div>
                );
            })}
        <button className='btn btn-secondary' onClick={()=>{props.items.push({name:'Nav-item',link:'#'});props.setItems(props.items)}}>Add Item</button>
    </div>);
}

export default AddRem;
