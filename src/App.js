import React, { useEffect, useState } from "react";
import './App.css';
import BannersData from './BannersData';
import BannerRow from './components/BannerRow';
import FeaturedArea from './components/FeaturedArea';

export default () => {

  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await BannersData.getHomeList();
      setBannerList(list);
    }
    loadAll();
  }, []);


  return (
    <div className='page'>
      {/* HEADER */}
      {/* <h1>Gabaflix</h1> */}
      {/* FEATURED AREA */}
      <FeaturedArea />
      {/* LISTS */}
      <section className='lists'>
        {bannerList.map((item, key) =>(
          <BannerRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {/* FOOTER */}
    </div>
  )
}