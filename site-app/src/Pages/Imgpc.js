import React, { useState, useRef } from "react";
import { Navigate, useParams, Link } from "react-router-dom";

import Data from "../Data/data.json"


export default function Imgpc() {
        const { workname } = useParams();
        const ref = useRef()
        const DATA = Data.link[1].folder
        const fichework = DATA.find((info) => info.name === workname);
        const [imgpc, setImgpc] = useState(1)
        const [data, setData] = useState(0);
        const imgleft = () => {
                if (imgpc < (fichework.pc.length)) {
                        ref.current.scrollIntoView(false);
                        let valpc = imgpc + 1
                        setImgpc(valpc);
                } else {
                        ref.current.scrollIntoView(false);
                        setImgpc(1)
                }
        }
        const imgright = () => {
                if (imgpc > 1) {
                        ref.current.scrollIntoView(false);
                        let nvalpc = imgpc - 1
                        setImgpc(nvalpc);
                } else {
                        ref.current.scrollIntoView(false);
                        setImgpc(fichework.pc.length)
                }
        }
        if (!fichework) {
                return <Navigate to="/" />
        }
        return (
                <>
                        <div className="imgpageworkpc">
                                <Link to={`/works/${fichework.name}`} ref={ref}><p>retour</p></Link>
                                {fichework.pc.length > 1 ? <div className="arrow">
                                        <div className="left" onClick={imgleft}>
                                                <span className="material-symbols-outlined">arrow_back_ios</span>
                                        </div>
                                        <div className="right" onClick={imgright}>
                                                <span className="material-symbols-outlined">arrow_forward_ios</span>
                                        </div>
                                </div> : null}
                                <img key={"pc" + data} alt="imagedu site pour les PC" src={`/Images/Work/P` + fichework["projet-id"] + `/P` + fichework["projet-id"] + "-pc-" + imgpc + `.png`}>
                                </img>
                                <Link to={`/works/${fichework.name}`}><p>retour</p></Link>
                        </div >
                </>
        );
}
