import { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";

const Home = () => {
  useEffect(() => {
    document.title = "Rylan 的小店｜精选好物";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          精选好物推荐
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.alt ?? product.name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-pink-600 font-medium mt-2">¥{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
