import React from 'react'

export default function Cardcomp({ title, logo, description, level, link }) {
        return (
                <article className="card" title={title.toUpperCase()}>
                        <div className="cardcontent">
                                <div className="titre">
                                        <p>{title}</p>
                                </div>
                                <div className="logo">
                                        <img src={`/Images/${logo}.png`} alt={title} />
                                </div>
                                <div className="niveaux">
                                        <div className="barmax">
                                                <div className="barniv" style={{ width: `${level}0%` }} >
                                                        <p>{level}/10</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="desc">
                                        <p>Description</p>
                                        <p className="info">{description}</p>
                                </div>
                                <div className="lien">
                                        <p>lien</p>
                                        <div className="lienitem">
                                                {link.map(info => {
                                                        return (
                                                                <a key={Math.random()} href={info.link} target="_blank" rel="noreferrer">{info.name}</a>
                                                        );
                                                })}
                                        </div>
                                </div>
                        </div>
                </article>
        )
}
