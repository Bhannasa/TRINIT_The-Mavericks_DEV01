import React from 'react';

export default function Textarea(props) {
    const styleTextarea = `height: ${props.height};
        width: ${props.width};
        color: ${props.color};
        position: ${props.position};`
    
    const createTextarea = () =>
    {
        const root = document.getElementById("root");
        let input = document.createElement("textarea"); 
        input.classList.add("textarea");                
        input.style = styleTextarea;
        root.appendChild(input);
    }
    return (
        <div className='textarea-div'>
            <button className='btn btn-dark my-3 textarea-btn' onClick= {createTextarea} >
                Create TextArea
            </button>
        </div>
    );
}
