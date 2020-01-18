import React, {Component} from "react";
import FullPage from "../components/FullPage";
import SkillCard from "../components/SkillCard";
import '../components/FullPage.css';
import '../components/SkillCard.css';
import data from "../data";
import {Element, Link} from "react-scroll";

class SkillSection extends Component {
    render() {
        return (
            <Element name="skill" className="element" style={{margin:'0'}} >
                <FullPage>
                    <h4 style={{marginTop:'70px'}}>{data.section[1].title}</h4>
                    <div className="cards">
                        {
                            data.section[1].items.map(eachSkill => {
                                return <SkillCard skill={eachSkill}/>
                            })
                        }
                    </div>

                </FullPage>
            </Element>


        )
    }
}

export default SkillSection