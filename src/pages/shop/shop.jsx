import React, {useState} from 'react';
import './shop.scss';

import SHOP_DATA from './shopdata';

import CollectionPreview from '../../components/preview-collection/preview-collection';

const ShopPage = () => {
    const [collections, setcollections] = useState(SHOP_DATA);
    return (
        <div className='shop-page'>
          {
            collections.map(({id, ...otherProps}) => (
            <CollectionPreview key={id}{...otherProps}/>
            ))
          }  
        </div>
    )
}

export default ShopPage;
