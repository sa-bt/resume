import React,{Component} from "react";
import data from "../data";
const DownIcon=(props)=>{
    return[
        <div onClick={props.onclick}
             style={{
                 display: "flex",
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "center",
                 transform:'translateY(160px)'
             }}>
            <div style={{
                maxWidth:"25px",
            }}>
                <img src={props.icon}/>
            </div>
        </div>
    ]
}
export default DownIcon;