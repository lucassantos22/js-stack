import { Metadata } from "next";
import Link from "next/link";
import MakeForm from "./form";

async function getMakes() {
    const res = await fetch('http://localhost:3000/api/cars', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json();
}

export const metadata: Metadata = {
    title: 'Todos os veículos | jstacar'
}

export default async function Makes() {
    const { makes } = await getMakes();
    return (
        <div>
            <h1 className="mb-10 font-xlg">Marcas</h1>
            <div className='grid grid-cols-5 gap-4'>
                {makes.map((make: string) => (
                    <Link href={`/makes/${make}`} key={make}>
                        <div className="rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56">
                            {make}
                        </div>
                    </Link>
                ))}
            </div>
            <MakeForm />
        </div>
    )
}