import React from "react";
import { Link } from "react-router-dom";

export default function Presentation() {
        return (
                <>
                        <div className="Presentation">
                                <div className="title">
                                        <p className="permanent-marker-regular">bienvenue sur ma présentation</p>
                                </div>
                                <div className="contentchild">
                                        <p>
                                                Je suis Quentin, developpeur front-end junior, après une formation de technicien d'assistance informatique, j'ai décidé
                                                de continuer avec une formations de développeur intégrateur web, autrement dit devenir développeur
                                                front-end .
                                        </p>
                                        <p>
                                                Je suis quelqu'un de passionnée, attentif, respectueux et curieux d'apprendre tous les
                                                jours. Vous souhaitez travaillez avec moi, n'hésitez pas contacter moi en remplissant ma page de<span><Link to="/contact">contact</Link></span>ou voir soit mes<span><Link to="/works">Réalisation</Link></span>ou mes<span><Link to="/competences">compétences</Link></span>   .
                                        </p>
                                </div>
                        </div>
                </>
        );
}