import React from "react";
import { Link } from "react-router-dom";

export default function Homebtn({ to, material, icone, id, text}) {
        return (
                <>
                        <Link className="btnhome" to={to} key={id}><span className={`material-${material}`}>{icone}</span><p>{text}</p></Link>
                </>
        );
}