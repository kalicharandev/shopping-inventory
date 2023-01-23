import './App.css';
function ProductssList(){
  let ProductsList = "";

  const Products= [
   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
 ];
 for(let i = 0; i < Products.length; i++) {
 
 ProductsList += <li>Products[i].name  Products[i].price</li>
 
}
return(
<div className='Products-list'>
    {ProductsList}
</div>

)

}

export default ProductssList;
