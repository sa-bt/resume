import React, {Component} from "react";
import FullPage from "../components/FullPage";
import '../components/FullPage.css';
import data from "../data";
import DownIcon from "../components/DownIcon";
import {Element} from "react-scroll";
import {SocialIcon} from "react-social-icons";
import {Link} from "react-scroll";
import "./firstSection.css"

class FirstSection extends Component {
    render() {
        return (
            <Element name="home" className="element" style={{margin:'0'}}>
            <FullPage>
                <h1>{data.title}</h1>
                <h3>{data.subTitle}</h3>
                <div className="iconWrapper">
                    {
                        Object.keys(data.links).map(key=> {
                            return(
                                <div className="icon">
                                    <SocialIcon url={data.links[key]}/>
                                </div>
                            )
                            })
                    }
                </div>
                <Link activeClass="active" to="aboutMe" smooth="true">
                    <DownIcon icon={data.icons.Down}/>
                </Link>
            </FullPage>
            </Element>
        )
    }
}

export default FirstSection