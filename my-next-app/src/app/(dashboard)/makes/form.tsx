'use client'

import { useState } from "react"

export default function MakeForm() {
    const [ number, setNumber ] = useState(0)

    return (
        <>
            <p>The number is: <strong>{number}</strong></p>
            <button onClick={() => setNumber(number + 1)}>Click here!</button>
        </>
    )
}