import React, { useEffect, useState } from "react";
import './App.css';
import BannersData from './BannersData';
import BannerRow from './components/BannerRow';
import FeaturedArea from './components/FeaturedArea';
import Header from './components/Header';

export default () => {

  const [bannerList, setBannerList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando as listas
      let list = await BannersData.getHomeList();
      setBannerList(list);
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <div className='page'>
      {/* HEADER */}
      <Header black={blackHeader} />
      {/* FEATURED AREA */}
      <FeaturedArea />
      {/* LISTS */}
      <section className='lists'>
        {bannerList.map((item, key) =>(
          <BannerRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <hr/>
      {/* FOOTER */}
      <footer>
        Feito em <a href="https://reactjs.org/">React</a> - baseado no tutorial de <a href="https://www.youtube.com/watch?v=tBweoUiMsDg">Bonieky</a><br/>
        Imagens dos jogos obtidas através do site da <a href="https://www.twitch.tv/directory">Twitch</a><br/>
        Projeto disponível <a href="https://github.com/gsoarescosta/gabaflix">nesse repositório</a> público
      </footer>
    </div>
  )
}