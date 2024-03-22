import * as React from "react";
import { dayProjectsData } from "../../projects/dayprojectsdata";
import { Link } from 'gatsby'
import "./heroText.css";




export default function HeroText({ setCurrentImg, setCurrentBlur }) {

    function updateImg(img, blur) {
        setCurrentImg(img)
        setCurrentBlur(blur)
    }

    return (
        <div className="component_wrapper">
            <section className="home__txt">
                {dayProjectsData.map((elem, i) => (
                    <Link to={"/9to5/" + elem.id}
                        key={i}
                        onMouseOver={() => updateImg(elem.img, elem.blur)}>
                        <div className="textRow">
                            <h2>{elem.company}</h2>
                            <h4> {elem.descript}</h4>
                        </div>
                        <hr></hr>
                    </Link>
                ))}
            </section>

        </div>
    )
}




