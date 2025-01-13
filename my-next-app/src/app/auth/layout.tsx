'use client'

import React, { useState } from "react";

interface IProps {
    children: React.ReactNode
}

export default function AuthLayout({children}: IProps) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>AUTH LAYOUT</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui!</button>
            {children}
        </div>
    )
}