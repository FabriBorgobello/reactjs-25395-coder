// console.log("Hola mundo");

// const animales = ["gato", "perro", "vaca"];

// const getAnimales = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Se pudrió todo")), 3000);
//   });
// };

// THEN / CATCH
// getAnimales()
//   .then((result) => console.log(result))
//   .catch((error) => console.error("Ha habido un error:", error))
//   .finally(() => console.log("Terminamos con el manejo de nuestra promesa"));

// ASYNC / AWAIT
// const getDataWithAsyncAwait = async () => {
//   try {
//     const result = await getAnimales();
//     console.log(result);
//   } catch (error) {
//     console.error("Ha habido un error:", error);
//   }
// };
// getDataWithAsyncAwait();
