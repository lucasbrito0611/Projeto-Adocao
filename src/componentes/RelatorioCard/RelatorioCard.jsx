import './relatoriocard.css'

function RelatorioCard(props) {
    return (
        <div className="container-relatorioCard">
            <img src={props.imagem} alt="" className="img-quemadotou"/>
            <div className="relatorio-info">
                <h2>{props.nome}</h2>
                <p>{props.texto}</p> 
            </div>
        </div>
    )
}

export default RelatorioCard;