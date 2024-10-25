import React, { useState, useEffect, useRef } from "react";
import { Outlet, useResolvedPath } from "react-router-dom";

import CustomLink from "../Components/CustomLink";
import Data from "../Data/data.json";
import Footer from "./Footer.js";

export default function Navcontent({ onClose, View }) {
        const ref = useRef()
        let resolved = useResolvedPath(this);
        let path = resolved.pathname.split("/")
        let pathtitle = path[1]
        const [setRotate, setRotateState] = useState('')
        function offmenu() {
                onClose('')
                setRotateState('rotate')
        }
        let Datasubfolder = Data.link.find(x => x.to == `/${pathtitle}`) || Data.link[0]
        useEffect(() => {
                offmenu();
                ref.current.scrollTo(0, 0);
        }, [resolved.pathname])
        return (
                <>
                        <div className="navcontent">
                                <div className={`nav ${View}`} >
                                        <button onClick={offmenu}>
                                                <span className={`material-symbols-outlined ${View === '' ? setRotate : ""}`}>close</span>
                                        </button>
                                        <div className="navbar">
                                                {Data.link.map((info) => {
                                                        return (
                                                                <CustomLink key={info.id} to={info.to} material={info.material} name={info.icon} text={info.name} id={info.to === "" ? 4 : 1} />
                                                        );
                                                })}
                                        </div>
                                        <div className="folderviewer">
                                                <p className="foldertitle">Quentin-M58.fr</p>
                                                <div className="folder">
                                                        <p className="subfoldertitle">{Datasubfolder.name}</p>
                                                        <div className="subfolder">
                                                                <CustomLink key={Datasubfolder.id} to={Datasubfolder.to} text={Datasubfolder.name} id={2} img="icon" />
                                                                {Datasubfolder.folder !== undefined ?
                                                                        Datasubfolder.folder.map((info) => {
                                                                                return (
                                                                                        <CustomLink key={info.id} to={`${Datasubfolder.to || "acceuil"}/${info.name}`} text={info.name} id={3} img="icon" />
                                                                                );
                                                                        }) : null}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="content" ref={ref} >
                                        <Outlet />
                                        <Footer />
                                </div>
                        </div>
                </>
        );
}