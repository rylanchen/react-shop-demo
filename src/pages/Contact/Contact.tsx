import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "联系我们 - Rylan 的小店";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">联系我们</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          如果你有任何问题或建议，请随时通过以下表单联系我们。
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">姓名</label>
            <input
              type="text"
              placeholder="请输入姓名"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">邮箱</label>
            <input
              type="email"
              placeholder="请输入邮箱"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-medium">消息</label>
            <textarea
              placeholder="请输入你的留言..."
              rows={5}
              className="border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
            >
              发送消息
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
