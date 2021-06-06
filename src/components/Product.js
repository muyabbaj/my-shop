import React from 'react'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
const Product = () => {
    const products=useSelector((state)=>state.allProduct.products);
    const renderList=products.map(product=>{
        const {id,title,price,description,category,image}=product;
        return(
            <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">${price}</div>
                  <div className="meta">{category}</div>
                  {/* <div className="meta"><p>{description}</p></div> */}
                </div>
              </div>
            </div>
            </Link>
        </div>
        )
    })
    return (
      <>{renderList}</>
    )
}

export default Product
