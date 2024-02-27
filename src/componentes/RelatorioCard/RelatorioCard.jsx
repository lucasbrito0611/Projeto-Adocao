import PropTypes from 'prop-types';

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

RelatorioCard.propTypes = {
    nome: PropTypes.string,
    texto: PropTypes.string
}

export default RelatorioCard;