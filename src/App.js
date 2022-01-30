import "./App.css";
import React, { useState } from "react";
import Product from "./Components/Product";
import Search from "./Components/Search";

export default function App() {
  const productLists = [
    {
      id: 1,
      title: "Dove sampoo",
      imageLink: 
        "https://m.media-https://5.imimg.com/data5/GF/SX/MY-27273173/dove-shampoo-500x500.jpg",
    },
    {
      id: 2,
      title: "Lux Soap",
      image:
        "https://www.jiomart.com/images/product/600x600/490002473/lux-international-creamy-perfection-bar-soap-125-g-2-20210111.jpg",
    },
    {
      id: 3,
      title: "Secret deodorant",
      image:
        "https://images.ctfassets.net/w9l9p5870v5o/16NnQLmYgLdwM2ZBEW0lQz/9699b12f318dfdedf1ff01456fab6e51/00037000500315_C1N1_NA.png",
    },
    {
      id: 4,
      title: "wheat",
      image:
        "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/wheat_3553D7E0-FAA2-11E3-BF7E005056A302E6.jpg",
    },
  ]
  const [products, setProducts] = useState(productLists);

  const handleSearch = (searchTerm) => {
    if(searchTerm === '') {
      setProducts(productLists)
      return;
    }
    const searchResult = products.filter((item) =>
      item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setProducts(searchResult);
  };

  return (
    <>
      <div className="text-center">
        <Search className="text-center" handleSearch={handleSearch} />
      </div>
      <div className="container my-3">
        <h1 className="text-center">Jio Mart Products</h1>
        {products.map((product) => {
          return(
              <div classname="row">
                <div className="col-ml-3">
                  <Product title={product.title} image={product.image} />
                </div>
              </div>
            )
        })}
      </div>
    </>
  );
}
