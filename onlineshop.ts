
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  type Cart = Product[];
  
  interface Customer {
    id: number;
    name: string;
    email: string;
  }
  
  type Order = {
    mycustomer: Customer;
    mycart: Cart;
  };
  
  
  const mycustomer: Customer = { id: 1, name: "John Doe", email: "john@example.com" };
  const mycart: Cart = [
    { id: 1, name: "shoes", price: 10, category: "foot wear" },
    { id: 2, name: "glasses", price: 20, category: "sunglasses" },
    { id: 3, name: "iphone", price: 30, category: "electronics" },
  ];
  function calculateTotalPrice(mycart: Cart): number {
    let totalPrice = 0;
    for (const product of mycart) {
      totalPrice += product.price;
    }
    return totalPrice;
  }
  const myorder:Order= {mycustomer,mycart}
  const kullqeemat= calculateTotalPrice(myorder.mycart)
  console.log(`The total price in the cart is ${kullqeemat}`);