import { Metadata } from "next";

export function generateMetadata({params}: any): Metadata {
    return {
        title: `Veículos da marca ${params.make} | jstacar`
    }
}

export default function Make({params}: any) {
    return (
        <h1>Todos os veículos da: <strong>{params.make}</strong></h1>
    )
}