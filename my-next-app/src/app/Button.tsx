'use client';

interface IProps {
    children: React.ReactNode
}

export function Button({children}: IProps) {
    return (
        <button onClick={() => alert('Oskey')}>{children}</button>
    )
}