import React from "react";
import { Link } from "react-router-dom";

import Btnlink from "../Components/Btnlink";

export default function Footer() {
        const d = new Date()
        const Annee = d.getFullYear()
        return (
                <section className="footer">
                        <div className="footertitle">
                                <p>Made by</p>
                                <Btnlink to="https://github.com/Quentin-M58" text="Quentin-M58" hovertext="Github" />
                        </div>
                        <div className="footertxt">
                                <p>Version 1.0 | all rights reserved ©{Annee}</p>
                        </div >
                        <div className="footertxt">
                                <Link to="/terms">Mention légales</Link>
                                <Link to="">Acceuil</Link>
                        </div >
                </section >
        );
}