/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "../components/Layout"
import { useEffect, useCallback } from 'react'
import { useQuiosco } from "../hooks/useQuiosco"
import { formatearDinero } from '../helpers'

const total = () => {
    const { pedido, nombre, setNombre, ColocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido]);


    return (
        <Layout pagina="Total y confrimar pedido">
            <h1 className="text-4xl font-black">Total y confrimar pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>
            <form
                onSubmit={ColocarOrden}
                autoComplete="off">
                <div>
                    <label
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl"
                    >
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: <span className="font-bold"> {formatearDinero(total)} </span>
                    </p>
                </div>
                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-500 hover:bg-indigo-600'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer`}
                        value="Confirmar pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}

export default total