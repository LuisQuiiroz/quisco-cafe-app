import Image from 'next/image'
import { useQuiosco } from '../hooks/useQuiosco';
const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco();
    const { id, nombre, icono } = categoria;

    return (
        <div className={`${categoriaActual?.id == id ? 'bg-amber-400' : ''} border hover:bg-amber-400 hover:cursor-pointer`}>
            <button
                type="button"
                className="text-2xl font-bold  flex items-center gap-6 w-full p-5"
                onClick={() => handleClickCategoria(id)}
            >
                <Image
                    width={70}
                    height={70}
                    src={`/assets/img/icono_${icono}.svg`}
                    alt="Imagen Icono" />
                {nombre}
            </button>
        </div>
    )
}

export default Categoria