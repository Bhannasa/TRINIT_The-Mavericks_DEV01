import React, { useContext } from 'react';
import BaseContext from '../Context/BaseContext';

export default function Elements() {
    const context = useContext(BaseContext);
    const updateText = (id)=>{
        var label = window.prompt("Enter Label");
        if(label) document.getElementById(id).innerHTML = label;
    }
    return (
        <>
        {
            context.elements.map((tag)=>{
                if(tag.tag==='img'){
                    return <img src={tag.src} id={tag.id} className={tag.class} onClick={()=>{context.setCurSelected(tag.id);context.setCurCSS(tag.style);}} key={tag.id} style={{position:"absolute"}}/>
                }else if(tag.tag === "textarea"){
                    return <textarea style={{width:"200px",height:"100px",position:'absolute',resize:'none'}} id={tag.id} class={tag.class} onClick={()=>{context.setCurSelected(tag.id);context.setCurCSS(tag.style);}} key={tag.id}/>
                }else if(tag.tag === "button"){
                    return <button style={{width:"100px",height:"40px",position:'absolute'}} id={tag.id} className={tag.class} onClick={()=>{context.setCurSelected(tag.id);context.setCurCSS(tag.style);}} key={tag.id} onDoubleClick={()=>{updateText(tag.id)}}>Button</button>
                }else if(tag.tag === 'div'){
                    return <div style={{width:"100px",height:"100px",border:"1px solid black",position:'absolute'}} id={tag.id} className={tag.class} onClick={()=>{context.setCurSelected(tag.id);context.setCurCSS(tag.style);}} key={tag.id} onDoubleClick={()=>{updateText(tag.id)}}></div>
                }
            })
        }
        </>
    )
}
