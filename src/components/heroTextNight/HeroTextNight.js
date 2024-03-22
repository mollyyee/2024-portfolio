import * as React from "react"
import { nightProjectsData } from "../../projects/nightprojectsdata";
import { Link } from 'gatsby'
import "../heroText/heroText.css";


export default function HeroTextNight({ setCurrentImg }) {
    return (
        <div className="component_wrapper">
            <section className="home__txt">
                {nightProjectsData.map((elem, i) => (
                    <Link to={"/5to9/" + elem.id}
                        key={i}
                        onMouseOver={() => setCurrentImg(elem.img)}>
                        <div className="textRow">
                            <h2 className="nighttext">{elem.company}</h2>
                            <h4 className="nighttext"> {elem.descript}</h4>
                        </div>
                        <hr></hr>
                    </Link>
                ))}
            </section>

        </div>
    )
}






