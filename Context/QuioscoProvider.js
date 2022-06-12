/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'


export const QuioscoContext = createContext();

export const QuiscoProvider = ({ children }) => {
    const router = useRouter()

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data.categorias);
    }

    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido]);

    const handleClickCategoria = (id) => {
        const categoria = categorias.find(cat => cat.id === id);
        setCategoriaActual(categoria);
        router.push('/')
    }

    const handleProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handlePedido = ({ categoriaId, ...producto }) => {

        if (pedido.some(productoState => productoState.id === producto.id)) {
            // Actualizar cantidad
            const actualizarPedido = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(actualizarPedido)
            toast.success('Guardado correctamente')
        }
        else {
            // Añadir un nuevo producto
            setPedido([...pedido, producto])
            toast.success('Agegado al pedido')
        }
        setModal(false)
    }

    const handleEditarCantidades = id => {
        const actProd = pedido.find(producto => producto.id === id)
        setProducto(actProd)
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    const ColocarOrden = async (e) => {
        e.preventDefault()
        try {
            await axios.post('api/ordenes', { pedido, nombre, total, fecha: Date.now().toString() })
            // resetar app 
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success('Pedido realizado correctamente')

            setTimeout(() => {
                router.push('/')
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleProducto,
                modal,
                handleChangeModal,
                handlePedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                ColocarOrden,
                total
            }}>
            {children}
        </QuioscoContext.Provider>
    )
}

