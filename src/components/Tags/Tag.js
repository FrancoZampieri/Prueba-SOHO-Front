import React from "react";
import './Tag.scss'

const Tag = ({text,textColor}) =>{
    return(
        <a className="tag" style={{color:`${textColor ? textColor : 'white'}`}}>
            {text}
        </a>
    )
}

export default Tag