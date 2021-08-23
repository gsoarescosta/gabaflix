import React from 'react';
import './BannerRow.css';

export default ({title, items}) => {
    shuffleArray(items); // Shows banners in a random order
    return (
        <div className="bannerRow">
            <h2>{title}</h2>
            <div className="bannerRow--listarea">
                <div className="bannerRow--list">
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