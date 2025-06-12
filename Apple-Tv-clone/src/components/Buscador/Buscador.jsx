const resultadoBusqueda = () => {
    return (
        alert("Resultado de la búsqueda")
    );
}

export default function Buscador() {
    return (
        <div>
            <form action={resultadoBusqueda}>
                <input type="text" placeholder="Buscar" />
                <button type="submit">Buscar</button>
            </form>
            <button onClick={}>
                Enlace pagina 1 form
            </button>
        </div>
    );
}