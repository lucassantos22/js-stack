import Link from "next/link";

export default function SignIn() {
    return (
        <>
            <h1>Login</h1>
            <Link href='/auth/signin'>Ir para o SignIn</Link>
        </>
    )
}