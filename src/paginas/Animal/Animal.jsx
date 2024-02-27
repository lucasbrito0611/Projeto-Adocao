import { useParams } from 'react-router-dom';
import { animais } from "../../script";


import local_animal from '../../assets/local_animal.png';
import idade_animal from '../../assets/idade_animal.png';
import castrado_animal from '../../assets/castrado_animal.png';
import sexo_animal from '../../assets/sexo_animal.png';
import porte_animal from '../../assets/porte_animal.png';
import raca_animal from '../../assets/raca_animal.png';

import './animal.css'

function Animal() {
    const { nome } = useParams()
    const animal = animais.find(animal => animal.nome.toLowerCase() === nome)

    return (
        <main>
            <section className="container-animalpage">
                <div>
                    <img className='img-animalpage' src={animal.imagem} alt="" />
                    <div className='containergeral-caracteristicas'>
                        <h1>{animal.nome}</h1>
                        <div className='container-caracteristicas'>
                            <div className='div-caracteristicas'>
                                <div>
                                    <img src={local_animal} alt="" />
                                    <p>Local: {animal.local}</p>
                                </div>
                                <div>
                                    <img src={idade_animal} alt="" />
                                    <p>Idade: {animal.idade} anos</p>
                                </div>
                                <div>
                                    <img src={castrado_animal} alt="" />
                                    <p>Castrado: {animal.castrado}</p>
                                </div>
                            </div>
                            
                            <div className='div-caracteristicas'>
                                <div>
                                    <img src={sexo_animal} alt="" />
                                    <p>Sexo: {animal.sexo}</p>
                                </div>
                                <div>
                                    <img src={porte_animal} alt="" />
                                    <p>Porte: {animal.porte}</p>
                                </div>
                                <div>
                                    <img src={raca_animal} alt="" />
                                    <p>Raça: {animal.raca}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='botao-animalpage'>Entrar em Contato</div>
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default Animal;