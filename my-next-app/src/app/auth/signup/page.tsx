import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <h1>Cadastre-se</h1>
            <Link href='/auth/signin'>Ir para o SignIn</Link>
        </>
    )
}