import React from 'react';
import './FeaturedArea.css';

export default () => {
    return (
        <section className='featured'>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">I am GabaSC</div>
                    <div className="featured--info">
                        <div className="featured--score">Nota G+</div>
                        <div className="featured--year">1995</div>
                        <div className="featured--seasons">26 temporadas</div>
                    </div>
                    <div className="featured--description">
                        E aí, tudo bom?
                        Meu nome é Gabriel, também sou conhecido como Gaba, tenho 26 anos e sou fissurado em <i>games</i>.
                        blablablabalbla alblabl ablalb al bal lba blal. 
                        E aí, tudo bom?
                        Meu nome é Gabriel, também sou conhecido como Gaba, tenho 26 anos e sou fissurado em <i>games</i>.
                        blablablabalbla alblabl ablalb al bal lba blal. 
                    </div>
                    <div className="featured--buttons">
                        <a href="https://twitch.tv/gabasc" className="featured--watchbutton">► Assistir</a>
                        <a href="https://www.tvtime.com/en/user/10086228/profile" className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">Categorias: <strong> Programação, Jogos, Filmes e Séries </strong></div>
                </div>
            </div>
        </section>
    )
}