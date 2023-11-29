const products = [
    {
      id: "1",
      name: "Ferrari",
      price: 1000,
      category: "auto juguete",
      img: "adjuntar imagen",
      stock: 25,
      description: "Auto formula 1 de 12cm, perfecto para tus carreras",
    },
    {
      id: "2",
      name: "chomba",
      price: 300,
      category: "chomba",
      img: "adjuntar imagen",
      stock: 50,
      descripcion:
        "Disfruta la nueva chomba de Ferrari para estar a la moda junto a tus amigos",
    },
    {
      id: "3",
      name: "perfume",
      price: 200,
      category: "higiene",
      img: "adjuntar imagen",
      stock: 20,
      descripcion: "fragancia perfecta para afrontar tus días al máximo",
    },
    {
      id: "4",
      name: "Ferrari auto",
      price: 100000,
      category: "auto",
      img: "adjuntar imagen",
      stock: 2,
      description: "Auto formula 1, perfecto para tus carreras",
    },
    {
      id: "5",
      name: "Ferrari",
      price: "250",
      category: "Remera",
      img: "adjuntar imagen",
      stock: 30,
      description: "Remera Temporada 2023",
    },
    {
      id: "6",
      name: "Ferrari",
      price: "350",
      category: "Mochila",
      img: "adjuntar imagen",
      stock: 10,
      description: "Mochila para poder transportar tus cosas mas rapido",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category));
      }, 500);
    });
  };

  