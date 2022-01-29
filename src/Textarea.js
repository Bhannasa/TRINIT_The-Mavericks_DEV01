import React from 'react';

export default function Textarea(props) {
    const styleTextarea = `border: ${props.border};
        height: ${props.height};
        width: ${props.width};
        color: ${props.color};
        position: ${props.position};`
    
    const createTextarea = () =>
    {
        const root = document.getElementById("root");
        let input = document.createElement("input"); 
        input.classList.add("textarea");                
        input.setAttribute("type","textarea");
        input.style = styleTextarea;
        root.appendChild(input);
    }
    return (
        <div>
            <button className='btn btn-dark my-3 mx-3' onClick= {createTextarea} >
                Create TextArea
            </button>
        </div>
    );
}
