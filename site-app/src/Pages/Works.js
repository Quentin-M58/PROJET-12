import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Data from "../Data/data.json"
import Cards from "../Components/Cards";
import Btnfiltrecomp from "../Components/Btnfiltrecomp.js";

export default function Works() {
        const DATA = Data.link[1].folder
        const filterlang = Data.link[1].langage;
        const filtermodule = Data.link[1].module;
        const filterform = Data.link[2].formation;
        const [filterTags, setFilterTags] = useState([])
        const filteredDATA = DATA.filter((node) =>
                filterTags.length > 0
                        ? filterTags.every((filterTag) =>
                                node.filtre.map((tag) => tag).includes(filterTag)
                        )
                        : DATA
        )

        const filterHandler = (event) => {
                if (event.target.checked) {
                        setFilterTags([...filterTags, event.target.value])
                } else {
                        setFilterTags(
                                filterTags.filter((filterTag) => filterTag !== event.target.value)
                        )
                }
        }

        const reset = (event) => {
                setFilterTags([]);
                document.querySelectorAll("#filtre").forEach(element => { element.reset() })
        }

        const contentCollapse = useRef(null)
        const [setActive, setActiveState] = useState('')
        const [setHeight, setHeightState] = useState('0px')
        const toggleCollapse = () => {
                setActiveState(setActive === '' ? 'active' : '')
                setHeightState(
                        setActive === 'active'
                                ? `0px`
                                : `${contentCollapse.current.scrollHeight}px`
                )
        }
        return (
                <>
                        <div className="worksC">
                                <div className="title">
                                        <p className="permanent-marker-regular">Mes Réalisations</p>
                                </div>
                                <div className="btn">
                                        <p>Note :</p>
                                        <p>Le projet 1 n'est pas mentionné par c'est un projet pour presenter la formation </p>
                                        <p>Certains projet n'on pas d'image car soit le projet ne comportais pas d'image ou les images ne peuvent pas être diffusées</p>
                                        <p>Cliquer sur un projet pour avoir plus d'informations</p>
                                        <p className="filtre">Veuillez cliquer sur le boutton filtre pour afficher les filtres</p>
                                        <button onClick={toggleCollapse} type="button" aria-label="déplier les filtres" aria-expanded="false" aria-pressed="false">FILTRE</button>
                                </div>
                                <div className="contentchild">
                                        <div className="collapse" style={{ height: `${setHeight}` }} ref={contentCollapse}>
                                                <div className="filter">
                                                        <table>
                                                                <tbody>
                                                                        <tr>
                                                                                <td className="title">langage</td>
                                                                                <td>{filterlang.map(item => {
                                                                                        return (
                                                                                                <Btnfiltrecomp text={item.name} id={item.id} value={item.value} key={item.value} onChange={filterHandler} img="true" ></Btnfiltrecomp>
                                                                                        );
                                                                                })}</td>
                                                                        </tr>
                                                                        <tr>
                                                                                <td className="title">module</td>
                                                                                <td>{filtermodule.map(item => {
                                                                                        return (
                                                                                                <Btnfiltrecomp text={item.name} id={item.id} value={item.value} key={item.value} onChange={filterHandler} img="true"></Btnfiltrecomp>
                                                                                        );
                                                                                })}</td>
                                                                        </tr>
                                                                        <tr>
                                                                                <td className="title" >fomation</td>
                                                                                <td>{filterform.map(item => {
                                                                                        return (
                                                                                                <Btnfiltrecomp text={item.titre} id={item.id} value={item.value} key={item.id} onChange={filterHandler} img="false"></Btnfiltrecomp>
                                                                                        );
                                                                                })}</td>
                                                                        </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                        <tr>
                                                                                <td>
                                                                                        <button type="reset" aria-label="Reset les filtres" aria-pressed="false" onClick={reset}>reset filtre</button>
                                                                                </td>
                                                                        </tr>
                                                                </tfoot>
                                                        </table>
                                                </div>
                                        </div>
                                        <div className="listwork">
                                                <div className="infofiltre">
                                                        <p>filtre : {filterTags.map(info => {
                                                                return (
                                                                        <Link key={info} to={`/competences#${info}`} title={`voir la competence ${info}`}>{info}</Link>
                                                                );
                                                        })}</p>
                                                </div>
                                                <div className="allworks">
                                                        {filteredDATA.map((node) => {
                                                                return (
                                                                        <Cards title={node.name} id={node.id} key={node.name} tag={node.filtre} projetid={node["projet-id"]} />
                                                                );
                                                        })}
                                                </div>
                                        </div>
                                </div>
                        </div >
                </>
        );
}
