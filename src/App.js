import React, { useEffect, useState } from "react";
import './App.css';
import Banners from './Banners';
import BannerRow from './components/BannerRow';

export default () => {

  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Banners.getHomeList();
      setBannerList(list);
    }
    loadAll();
  }, []);


  return (
    <div className='page'>
      {/* Header
      Destaque
      Listas
      Footer */}
      <h1>Começando o Gabaflix!</h1>
      <section className='lists'>
        {bannerList.map((item, key) =>(
          <BannerRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}