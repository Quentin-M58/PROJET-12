import React, { useState } from "react";

import Data from "../Data/data.json"
import Cardcomp from "../Components/Cardcomp";
import Btnfiltrecomp from "../Components/Btnfiltrecomp.js";

export default function WorksC() {
        const DATA = Data.link[3].competences
        const filtertype = Data.link[3].type;
        const [filterTags, setFilterTags] = useState([])
        const filteredDATA = DATA.filter((node) =>
                filterTags.length > 0
                        ? filterTags.every((filterTag) =>
                                node.type.map((tag) => tag).includes(filterTag)
                        )
                        : DATA
        )

        const filterHandler = (event) => {
                if (event.target.checked) {
                        setFilterTags([event.target.value])
                        document.querySelectorAll("#filtre input").forEach(element => {element.checked = false })
                        event.target.checked = true
                } else {
                        setFilterTags(
                                filterTags.filter((filterTag) => filterTag !== event.target.value)
                        )
                        document.querySelectorAll("#filtre").forEach(element => { element.reset() })
                        event.target.checked = false
                }
        }

        const reset = (event) => {
                setFilterTags([]);
                document.querySelectorAll("#filtre").forEach(element => { element.reset() })
        }
        return (
                <>
                        <div className="Competences">
                                <div className="title">
                                        <p className="permanent-marker-regular">Mes Competences</p>
                                </div>
                                <div className="filter">
                                        <div className="filtertitle">
                                                <p>Veuillez cliquer sur un bouton pour afficher les compétences filtrer</p>
                                        </div>
                                        <div className="filterbtn">
                                                {filtertype.map(item => {
                                                        return (
                                                                <Btnfiltrecomp text={item.name} id={item.id} value={item.value} key={item.value} onChange={filterHandler} img="false" ></Btnfiltrecomp>
                                                        );
                                                })}
                                        </div>
                                        <div className="resetbtn">
                                                <button type="reset" onClick={reset}>reset filtre</button>
                                        </div>
                                </div>
                                <div className="contentchild">
                                        <div className="listwork">
                                                <div className="infofiltre">
                                                        <p className="title">filtre : </p>
                                                        {filterTags.map(info => {
                                                                return (
                                                                        <p key={info} className="type">{info}</p>
                                                                );
                                                        })}
                                                        {filterTags.length === 0 ? <p className="title">aucun filtre actif</p> : null}
                                                </div>
                                                <div className="allworks">
                                                        {filteredDATA.map((item) => {
                                                                return (
                                                                        <Cardcomp title={item.name} logo={item.logo} id={item.id} key={item.id} type={item.id} description={item.description} level={item.level} link={item.link} />
                                                                );
                                                        })}
                                                </div>
                                        </div>
                                </div>
                        </div >
                </>
        );
}
