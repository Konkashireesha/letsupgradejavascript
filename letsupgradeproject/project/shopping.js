let products = [
    {
      id: 1,
      name: "white kurtha",
      size: "m",
      color: "white",
      price: 2200,
      image: "product1.jpg",
      description: "comfortable white kurtha",
    },
    {
      id: 2,
      name: "rose top",
      size: "L",
      color: "pink",
      price: 1500,
      image: "product2.jpg",
      description: "soothing rose top ",
    },
  
    {
      id: 3,
      name: "blue long top",
      size: "S",
      color: "blue",
      price: 1300,
      image: "product3.jpg",
      description: "long blue kurtha",
    },
  
    {
      id: 4,
      name: "blue check top",
      size: "M",
      color: "blue",
      price: 1000,
      image: "product4.jpg",
      description: "long top",
    },
  
    {
      id: 5,
      name: "yellow  long top",
      size: "S",
      color: "yellow",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "long Dress",
      size: "M",
      color: "pink",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking  Dress",
    },
   
      {
        id: 7,
        name: "blue t shirt",
        size: "S",
        color: "blue",
        price: 1000,
        image: "product7.jpg",
        description: "stylish ",
      },
      {
        id: 8,
        name: "grey t shirt",
        size: "S",
        color: "grey",
        price: 1800,
        image: "product8.jpg",
        description: "comfortable",
      },
      {
        id: 9,
        name: "black and white checked shirt",
        size: "S",
        color: "black and white",
        price: 1300,
        image: "product9.jpg",
        description: "Good looking shirt ",
      },
      {
        id: 10,
        name: "blue sweatshirt",
        size:"m",
        color: "lavender",
        price: 2300,
        image: "product10.jpg",
        description: "warm ",
      },
      {
        id: 11,
        name: "brown t shirt",
        size: "S",
        color: "brown",
        price: 1300,
        image: "product11.jpg",
        description: "comfortable Tshirt",
      },
      {
        id: 12,
        name: "white t shirt",
        size: "S",
        color: "white",
        price: 500,
        image: "product12.jpg",
        description: "comfortable Tshirt",
      },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="D:\productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
 
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    let pro = getProductByID(products, id);
    cart.push(pro);
    displayProducts(cart, "cart");
  }
  
  function removeFromCart(id) {
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }
  // function price(searchValue){
  //   let user=products.filter(function(product,maximumprice){
  //     let string=product.price;
  //     return string.indexof(searchValue);
  //   });
  //  displayProducts(user);
  //  console.log(user);
  // }
  
  function searchprice(searchValue) {
    let searchedprice = products.filter(function (product, index) {
       return product.price!=-1;
    });
    displayProducts(searchedprice);
  }
  function quantity(id){ function addToCart(id) {
    let pro = getProductByID(products, id);
    cart.push(pro);
    displayProducts(cart, "cart");
  }
   return addToCart(value) ;
    
  }
