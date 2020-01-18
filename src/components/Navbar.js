import React, {Component} from "react";
import '../components/FullPage.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-scroll";
import "./navbar.css";
class NavbarMenu extends Component {
    state = {
            color: "white",
            bgColor: "#080616",
        };
    generateColor()
    {
        return '#' + Math.random().toString(16).substr(-6);
    }
    changeBg()
    {
        this.setState({
            color: this.generateColor(),
            bgColor: this.generateColor()
        });
        //document.body.style.color = this.state.color;
        document.getElementById('App').style.color=this.state.color;
        //console.log(SnowStorm.snowColor);

        //SnowStorm.snowColor=this.setState(this.generateColor());
        console.log(this.state.bgColor);
    }
    render() {
        return (
                <Navbar bg="" expand="lg" fixed="top" style={{padding:'0',margin:'0',
                backgroundColor:'gray'}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{padding:'0',margin:'0',
                backgroundColor:'green'}}>
                            <Nav.Link href="#home">
                                <Link to="home" spy={true} smooth={true}  duration={500}>صفحه اصلی</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" >
                                <Link to="aboutMe" spy={true} smooth={true}  duration={500}>درباره من</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="skill" spy={true} smooth={true}  duration={500}>مهارت ها</Link>

                            </Nav.Link>
                        </Nav>

                        <Nav className="mr-auto" style={{padding:'0',margin:'0',
                        backgroundColor:'red'}}>
                            <Nav.Link href="#chenge">
                                <button onClick={() => {
                                    this.changeBg()
                                }}>change Color
                                </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

        )
    }

}

export default NavbarMenu