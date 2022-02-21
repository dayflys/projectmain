import './sebuProducts.css';
import Product from './productData.js';

function sebuProducts(){
    const imageUrl1 = Product.imageUrl1;

    return(
    <div className='body'>
        <div className='banner'>
          <img src='images/logobackblack.png' />
        </div>
        <div className='image-box'>
            <img src={`${imageUrl1}`} />
        </div>
        <div className='span-box'>
            <span>test page</span>
        </div>
    </div>
    );
}

export default sebuProducts;