import { PrismaClient } from "@prisma/client"; // para hacer operaciones en la base de datos    
import { categorias } from './data/categorias';
import { productos } from './data/productos';


const prisma = new PrismaClient()

const main = async (): Promise<void> => {
    try {
        await prisma.categoria.createMany({
            // categoria hace referencia al nombre de la tabla
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error)
    }
}
main()