import React, { useState, useRef } from "react";
import { Navigate, useParams, Link } from "react-router-dom";

import Data from "../Data/data.json"


export default function Imgtel() {
        const { workname } = useParams();
        const ref = useRef()
        const DATA = Data.link[1].folder
        const fichework = DATA.find((info) => info.name === workname);
        const [imgtel, setImgtel] = useState(1)
        const [data, setData] = useState(0);
        const imgleft = () => {
                if (imgtel < (fichework.tel.length)) {
                        ref.current.scrollIntoView(false);
                        let valtel = imgtel + 1
                        setImgtel(valtel);
                } else {
                        ref.current.scrollIntoView(false);
                        setImgtel(1)
                }
        }
        const imgright = () => {
                if (imgtel > 1) {
                        ref.current.scrollIntoView(false);
                        let nvaltel = imgtel - 1
                        setImgtel(nvaltel);
                } else {
                        ref.current.scrollIntoView(false);
                        setImgtel(fichework.tel.length)
                }
        }
        if (!fichework) {
                return <Navigate to="/" />
        }
        return (
                <>
                        <div className="imgpageworktel">
                                <Link to={`/works/${fichework.name}`} ref={ref}><p>retour</p></Link>
                                {fichework.tel.length > 1 ? <div className="arrow">
                                        <div className="left" onClick={imgleft}>
                                                <span className="material-symbols-outlined">arrow_back_ios</span>
                                        </div>
                                        <div className="right" onClick={imgright}>
                                                <span className="material-symbols-outlined">arrow_forward_ios</span>
                                        </div>
                                </div> : null}
                                <img key={"tel" + data} alt="imagedu site pour les Téléphones"  src={`/Images/Work/P` + fichework["projet-id"] + `/P` + fichework["projet-id"] + "-tel-" + imgtel + `.png`}>
                                </img>
                                <Link to={`/works/${fichework.name}`}><p>retour</p></Link>
                        </div >
                </>
        );
}
