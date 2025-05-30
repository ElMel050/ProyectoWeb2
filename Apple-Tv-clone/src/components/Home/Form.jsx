const resultado1 = () => {
    alert("Resultado de la búsqueda")
}

export default function Form() {
    return (
        <form action={resultado1}>
            <input type="text" placeholder="Buscar" />
            <button type="submit">Buscar</button>
        </form>
    );
}
