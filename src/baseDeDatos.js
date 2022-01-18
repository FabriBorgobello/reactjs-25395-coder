export const PRODUCTS = [
  {
    id: 0,
    name: "Zapatillas",
    description: "Unas zapatillas muy copadas",
    price: 15000,
    img: "https://picsum.photos/200",
  },
  {
    id: 1,
    name: "Mochila",
    description: "Una mochila muy copada",
    price: 1000,
    img: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Reloj",
    description: "Un reloj muy copado",
    price: 150000,
    img: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Sandalias",
    description: "Unas sandalias muy copadas",
    price: 15000,
    img: "https://picsum.photos/200",
  },
];

export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTS), 5000);
  });
}
