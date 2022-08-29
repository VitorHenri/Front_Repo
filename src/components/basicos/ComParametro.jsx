export default (props) => {
    const nome = props.nome.length>=6?"Vitor":"Alberto"

    return (
        <div className="parametro">
            <p>Nome : {nome}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}