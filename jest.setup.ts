// 导入本地图片资源
import product1Img from "../assets/products/product1.png";
import product2Img from "../assets/products/product2.png";
import product3Img from "../assets/products/product3.png";
import product4Img from "../assets/products/product4.png";
import product5Img from "../assets/products/product5.png";
import product6Img from "../assets/products/product6.png";

// 商品数据数组，image字段为图片变量
const products = [
  {
    id: 1,
    name: "现代极简蓝牙音箱",
    price: 399,
    image: product1Img,
    alt: "现代极简风格的蓝牙音箱，适合家居摆设",
    category: "音响设备",
  },
  {
    id: 2,
    name: "北欧风格香薰加湿器",
    price: 289,
    image: product2Img,
    alt: "北欧设计的香薰加湿器，提升空间氛围",
    category: "生活家电",
  },
  {
    id: 3,
    name: "可调光极简台灯",
    price: 169,
    image: product3Img,
    alt: "简约风格的可调光LED台灯，适合办公与卧室",
    category: "照明灯具",
  },
  {
    id: 4,
    name: "日式陶瓷手工茶具",
    price: 249,
    image: product4Img,
    alt: "日式风格陶瓷茶具套装，手工制作，质感出众",
    category: "餐厨用品",
  },
  {
    id: 5,
    name: "极简主义墙面时钟",
    price: 159,
    image: product5Img,
    alt: "黑白极简风墙面时钟，静音设计",
    category: "家居装饰",
  },
  {
    id: 6,
    name: "文艺风格皮革笔记本",
    price: 99,
    image: product6Img,
    alt: "复古皮革封面的手帐笔记本，文艺气质十足",
    category: "文具文创",
  },
];

export default products;
