import React from 'react';
import './BannerRow.css';

export default ({title, items}) => {
    return (
        <div className="bannerRow">
            <h2>{title}</h2>
            <div className="bannerRow--listarea">
                <div className="bannerRow--list">
                    {items.length > 0 && items.map((item, key) =>(
                        <div key={key} className="bannerRow--item">
                            <a target="_blank" rel="noopener noreferrer" href={`${item.link}`}>
                                <img src={`${item.image_path}`} alt={item.full_name}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}