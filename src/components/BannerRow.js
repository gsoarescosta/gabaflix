import React from 'react';
import './BannerRow.css';

export default ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="bannerRow--listarea">
                {items.length > 0 && items.map((item, key) =>(
                    <img src={`${item.image_path}`} alt={item.full_name}/>
                ))}
            </div>
        </div>
    )
}