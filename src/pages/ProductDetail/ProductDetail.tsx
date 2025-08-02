import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import products from "../../data/products";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Rylan 的小店`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-800 dark:text-gray-100">
        <p className="text-lg">找不到该商品。</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.alt ?? product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl"
          loading="lazy"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-pink-600 text-xl font-semibold mb-6">¥{product.price}</p>
          <p className="mb-6 text-gray-600 dark:text-gray-300">商品类别：{product.category}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition"
          >
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
