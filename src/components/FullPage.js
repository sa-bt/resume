import React,{Component} from "react";
import './FullPage.css';
import NavbarMenu from "./Navbar";
class FullPage extends  Component{
    render() {
        const {children}=this.props;
        return(
            <div className={`fullPage ${this.props.className || ''}`}>
            <NavbarMenu/>
                {children}
            </div>
        )
    }
}
export default FullPage