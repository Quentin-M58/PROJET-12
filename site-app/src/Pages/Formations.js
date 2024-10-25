import React from "react";
import {Link} from "react-router-dom"

import Data from "../Data/data.json"

export default function Formations() {
        const list = Data.link[2].formation
        return (
                <>
                        <div className="Formations">
                                <div className="title">
                                        <p className="permanent-marker-regular">Mes formations</p>
                                </div>
                                <div className="listform">
                                        {list.map(info => {
                                                return (
                                                        <div key={info.id} className="formitem">
                                                                <div className="titre">
                                                                        <p className="titre">{info.name}</p>
                                                                </div>
                                                                <div className="orga">
                                                                        <p className="titre">organisme</p>
                                                                        <p className="info">{info.organisme}</p>
                                                                        <Link className="info" to={info.linkorga} title={info.organisme.toUpperCase()}>LIEN</Link>
                                                                </div>
                                                                <div className="desc">
                                                                        <p className="titre">competences</p>
                                                                        <p className="info">Lors de cette fortmations j'ai pu acquérir ces compétences :</p>
                                                                        {info.desc.map(info => { return (<p className="info" key={info}>{info}</p>); })}
                                                                </div>
                                                                <div className="date">
                                                                        <p className="titre">date</p>
                                                                        <p className="info">{info.date}</p>
                                                                </div>
                                                                <div className="link">
                                                                        <p className="titre">lien</p>
                                                                        {info.link !== "n/a" ? <Link className="info" to={info.link} title={info.name.toUpperCase()}>LIEN</Link>  : <p className="info">pas de lien</p> }
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>
                </>
        );
}