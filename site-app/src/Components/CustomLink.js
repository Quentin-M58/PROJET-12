import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function CustomLink({ to, material, name, text, img, id }) {

        let resolved = useResolvedPath(to);
        let resolver = useResolvedPath("");
        let resolvered = useResolvedPath("acceuil");
        let match = useMatch({ path: resolved.pathname, end: false });
        let matcher = useMatch({ path: resolved.pathname, end: true });
        let amatch = useMatch({ path: resolver.pathname, end: true });
        let amatcher = useMatch({ path: resolvered.pathname, end: false });

        let icone
        if (img === "icon") {
                if (text.includes(".")) {
                        icone = text.split(".")[1]
                        if (icone === "html") {
                                icone = "html 5"
                        }
                        if (icone === "css") {
                                icone = "css 3"
                        }
                        if (icone === "js") {
                                icone = "javascript"
                        }
                } else {
                        text = text + ".html";
                        icone = text.split(".")[1] + " 5"
                }
        }

        return (
                <div className="link">
                        <Link
                                className={((id === 3 && match)
                                        || (id === 2 && matcher)
                                        || (id === 1 && match)
                                        || (id === 4 && (amatch || amatcher)))
                                        ? "active" : null}
                                to={to}
                                title={text}
                                id={id}
                        >
                                {material !== undefined ? <>
                                        <div className="icon">
                                                <span alt={`Icone ${name}`} title={name}  className={`material-${material}`}>{name}</span>
                                        </div>
                                        <div className="text" >
                                                <p>{text}</p>
                                        </div>
                                </> : img === "icon" ?
                                        <>
                                                <div className="icon">
                                                                <img src={`/Images/${icone}.png`} alt={`Logo ${icone}`} title={icone} />
                                                </div>
                                                <div className="text" >
                                                        <p>{text.split(".")[0]}.{text.split(".")[1]}</p>
                                                </div>
                                        </> : <p title={text}>{text}</p>}
                        </Link>
                </div>
        );
}

