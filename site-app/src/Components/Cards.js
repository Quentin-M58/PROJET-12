import React from 'react'
import { Link } from "react-router-dom";

export default function Cards({ title, tag, projetid }) {
        return (
                <div className="workitem">
                        <Link to={`/works/${title}`}>
                                <article className="card">
                                        {projetid !== undefined && projetid !== 11 ?
                                                <img src={`/Images/Work/P${projetid}/logo.png`} alt="logo du projet" title={title}></img>
                                                : <div className="noimg"><p>pas d'image</p></div>
                                        }
                                        <p>{title}</p>
                                        <div className="tag">
                                                {tag.map(item => {
                                                        return (
                                                                <p key={item}>{item}</p>
                                                        );
                                                })}
                                        </div>
                                </article>
                        </Link>
                        <br />
                </div>
        )
}
