import React from 'react';
import './FeaturedArea.css';

var years = new Date(new Date() - new Date("1995/04/11")).getFullYear() - 1970;

export default () => {
    return (
        <section className='featured'>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--left">
                        <div className="featured--name">O show do Gaba <span role="img" aria-label="rockonhand">🤘</span></div>
                        <div className="featured--info">
                            <div className="featured--score">Nota G+</div>
                            <div className="featured--year">1995</div>
                            <div className="featured--seasons">{years} temporadas</div>
                        </div>
                        <div className="featured--description">
                            Opa, tudo certo?
                            Eu sou o Gabriel, também conhecido como Gaba, e fiz essa página "clone" da antiga Netflix com a intenção de aprender mais sobre React JS.
                            Estou aproveitando ela para divulgar minha stream e redes sociais <span role="img" aria-label="grinningface">😅</span>.
                            Clique em <b>Assistir</b> para acessar minha página de transmissões ou em <b>Minha Lista</b> para acompanhar o que estou assistindo.
                        </div>
                        <div className="featured--buttons">
                            <a href="https://twitch.tv/gabasc" className="featured--watchbutton" title="Assistir ao vivo">► Assistir</a>
                            <a href="https://www.tvtime.com/en/user/10086228/profile" className="featured--mylistbutton" title="Minha lista de filmes e séries">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres">Categorias: <strong> Programação, Jogos, Filmes e Séries </strong></div>
                    </div>
                    <div className="featured--right">
                        <iframe src="https://player.twitch.tv/?channel=gabasc&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620" title="Twitch Player"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}