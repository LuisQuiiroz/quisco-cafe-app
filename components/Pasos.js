import { useRouter } from "next/router"

const pasos = [
    { paso: 1, nombre: 'Menú', url: '/', porcentaje: 'w-1/12' },
    { paso: 2, nombre: 'Resumen', url: '/resumen', porcentaje: 'w-5/12' },
    { paso: 3, nombre: 'Datos y total', url: '/total', porcentaje: 'w-12/12' }
]
const Pasos = () => {
    // @refresh reset
    const router = useRouter()
    const pathClass = pasos.find(paso => paso.url === router.pathname)
    return (
        <>
            <div
                className="flex justify-between"
            >
                {pasos.map(paso => (
                    <button
                        onClick={() => {
                            router.push(paso.url)
                        }}
                        key={paso.paso}
                        className="text-2xl justify-between mb-5"
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>
            <div className="bg-gray-100 mb-10">
                <div
                    className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white ${pathClass.porcentaje}`}
                ></div>
            </div>
        </>
    )
}

export default Pasos