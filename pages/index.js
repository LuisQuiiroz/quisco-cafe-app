import { PrismaClient } from "@prisma/client"
import Layout from "../components/Layout"
import Producto from "../components/Producto";
import { useQuiosco } from "../hooks/useQuiosco"


export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black"> {categoriaActual?.nombre} </h1>
      <p className="text-2xl my-5">
        Elige y personaliza tu pedido
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </Layout >
  )
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();
//   // const categoria = await prisma.categoria.findFirst({
//   //   where: {
//   //     id: 3
//   //   }
//   // })
//   const categorias = await prisma.categoria.findMany();
//   return {
//     props: {
//       categorias
//     }
//   }
// }