import Layout from "../components/Layout"
import ResumenPoducto from "../components/ResumenPoducto"
import { useQuiosco } from "../hooks/useQuiosco"

const resumen = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pedido } = useQuiosco()
    return (
        <Layout pagina="Resumen">
            <h1 className="text-4xl font-black">Resumen</h1>
            {/* <p className="text-2xl my-10">Revisa tu Pedido</p> */}
            {pedido.length === 0
                ? <p className="text-2xl my-10"> No hay elementos en tu pedido</p>
                : pedido.map(producto => (
                    <ResumenPoducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            }
        </Layout>
    )
}

export default resumen