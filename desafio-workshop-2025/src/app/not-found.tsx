import Link from "next/link"

export default function NotFound() {
    return(
        <div className="justify-items-center mt-10">
            <h1 className="text-7xl font-bold">ERRO 404!</h1>
            <p className="mt-4 text-2xl font-light">Página não existente</p>
            <p className="mt-4 text-2xl font-light">Voltar para Home</p>
            <button className="bg-blue-600 p-2 rounded-sm mt-4 text-white">
                <Link href="/">
                    Home
                </Link>
            </button>
        </div>
    )
}