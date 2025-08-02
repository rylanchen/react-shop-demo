import React from 'react';

const bgImage = new URL('../../assets/bg.jpg', import.meta.url).href;

const Auth = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
         style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">登录 / 注册</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">邮箱</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-white/70 dark:bg-gray-800 border"
              placeholder="输入邮箱"
            />
          </div>
          <div>
            <label className="block mb-1">密码</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-white/70 dark:bg-gray-800 border"
              placeholder="输入密码"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded hover:bg-indigo-700 transition"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;