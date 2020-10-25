import React from 'react';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size}) =>  (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />  
        <div className='content'>
            <h1 className='content_title'>{title.toUpperCase()}</h1>
            <span className='content_subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;
