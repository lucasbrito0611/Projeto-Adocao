import { useState, useRef, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'

import AnimalCard from '../../componentes/AnimalCard/AnimalCard.jsx';
import { animais } from '../../script.js';
 
import './adote.css'

function Adote() {
    const [search, setSearch] = useState('')
    const [resultadoBuscaNome, setResultadoBuscaNome] = useState([])

    const buscaNome = animais.filter(item => item.nome.includes(search))

    function BuscarAnimais(e) {
        e.preventDefault()
        
        if (buscaNome == '') {
            alert('Animal não encontrado') 
        }
        setResultadoBuscaNome(buscaNome)
        setSearch('')
    }
    

    return (
        <main className="adote">
            <h1 className="texto-colorido">Adote seu melhor amigo</h1>
            <div className='container-adote'>
                <section className='filtros'>
                    <h2>Filtros:</h2>
                    <div className="accordion" id="accordionPanelsStayOpenExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Espécie
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <div className="option">
                                        <input type="checkbox" className="checkbox" value='Cachorro'/>
                                        <p>Cachorro</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox" value='Gato' onChange={BuscarAnimais}/>
                                        <p>Gato</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Sexo
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Macho</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Fêmea</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Porte
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Pequeno</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Médio</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Grande</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Idade
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Filhote</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Adulto</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Idoso</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    Estado
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                <div className="accordion-body">
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Alagoas</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Bahia</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Ceará</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Maranhão</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Paraíba</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Pernambuco</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Piauí</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Rio Grande do Norte</p>
                                    </div>
                                    <div className="option">
                                        <input type="checkbox" className="checkbox"/>
                                        <p>Sergipe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='animais-adocao'>
                    <form className='ordenacao'>
                        <label htmlFor="ordenar" className='ordenar-txt'>Ordenar por:</label>
                        <select name="selecao" id="ordenar">
                            <option value="destaques">Destaques</option>
                            <option value="ordem-alfabetica">Ordem Alfabética(A-Z)</option>
                            <option value="ordem-alfabetica-reversa">Ordem Alfabética(Z-A)</option>
                        </select>
                    </form>
                    <form className='animal-search' onSubmit={BuscarAnimais}>
                        <label htmlFor="animal" className='animal-search-txt'>Encontre seu pet:</label>
                        <input type="text" id='animal' placeholder='Nome do animal' value={search} onChange={(evento) => setSearch(evento.target.value.charAt(0).toUpperCase() + evento.target.value.slice(1))}/>
                        <button> 
                            <BiSearchAlt2 />
                        </button>
                    </form>
                    <div className='adote-animais'>
                    {resultadoBuscaNome.length > 0 
                        ? 
                        resultadoBuscaNome.map(item => <AnimalCard key={item.nome} imagem={item.imagem} nome={item.nome} local={item.local} sexo={item.sexo}/>) 
                        :
                        animais.map(item => <AnimalCard key={item.nome} imagem={item.imagem} nome={item.nome} local={item.local} sexo={item.sexo} />)
                    }

                    </div>
                </section>
            </div>
        </main>
    )
}

export default Adote;