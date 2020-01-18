import React, {Component} from "react";
import FullPage from "../components/FullPage";
import '../components/FullPage.css';
import data from "../data";
import {Element, Link} from "react-scroll";
import DownIcon from "../components/DownIcon";
import '../components/AboutMe.css';
import { FiMail } from 'react-icons/fi';

class AboutSection extends Component {
    render() {
        return (
            <Element name="aboutMe" className="element" style={{margin:'0'}}>
                <FullPage>
                        <div className="aboutMe">
                            <div className="aboutMe--img">
                                <img src={data.section[0].img} alt="" />
                            </div>
                            <div className="aboutMe--content">
                                <h5>
                                    {data.section[0].title}
                                </h5>
                                <p>
                                    {data.section[0].content}
                                </p>
                            </div>
                        </div>
                        <Link  to="skill"  smooth="true" >
                            <DownIcon icon={data.icons.Down}/>
                        </Link>
                </FullPage>
            </Element>

    )
    }
    }

    export default AboutSection