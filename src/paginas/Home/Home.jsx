import { Link } from 'react-router-dom'; 

import fundogato from '../../assets/fundo_gato.png';
import gato from '../../assets/gato.png';
import companheirismo from '../../assets/companheirismo.png';
import saude from '../../assets/saude.png';
import exercicios from '../../assets/exercicios.png';
import racao from '../../assets/racao.png';
import veterinario from '../../assets/veterinario.png';
import exercicio from '../../assets/exercicio.png';
import buldog from '../../assets/buldog.png';
import gato_assustado from '../../assets/gato_assustado.png';
import higiene from '../../assets/higiene.png';
import amor from '../../assets/amor.png';
import coleira from '../../assets/coleira.png';
import passo_1 from '../../assets/1_passo.png';
import passo_2 from '../../assets/2_passo.png';
import passo_3 from '../../assets/3_passo.png';

import AnimalCard from '../../componentes/AnimalCard/AnimalCard.jsx';
import { animais } from '../../script.js';
 
import './home.css'

function Home() {

    return (
        <main className='home'>
            <section className="introducao">
                <div className="container-texto-introducao">
                    <h1 className="texto-colorido">ADOTE AMOR, ENCONTRE UM AMIGO PARA SEMPRE</h1>
                    <p>
                        Descubra o poder da adoção em nosso site! Adote hoje, faça parte de histórias incríveis de amor e faça a diferença na vida de um animalzinho. Seja a mudança que eles precisam!
                    </p>
                    <div>
                        <button><Link to="/adote">Saiba mais</Link></button>
                    </div>
                </div>

                <div className="imgs-introducao">
                    <figure className="fundo-gato"><img src={fundogato} alt="" /></figure>
                    <figure className='gato'><img src={gato} alt="" /></figure>
                </div>
            </section>

            
            <section className='animais'>
                <h2 className='texto-colorido'>CONHEÇA OS BICHINHOS</h2>
                <div className='container-animais'>
                    {animais.slice(0,3).map(item => <AnimalCard key={item.nome} imagem={item.imagem} nome={item.nome} local={item.local} sexo={item.sexo}/>)}
                </div>
                <button className='veja-mais'><Link to="/adote">Veja mais</Link></button>
            </section>


            <section className='motivo'>
                <h2 className='texto-colorido'>POR QUE ADOTAR UM ANIMAL?</h2>
                <div className='container-motivos'>
                    <div className='container-motivo'>
                        <figure><img src={companheirismo} alt="" /></figure>
                        <h3 className='h3-motivo'>Companheirismo</h3>
                        <p>
                            Animais de estimação, como cachorros e gatos, oferecem companheirismo constante,
            reduzindo solidão e estresse. A interação diária desencadeia a liberação de ocitocina,
            promovendo um ambiente emocionalmente saudável.
                        </p>
                    </div>

                    <div className='container-motivo'>
                        <figure><img src={saude} alt="" /></figure>
                        <h3 className='h3-motivo'>Melhora da Saúde</h3>
                        <p>
                            Animais de estimação, como cachorros e gatos, oferecem benefícios à saúde, reduzindo estresse e
            promovendo atividade física. Essa relação proporciona uma conexão enriquecedora e afetiva, melhorando o
            bem-estar geral.
                        </p>
                    </div>

                    <div className='container-motivo'>
                        <figure><img src={exercicios} alt="" /></figure>
                        <h3 className='h3-motivo'>Atividade Física</h3>
                        <p>
                            Cães promovem socialização e atividade física, incentivando seus donos a interagirem durante os
            passeios. A responsabilidade dos cuidados e exercícios estimula uma vida ativa, contribuindo para um estilo
            de vida saudável.
                        </p>
                    </div>
                </div>
            </section>


            <section className='cuidados'>
                <h2 className='texto-colorido'>CUIDADOS NECESSÁRIOS</h2>
                <div className='container-cachorro'>
                    <div className='container-informacoes-cuidados'>
                        <div>
                            <figure><img src={racao} alt="" /></figure>
                            <div>
                                <h3>Alimentação Balanceada</h3>
                                <p>Forneça uma dieta equilibrada e adequada ao cachorro</p>
                            </div>
                        </div>
                        
                        <div>
                            <figure><img src={veterinario} alt="" /></figure>
                            <div>
                                <h3>Visitas ao Veterinário</h3>
                                <p>Agende consultas regulares com um veterinário para check-ups, vacinações e cuidados preventivos de saúde</p>
                            </div>
                        </div>
                        
                        <div>
                            <figure><img src={exercicio} alt="" /></figure>
                            <div>
                                <h3>Exercício Regular</h3>
                                <p>Garanta atividade física suficiente para manter a saúde e o bem-estar do seu cachorro, seja por meio de
                passeios, brincadeiras ou exercícios no quintal.</p>
                            </div>
                        </div>
                    </div>
                    <img src={buldog} className='cuidados-imgs' />
                </div>

                <div className='container-gato'>
                    <img src={gato_assustado} className='cuidados-imgs' />
                    <div className='container-informacoes-cuidados'>
                        <div>
                            <figure><img src={higiene} alt="" /></figure>
                            <div>
                                <h3>Higiene</h3>
                                <p>
                                Mantenha a higiene do seu cachorro, incluindo banhos regulares, escovação de pelos, cuidados com as
                unhas e limpeza dos ouvidos. 
                                </p>
                            </div>
                        </div>

                        <div>
                            <figure><img src={amor} alt="" /></figure>
                            <div>
                                <h3>Atenção e Carinho</h3>
                                <p>Dedique tempo diário para interagir, brincar e demonstrar afeto ao seu cachorro. Eles são animais
                sociais que prosperam na companhia humana.</p>
                            </div> 
                        </div>

                        <div>
                            <figure><img src={coleira} alt="" /></figure>
                            <div>
                                <h3>Identificação</h3>
                                <p>Coloque uma identificação no seu cachorro, como uma plaquinha na coleira, e considere a opção de um
                microchip para ajudar na localização em caso de perda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='funcionamento'>
                <h2 className="texto-colorido">Como funciona a adoção?</h2>
                <div className='container-funcionamentos'>
                    <div className='container-funcionamento'>
                        <figure><img src={passo_1} alt="" /></figure>
                        <p>
                            Procure o seu pet no nosso site e, em seguida, aperte no botão “Adote!”. Após apertar, você verá mais 
                informações sobre esse pet.
                        </p>
                    </div>

                    <div className='container-funcionamento'>
                        <figure><img src={passo_2} alt="" /></figure>
                        <p>
                            Entre em contato com o dono do pet escolhido para uma conversa sobre a adoção e uma avaliação será feita 
                por parte do dono.
                        </p>
                    </div>

                    <div className='container-funcionamento'>
                        <figure><img src={passo_3} alt="" /></figure>
                        <p>
                            Se o dono avaliar que você está apto a adotar o animal, ambos deverão assinar um termo de direito e 
                responsabilidade que virá pelo E-mail.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home; 