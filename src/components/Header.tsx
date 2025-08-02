import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const cart = useCartStore((state) => state.cart); // 这里是 cart，不是 cartItems
  const itemCount = cart?.length ?? 0;
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-4 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-pink-600">
          Rylan的小店
        </Link>

        {/* 按钮组 (移动端) */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300"
            aria-label="切换主题"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300"
            aria-label="切换菜单"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-pink-600">
            首页
          </Link>
          <Link to="/cart" className="hover:text-pink-600">
            购物车 <span className="ml-1 text-pink-500">({itemCount})</span>
          </Link>
          <Link to="/contact" className="hover:text-pink-600">
            联系我们
          </Link>
          <button onClick={toggleTheme} className="ml-2" aria-label="切换主题">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-2">
          <nav className="flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-200">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-600"
            >
              首页
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-600"
            >
              购物车 <span className="text-pink-500">({itemCount})</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-600"
            >
              联系我们
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
