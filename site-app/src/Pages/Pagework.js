import React, { useState, useEffect } from "react";
import { useParams, Link, useResolvedPath } from "react-router-dom";

import Data from "../Data/data.json"
import Erreur from "./Erreur";

export default function Pagework() {
        let resolved = useResolvedPath(this);
        let path = resolved.pathname
        const { workname } = useParams();
        const DATA = Data.link[1].folder
        const fichework = DATA.find((info) => info.name === workname);
        const [imgpc, setImgpc] = useState(1)
        const [imgTel, setImgTel] = useState(1)
        const [data, setData] = useState(0);
        const imgpcslide = () => {
                if (fichework !== undefined) {
                        if (fichework.pc !== undefined) {
                                if (imgpc < (fichework.pc.length)) {
                                        setTimeout(() => {
                                                let valpc = imgpc + 1
                                                setImgpc(valpc);
                                        }, 20000)
                                } else {
                                        setTimeout(() => {
                                                setImgpc(1)
                                        }, 20000)
                                }
                        }
                }
        }
        const imgtelslide = () => {
                if (fichework !== undefined) {
                        if (fichework.tel !== undefined) {
                                if (fichework.tel !== undefined) {
                                        if (imgTel < (fichework.tel.length)) {
                                                setTimeout(() => {
                                                        let valtel = imgTel + 1
                                                        setImgTel(valtel);
                                                }, 40000)
                                        } else {
                                                setTimeout(() => {
                                                        setImgTel(1)
                                                }, 40000)
                                        }
                                }
                        }
                }
        };
        const reload = () => {
                setData(Math.random())
        }

        useEffect(() => imgpcslide(), [imgpc, path]);
        useEffect(() => imgtelslide(), [imgTel, path]);
        useEffect(() => { setImgTel(1); setImgpc(1); reload() }, [path]);
        let coucou
        if (fichework !== undefined) {
                if (fichework.id === 29 | 210 | 212 | 27 | 25 | 21) {
                        coucou = fichework.name.replace(".", "\u200B.")
                }
        }
        if (fichework === undefined) {
                return <Erreur />
        } else {
                return (
                        <>
                                <div className="pagework">
                                        <div className="title">
                                                <p className="permanent-marker-regular">{coucou}</p>
                                        </div>
                                        <p className="info">Voici une presentaion du projet </p>
                                        <p className="info">Si il est marqué pas d'image cela signifie que le projet ne comporte pas d'image pouvant être diffuser</p>
                                        <p className="info">Vous pouver cliquer sur les images afin de les voir en grand.</p>
                                        <div className="displayimg">
                                                <div className="pc">
                                                        {fichework.pc !== undefined ?
                                                                <Link to={`/works/img/pc/${fichework.name}`} title={`voir les images pour pc`}>
                                                                        <img key={"pc" + data} alt="imagedu site pour les PC" src={`/Images/Work/P` + fichework["projet-id"] + `/P` + fichework["projet-id"] + "-pc-" + imgpc + `.png`}></img>
                                                                </Link>
                                                                : <p>pas d'image</p>}
                                                </div>
                                                <div className="tel">
                                                        {fichework.tel !== undefined ?
                                                                <Link to={`/works/img/tel/${fichework.name}`} title={`voir les images pour tel`}>
                                                                        <img key={"tel" + data} alt="imagedu site pour les Téléphones" src={`/Images/Work/P` + fichework["projet-id"] + `/P` + fichework["projet-id"] + "-tel-" + imgTel + `.png`}></img>
                                                                </Link>
                                                                : <p>pas d'image</p>}
                                                </div>
                                        </div>
                                        <div className="info">
                                                <div className="desc">
                                                        <div className="infotitle">
                                                                <p>description</p>
                                                        </div>
                                                        <div className="infotext">
                                                                <p>{fichework["projet-id"] !== undefined ? `Le projet ${fichework["projet-id"]} est un projet ${fichework.desc}` : fichework.desc}</p>
                                                        </div>
                                                </div>
                                                <div className="consigne">
                                                        <div className="infotitle">
                                                                <p>consigne</p>
                                                        </div>
                                                        <div className="infotext">
                                                                <p>Cette realisation à pour consigne:</p>
                                                                {fichework.consigne.map(info => {
                                                                        return (
                                                                                <p key={"cons" + info.id}>{info.desc}</p>
                                                                        );
                                                                })}
                                                        </div>
                                                </div>
                                                <div className="contrainte">
                                                        <div className="infotitle">
                                                                <p>contrainte</p>
                                                        </div>
                                                        <div className="infotext">
                                                                <p>Cette realisation à pour contrainte:</p>
                                                                {fichework.contrainte.map(info => {
                                                                        return (
                                                                                <p key={"cont" + info.id}>{info.desc}</p>
                                                                        );
                                                                })}
                                                        </div>
                                                </div>
                                                <div className="explication">
                                                        <div className="infotitle">
                                                                <p>Explication</p>
                                                        </div>
                                                        <div className="infotext">
                                                                {fichework.explication.map(info => {
                                                                        return (
                                                                                info.type === "text" ? <p key={Math.random()}>{info.value}</p>
                                                                                        : info.type === "img" ? <img key={Math.random()} src={info.value} alt={`image ${info.value}`}></img> : null
                                                                        );
                                                                })}
                                                        </div>
                                                </div>
                                                <div className="tag">
                                                        <div className="infotitle">
                                                                <Link to={`/competences`} title={`voir toutes les competences`}>competences</Link>
                                                        </div>
                                                        <p>Grâce à cette réalisation j'ai pu acquérir ces compétences :</p>
                                                        <div className="infotext">
                                                                {fichework.filtre.map(info => {
                                                                        return (
                                                                                <Link key={info} to={`/competences#${info}`} title={`voir la competence ${info}`}>{info}</Link>
                                                                        );
                                                                })}
                                                        </div>
                                                </div>
                                                <div className="link">
                                                        <div className="infotitle">
                                                                <p>lien</p>
                                                        </div>
                                                        <div className="infotext">
                                                                {fichework.link !== "n/a" ? <Link to={fichework.link} title={`voir le Github du projet`}>GITHUB</Link> : <p>Pas de lien</p>}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </>
                );
        }
}

