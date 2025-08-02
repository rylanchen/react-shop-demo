import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";

const mockProduct = {
  id: 1,
  name: "高质感T恤",
  image: "/assets/product1.jpg",
  price: 199,
};

test("renders product card", () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText(/高质感T恤/i)).toBeInTheDocument();
  expect(screen.getByText(/199/)).toBeInTheDocument();
});
