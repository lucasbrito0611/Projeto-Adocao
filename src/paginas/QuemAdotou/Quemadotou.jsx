import { relatorios } from '../../script';

import RelatorioCard from '../../componentes/RelatorioCard/RelatorioCard';

import './quemadotou.css'

function QuemAdotou() {
    return (
        <main>
            <section className="container-relatorios">
                <h1 className="texto-colorido">Relatórios de Adoção</h1>
                {relatorios.map(item => <RelatorioCard imagem={item.imagem} nome={item.nome} texto={item.texto}/>)}
            </section>
        </main> 
    )
}

export default QuemAdotou;