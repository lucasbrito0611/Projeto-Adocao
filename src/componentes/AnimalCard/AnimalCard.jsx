import { Link } from 'react-router-dom'; 

import local from '../../assets/local.png';
import femea from '../../assets/femea.png';

import './animalcard.css';

function AnimalCard(props) {
    return (
        <div className='container-card' key={props.nome}>
            <div className="container-img-1">
                <div className="container-img-2">
                    <figure className="animal-imagem"><img src={props.imagem} alt="" /></figure>
                </div>
            </div>
            <div className="container-informacoes">
                <div className="informacoes">
                    <h3>{props.nome}</h3>
                    <div className="informacoes-local"> 
                        <figure>
                            <img src={local}/>
                        </figure>
                        <h4>{props.local}</h4>
                    </div>
                    <div className="informacoes-sexo">
                        <figure>
                            <img src={femea}/>
                        </figure>
                        <h4>{props.sexo}</h4>
                    </div>
                </div>
                <button className="botao-adote"><Link to={`/animal/${props.nome.toLowerCase()}`}>Adote</Link></button>
            </div>
        </div>
    )
}

export default AnimalCard;