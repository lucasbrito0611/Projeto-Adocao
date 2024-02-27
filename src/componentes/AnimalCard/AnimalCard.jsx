import { Link } from 'react-router-dom'; 

import localImg from '../../assets/local.png';
import femea from '../../assets/femea.png';

import './animalcard.css';

function AnimalCard({nome, imagem, local, sexo}) {
    return (
        <div className='container-card'>
            <div className="container-img-1">
                <div className="container-img-2">
                    <figure className="animal-imagem"><img src={imagem} alt="" /></figure>
                </div>
            </div>
            <div className="container-informacoes">
                <div className="informacoes">
                    <h3>{nome}</h3>
                    <div className="informacoes-local"> 
                        <figure>
                            <img src={localImg}/>
                        </figure>
                        <h4>{local}</h4>
                    </div>
                    <div className="informacoes-sexo">
                        <figure>
                            <img src={femea}/>
                        </figure>
                        <h4>{sexo}</h4>
                    </div>
                </div>
                <button className="botao-adote"><Link to={`/animal/${nome.toLowerCase()}`}>Adote</Link></button>
            </div>
        </div>
    )
}

export default AnimalCard;