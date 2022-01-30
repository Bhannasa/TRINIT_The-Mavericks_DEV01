import React, { useContext } from 'react';
import Css from '../../classes/Css';
import BaseContext from '../../Context/BaseContext';

export default function Textarea(props) {
    const context = useContext(BaseContext);
    
    const createTextarea = () =>
    {
        const elem = {
            tag : "textarea",
            id:`textarea${document.getElementsByClassName('textarea').length}`,
            class:"textarea",
            style : new Css(100,200)
        }
        context.setElements(context.elements.concat([elem]))
        
    }
    return (
            <button className='btn btn-dark textarea-btn' onClick= {createTextarea} >
                TextArea
            </button>
    );
}
