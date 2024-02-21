import { Link } from 'react-router-dom'; 

import dog from '../../assets/dog.png';
import cat from '../../assets/cat.png';
import abandono from '../../assets/abandono.png';
import responsavel from '../../assets/responsavel.png';
import ilegal from '../../assets/ilegal.png';
import conexao from '../../assets/conexao.png';
import edi from '../../assets/edi.png';
import brito from '../../assets/brito.png';
import git_equipe from '../../assets/git_equipe.png';
import insta_equipe from '../../assets/insta_equipe.png';

import './quemsomos.css';

function QuemSomos() {
    return (
        <main className='main-quemsomos'>
            <section className="quemsomos">
                <h1>Quem Somos?</h1>
                <p>
                A equipe do Coração Animal é uma equipe nordestina apaixonada por criar um impacto positivo nas vidas dos
          animais e das pessoas. Nossa missão é proporcionar um ambiente online seguro e eficiente para facilitar a adoção 
          responsável de cachorros e gatos no Nordeste. Trabalhamos em estreita colaboração com abrigos, resgatistas e
          amantes de animais para garantir que cada cão listado em nossa plataforma tenha a oportunidade de encontrar um
          lar amoroso.
                </p>
            </section>

            <section className='container-oferecemos'>
                <h1>O que oferecemos?</h1>
                <div className='oque-oferecemos'> 
                    <h2>Variedade de Raças e Tamanhos</h2>
                    <p>
                    Desde filhotes adoráveis até cães mais maduros, oferecemos uma variedade de opções para atender às
            preferêcias individuais.
                    </p>
                </div>
                <div className='oque-oferecemos'>
                    <h2>Processo de Adoção Transparente</h2>
                    <p>
                    Nosso processo de adoção é transparente e centrado no bem-estar do animal. Os candidatos passam por uma
            análisecuidadosa para garantir que estão prontos para assumir a responsabilidade de cuidar de um novo
            membro a família.
                    </p>
                </div>
                <div className='oque-oferecemos'>
                    <h2>Suporte Pós-Adoção</h2>
                    <p>
                    Estamos comprometidos em fornecer suporte contínuo pós-adoção. Oferecemos recursos, conselhos e uma
            comunidde ativa para garantir que cada cachorro e seu novo dono tenham uma transição suave para uma vida
            feliz juntos.
                    </p>
                </div>
            </section>

            <section className='animais-plataforma'>
                <h1>Animais da Plataforma</h1>
                <div className='container-animais-plat'>
                    <div>
                        <figure><img src={dog} alt="" /></figure>
                        <h2>Cachorro</h2>
                        <p>Conhecer</p>
                    </div>

                    <div>
                        <figure><img src={cat} alt="" /></figure>
                        <h2>Gato</h2>
                        <p>Conhecer</p>
                    </div>
                </div>
            </section>

            <section className='importancia'>
                <h1>Importância da Plataforma</h1>
                <div className='container-importancia'>
                    <figure><img src={abandono} alt="" /></figure>
                    <div>
                        <h2>Redução do Abandono de Animais</h2>
                        <p>
                        Ao oferecer uma plataforma de adoção acessível e eficiente, a chance de encontrar lares amorosos para
              animais em situação de abandono aumenta, contribuindo para a redução do número de animais nas ruas e
              abrigos.
                        </p>
                    </div>
                </div>

                <div className='container-importancia'>
                    <figure><img src={responsavel} alt="" /></figure>
                    <div>
                        <h2>Promoção da Adoção Responsável</h2>
                        <p>A plataforma pode educar os adotantes sobre a importância da adoção responsável, incluindo cuidados
              adequados, comprometimento a longo prazo e a compreensão das necessidades específicas de cada animal.
              </p>
                    </div>
                </div>

                <div className='container-importancia'>
                    <figure><img src={ilegal} alt="" /></figure>
                    <div>
                        <h2>Prevenção do Comércio Ilegal de Animais</h2>
                        <p>
                        Ao fornecer uma alternativa ética para a aquisição de animais de estimação, a plataforma contribui para a
              redução do comércio ilegal e do mercado de animais de origem duvidosa.
                        </p>
                    </div>
                </div>
                
                <div className='container-importancia'>
                    <figure><img src={conexao} alt="" /></figure>
                    <div>
                        <h2>Conexão entre Adotantes e Animais</h2>
                        <p>
                        A plataforma facilita a conexão direta entre pessoas dispostas a adotar e animais que precisam de um lar,
              proporcionando uma oportunidade para ambas as partes encontrarem a companhia que desejam.
                        </p>
                    </div>
                </div>
            </section>

            <section className='equipe-dev'>
                <h1>Equipe de Desenvolvimento</h1>
                <div className='container-devs'>
                    <div className='container-dev'>
                        <figure><img src={edi} alt="" className='foto-perfil'/></figure>
                        <h2>Pedro Edi</h2> 
                        <div className='container-equipe-info'>
                            <div className='equipe-info'>
                                <figure><img src={git_equipe} alt="" /></figure>
                                <p>------------</p>
                            </div>

                            <Link to="https://instagram.com/pedro_egxc" target='_blank'>
                                <div className='equipe-info'>
                                    <figure><img src={insta_equipe} alt="" /></figure>
                                    <p>pedro_egxc</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='container-dev'>
                        <figure><img src={brito} alt="" className='foto-perfil'/></figure>
                        <h2>Lucas Brito</h2>
                        <div className='container-equipe-info'>
                            <Link to="https://github.com/lucasbrito0611" target='_blank'>
                                <div className='equipe-info'>
                                    <figure><img src={git_equipe} alt="" /></figure>
                                    <p>lucasbrito0611</p>
                                </div>
                            </Link>

                            <Link to="https://instagram.com/lucasbritops" target='_blank'>
                                <div className='equipe-info'>
                                    <figure><img src={insta_equipe} alt="" /></figure>
                                    <p>lucasbritops</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default QuemSomos;