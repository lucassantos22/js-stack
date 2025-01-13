import React from "react";

interface IProps {
    children: React.ReactNode
}

export default function DashboardLayout({children}: IProps) {
    return (
        <div>
            <h1>DASHBOARD LAYOUT</h1>
            {children}
        </div>
    )
}