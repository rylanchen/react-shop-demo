
# react-shop-demo

这是一个基于 React 和 Vite 的示范项目，用于快速展示前端技能和项目经验。

项目包含基础的页面结构、样式和组件示范，适合初级前端开发者练手使用。

目前处于初始阶段，后续会继续完善功能和细节。
=======
# 🛍️ Rylan 的小店 - React 电商前端项目

一个美观简洁的多页面电商前端项目，基于 **React + Vite + TailwindCSS + Zustand** 打造，支持暗色模式、状态管理、响应式设计、基础路由及动画体验。

> 🎯 适合作为前端简历作品集、个人学习项目或中型 React 模板起点。

---

## ✨ 功能亮点

- ✅ 首页商品展示
- ✅ 商品详情页 + 加入购物车
- ✅ Zustand 状态管理
- ✅ 购物车列表 + 删除功能
- ✅ 响应式设计，移动端适配
- ✅ 深色模式切换（`class` 控制）
- ✅ 路由导航：React Router
- ✅ 动画体验：页面切换动画
- ✅ TailwindCSS 高级主题配置
- ✅ 项目已打包优化，结构清晰

---

## 🔧 技术栈

- **React 18**
- **Vite 4**
- **TypeScript**
- **TailwindCSS**
- **Zustand**
- **React Router DOM**
- **Lucide Icons**
- **模块化项目结构**

---

## 📦 安装与运行

```bash
# 克隆项目
git clone https://github.com/your-username/react-shop-demo.git
cd react-shop-demo

# 安装依赖
npm install

# 启动开发环境
npm run dev
🚀 构建 & 部署
bash
复制
编辑
# 构建生产环境
npm run build
构建产物位于 dist/ 文件夹。

🌐 GitHub Pages 部署
编辑 vite.config.ts 中的 base：

ts
复制
编辑
export default defineConfig({
  base: '/react-shop-demo/', // 👈 与 GitHub 仓库名一致
});
构建并复制 404：

bash
复制
编辑
npm run build
cp dist/index.html dist/404.html
推荐使用 gh-pages 工具或 GitHub Actions 自动部署。

📁 项目结构
bash
复制
编辑
src/
├── assets/           # 本地图像资源（可替换为图床链接）
├── components/       # 复用组件（Header, Footer 等）
├── data/             # 商品数据（JSON）
├── pages/            # 页面模块（Home, Detail, Cart, Contact）
├── store/            # Zustand 状态管理
├── App.tsx           # 路由入口
├── main.tsx          # 应用入口
🖼️ 预览截图（建议上传 GitHub）
可添加首页、详情页、购物车的 UI 效果图，如：

screenshots/home.png

screenshots/detail.png

screenshots/cart.png

💡 适用场景
前端简历项目 / 学习练手

状态管理 + 路由整合实践

React Router + Tailwind 快速模板

适合部署展示 / 作为演示项目

📄 License
本项目基于 MIT 开源协议发布，欢迎学习与参考，禁止直接商用。

项目作者：@Rylan

