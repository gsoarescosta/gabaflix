import React, { useEffect, useState } from "react";
import Banners from './Banners';

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
    <div>
      <h1>Começando o Gabaflix!</h1>
    </div>
  )
}