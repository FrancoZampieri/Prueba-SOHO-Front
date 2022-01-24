import React from "react";
import './Button.scss'

const Button = ({text,textColor,backgroundColor}) =>{
    return(
        <button className="btn" style={{backgroundColor:`${backgroundColor ? backgroundColor : 'none'}` , color:`${textColor ? textColor : 'white'}`}}>
            {text}
        </button>
    )
}

export default Button