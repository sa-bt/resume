import React, {Component} from "react";
import {Card} from "react-bootstrap";
import '../components/FullPage.css';
import '../components/SkillCard.css';

class SkillCard extends Component {
    render() {
        const {skill} = this.props
        return (
            <div className="card">
                <img src={skill.img} width="100" height="100"/>
                <header>{skill.item}</header>
                    <p>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
            </div>


        )
    }
}

export default SkillCard