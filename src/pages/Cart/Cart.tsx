import { useEffect } from "react";
import { useCartStore } from "../../store/cartStore"; // ✅ 正确路径

const Cart = () => {
  useEffect(() => {
    document.title = "我的购物车 - Rylan 的小店";
  }, []);

  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">我的购物车</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">购物车为空</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-300 dark:divide-gray-700 mb-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-pink-600">¥{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    移除
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-right font-semibold text-lg">
              总价：<span className="text-pink-600">¥{totalPrice}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
