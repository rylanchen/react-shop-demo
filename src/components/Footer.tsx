const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* 品牌信息 */}
        <div>
          <h2 className="text-xl font-bold mb-2">Rylan的小店</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            提供优质商品，打造舒适的购物体验。
          </p>
        </div>

        {/* 快速链接 */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-gray-600 dark:text-gray-300">快速链接</span>
          <a href="/" className="hover:underline">首页</a>
          <a href="/cart" className="hover:underline">购物车</a>
          <a href="/contact" className="hover:underline">联系我们</a>
        </div>

        {/* 联系方式 */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-gray-600 dark:text-gray-300">联系我们</span>
          <p>邮箱：support@rylanstore.com</p>
          <p>电话：+86 123-456-7890</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 max-w-7xl mx-auto">
        © {new Date().getFullYear()} Rylan的小店. 保留所有权利。
      </div>
    </footer>
  );
};

export default Footer;
