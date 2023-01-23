import React from 'react'


export default function Productslist(props){

    return(
      <div className='product'>
        <ul>
        {props.listItems}
      </ul>
      </div>
    )
  
    
    
  }