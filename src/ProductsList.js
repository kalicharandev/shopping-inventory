import './App.css';


function ProductsList({products}){

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.name}
    </li>
  );  


return(
<div className='product-list'>
  
  <ul>{listItems}</ul>
  
</div>

)
};


export default ProductsList;
