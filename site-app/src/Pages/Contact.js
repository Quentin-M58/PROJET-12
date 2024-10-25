import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

import Data from "../Data/data.json"

export default function Contact() {
        const reseaux = Data.link[5].reseaux
        const [Msg, setMsg] = useState("test")
        const [Msgcheck, setMsgcheck] = useState("je n'autorise pas")
        const [modal, setModal] = useState(false)
        const form = useRef();
        const sendEmail = (e) => {
                e.preventDefault();
                emailjs
                        .sendForm(/var/, /var/, form.current, {
                                publicKey: /var/,
                        })
                        .then(
                                () => {
                                        setMsg("votre message à été envoyer");
                                        setTimeout(() => {
                                                setModal(!modal)
                                        }, 100);
                                        e.target.reset()

                                },
                                (error) => {
                                        setMsg(`Erreur votre message n'a pas pu être envoyé \n ${error.text}`);
                                        setTimeout(() => {
                                                setModal(!modal)
                                        }, 100);
                                },
                        );
        };
        const closemodal = (event) => {
                setModal(!modal);
        }
        const checkmsg = (event) => {
                if (event.target.checked) {
                        setMsgcheck("j'autorise")
                } else {
                        setMsgcheck("je n'autorise pas")
                }
        }
        return (
                <>
                        <div className="Contact">
                                <div className="title">
                                        <p className="permanent-marker-regular">Contact</p>
                                </div>
                                <div className="contactcontent">
                                        <div className="reseaux">
                                                {reseaux.map(info => {
                                                        return (
                                                                <article className="reseaux" key={info.id}>
                                                                        <div className="titre">
                                                                                <p>Mon</p>
                                                                                <p>{info.name}</p>
                                                                        </div>
                                                                        <div className="link">
                                                                                <Link to={info.link} title={`voir mon ${info.name}`}><img src={`/Images/${info.name}.png`} alt={info.name} /></Link>
                                                                        </div>
                                                                </article>
                                                        );
                                                })}
                                        </div>
                                        <div className={modal ? "modal active" : "modal"}>
                                                <div className="modalmsg">
                                                        <p>{Msg}</p>
                                                        <button onClick={closemodal}>ok</button>
                                                </div>
                                        </div>
                                        <div className="contactform">
                                                <p>formulaire de contact</p>
                                                <form onSubmit={sendEmail} ref={form}>
                                                        <label htmlFor="name">Nom*</label>
                                                        <input className="input" type="text" autoCorrect="off" spellCheck="false" autoComplete="name" name="user_name" id="name" placeholder="Nom*" required />
                                                        <label htmlFor="email">Email*</label>
                                                        <input className="input" type="email" autoCorrect="off" spellCheck="false" autoComplete="email" name="user_email" id="email" placeholder="Email*" required />
                                                        <label htmlFor="object">Sujet*</label>
                                                        <input className="input" type="text" autoCorrect="off" spellCheck="false" autoComplete="off" name="user_object" id="object" placeholder="Sujet*" required />
                                                        <label htmlFor="message">Message*</label>
                                                        <textarea name="message" id="message" autoCorrect="off" spellCheck="false" autoComplete="off" placeholder="Message*" required />
                                                        <label className="check">
                                                                <input type="checkbox" name="user_consent" required onClick={checkmsg} />
                                                                <p>{Msgcheck} le site à conserver et utiliser les données transmises via ce formulaire pour le traitement de mon message.*</p>
                                                        </label>
                                                        <p>*Champ Obligatoires</p>
                                                        <input className="submit" type="submit" value="Envoyer" role="button" aria-pressed="false" />
                                                </form>
                                        </div>
                                </div>
                        </div >
                </>
        );
}
