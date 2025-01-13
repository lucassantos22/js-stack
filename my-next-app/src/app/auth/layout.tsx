import React from "react";

interface IProps {
    children: React.ReactNode
}

export default function AuthLayout({children}: IProps) {
    return (
        <div>
            <h1>AUTH LAYOUT</h1>
            {children}
        </div>
    )
}