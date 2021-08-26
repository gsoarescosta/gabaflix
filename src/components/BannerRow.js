import React, { useState } from 'react';
import './BannerRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
  // shuffleArray(items); // Shows banners in a random order - not working the way I wanted
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 150;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="bannerRow">
      <h2>{title}</h2>
      <div className="bannerRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize:50}} />
      </div>
      <div className="bannerRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize:50}} />
      </div>
      <div className="bannerRow--listarea">
        <div className="bannerRow--list" style={{
          marginLeft: scrollX,
          width: items.length * 150
        }}>
          {items.length > 0 && items.map((item, key) =>(
            <div key={key} className="bannerRow--item">
              <a target="_blank" rel="noopener noreferrer" href={`${item.link}`} title={item.full_name}>
                <img src={`${item.image_path}`} alt={item.full_name}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function shuffleArray(array) { // Durstenfeld shuffle => https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}