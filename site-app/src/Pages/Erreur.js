import React from "react";
import { Link } from "react-router-dom";

export default function Erreur() {
        let path = window.location.href
        return (
                <>
                        <div className="error">
                                <div className="title">
                                        <p className="permanent-marker-regular">Page non trouvée</p>
                                </div>
                                <div className="errorcontent">
                                        <p>{path}</p>
                                        <p>n'est pas accessible</p>
                                        <div className="not">
                                                <span className="material-symbols-outlined">
                                                        devices
                                                </span>
                                                <progress />
                                                <span className="material-symbols-outlined">
                                                        language
                                                </span>
                                                <div className="disconect">
                                                        <span className="material-symbols-outlined">
                                                                close
                                                        </span>
                                                        <progress />
                                                </div>
                                                <span className="material-symbols-outlined">
                                                        web
                                                </span>
                                        </div>
                                        <p className="emoji"><span className="material-symbols-outlined">
                                                sentiment_dissatisfied
                                        </span></p>
                                        <Link to="">retour à l'acceuil</Link>
                                </div>
                        </div>
                </>
        );
}