import { useParams } from 'react-router-dom';
import { animais } from "../../script";


import local_animal from '../../assets/local_animal.png';
import idade_animal from '../../assets/idade_animal.png';
import castrado_animal from '../../assets/castrado_animal.png';
import sexo_animal from '../../assets/sexo_animal.png';
import porte_animal from '../../assets/porte_animal.png';
import raca_animal from '../../assets/raca_animal.png';

import './animal.css'

function Animal(props) {
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

{/* <main>
        <section id="container_judite">
            <img id="img-animal" src="imgs/cachorro1.png" class="imgs-quemadotou">
            <div>
                <h1>Judite</h1>
                <div id="container-caracteristicas">
                    <div class="div-caracteristicas">
                    <div>
                        <img src="imgs/local_animal.png">
                        <p>Local: João Pessoas,PB</p>
                    </div>
                    <div>
                        <img src="imgs/idade_animal.png">
                        <p>Idade: 1 A e 2M</p>
                    </div>
                    <div>
                        <img src="imgs/castrado_animal.png">
                        <p>Castrado : Não</p>
                    </div>
                    </div>
                    <div class="div-caracteristicas">
                    <div>
                        <img src="imgs/sexo_animal.png">
                        <p>Sexo: Fêmea</p>
                    </div>
                    <div>
                        <img src="imgs/porte_animal.png">
                        <p>Porte : Pequeno</p>
                    </div>
                    <div>
                        <img src="imgs/raca_animal.png">
                        <p>Raça: Vira-lata</p>
                    </div>
                    </div>

                </div>
            <div id="descricao">
                <div>
                <h2>História</h2>
                <p>Ao encontrar Judite, uma cachorrinha perdida, decidi acolhê-la temporariamente em casa. Utilizando um
                    site e as redes sociais, compartilhei sua história em busca de um lar permanente. Enquanto aguardava por
                    uma adoção, cuidei dela com carinho e atenção.</p>
                </div>
                <div>
                <h2>Cuidados</h2>
                <p>Ao cuidar de Judite, uma cachorrinha debilitada, evite ambientes agitados, introduza-a gradualmente a
                    novas situações com paciência, forneça um local tranquilo e seguro, e demonstre carinho respeitando seu
                    tempo de adaptação.</p>
                </div>
            </div>
            <div id="div-button">
                <p>Entrar em contato</p>
            </div>
            </div>
        </section>
  </main> */}

export default Animal;