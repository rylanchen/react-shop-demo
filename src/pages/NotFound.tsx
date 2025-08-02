import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-4 text-gray-800 dark:text-gray-100">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">糟糕，页面找不到了。</p>
      <Link
        to="/"
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
