import React from "react";

export const NextArrow = (props) =>{
   // const {className, style, onclick} = props; // is same as using {...props}
   return(
    <>
    <div 
    className = {props.className}
    style={{ ...props.style}}
    onClick = {props.onClick}/>
    </>
   )
}
//backgroundColor: "black", opacity:0.7 , padding: "18px",
export const PrevArrow = (props) =>{
  
    return(
     <>
    <div className = {props.className}
    style={{ ...props.style}}
    onClick = {props.onClick}/>
     </>
    )
 }