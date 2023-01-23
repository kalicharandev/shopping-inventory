import './App.css'
import Productslist from './ProductsList'

function ProductsRow({products}){

  const listItems = products.map(product =>
    <li>
      {product.name} <b>price is</b> {product.price}
    </li>
  );  


return(
<div className='product-list'>
  
  <Productslist listItems={listItems}/>
  
</div>

)
};

 
export default ProductsRow;