import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>  (
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />  
        <div className='content'>
            <h1 className='content_title'>{title.toUpperCase()}</h1>
            <span className='content_subtitle'>SHOP NOW!</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
