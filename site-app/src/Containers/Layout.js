import React, { useState } from "react";
import Header from "./Header.js"
import Navcontent from "./Navcontent.js";

export default function Layout() {
        const [menuview, setMenuview] = useState('')
        return (
                <div className="layout">
                        <Header onView={(event) => setMenuview(event)} val={menuview} />
                        <Navcontent View={menuview} onClose={(event) => setMenuview(event)} />
                </div>
        );
}