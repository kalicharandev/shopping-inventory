import './App.css';
export default function productsList(){

  const Products = [
   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
 ];
 let productsList = "";
 for(let i = 0; i < Products.length; i++) {
 
 productsList += Products[i].name + ":" + Products[i].price
 
}
return(
<div className='product-list'>
  <ul>
    <li>
    {productsList}
    </li>
    </ul>
</div>

)

}
