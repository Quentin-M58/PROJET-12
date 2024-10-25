import React from "react";
import { Link } from "react-router-dom";

import Data from "../Data/data.json";
import Homebtn from "../Components/Homebtn";

export default function Home() {

        return (
                <>
                        <div className="home">
                                <div className="title">
                                        <p className="permanent-marker-regular">bienvenue</p>
                                </div>
                                <div className="contentchild">
                                        <div className="subtitle">
                                                <p>Ce site est un portfolio créer à l'ocassion de la formation de developpeur - integrateur WEB d'<span><Link to="https://openclassrooms.com/fr">Openclassrooms</Link></span>.</p>
                                        </div>
                                        <p className="text">Il contient :</p>
                                        <div className="listhome">
                                                {Data.link.map((info) => {
                                                        return (
                                                                <Homebtn to={info.to} material={info.material} icone={info.icon} key={info.id} id={info.id} text={info.text} />
                                                        );
                                                })}
                                        </div>
                                        <p className="contentend permanent-marker-regular">Bonne Visite</p>
                                </div >
                        </div>
                </>
        );
}