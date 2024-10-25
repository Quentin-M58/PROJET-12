import React from "react";
import { Link } from "react-router-dom"


export default function Header({ onView, val }) {
        function onmenu() {
                if (val == "") {
                        onView('active')
                } else {
                        onView('')
                }
        }
        return (
                <>
                        <div className="header">
                                <Link to="">
                                        <div className="title">
                                                <p className="langar-regular">Quentin-M58</p>
                                        </div>
                                </Link>
                                <button onClick={onmenu}>
                                        <span className="material-icons">menu</span>
                                </button>
                        </div>
                </>
        );
}