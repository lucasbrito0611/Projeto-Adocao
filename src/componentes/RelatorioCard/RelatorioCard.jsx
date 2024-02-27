import './relatoriocard.css'

function RelatorioCard({imagem, nome, texto}) {
    return (
        <div className="container-relatorioCard">
            <img src={imagem} alt="" className="img-quemadotou"/>
            <div className="relatorio-info">
                <h2>{nome}</h2>
                <p>{texto}</p> 
            </div>
        </div>
    )
}

export default RelatorioCard;