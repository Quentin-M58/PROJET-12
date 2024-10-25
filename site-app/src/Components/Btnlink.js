import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Btnlink({ to, text, hovertext }) {
        const [txt, settxt] = useState('Quentin-M58')
        return (
                <div
                        className="Btnlink"
                        onMouseLeave={(e) => { settxt(text) }}
                        onMouseEnter={(e) => { settxt(hovertext === undefined ? text : (`Go to ${hovertext}`)) }}>
                        <Link target="_blank" to={to}>
                                <p>{txt}</p>
                        </Link>
                </div>
        );
}

