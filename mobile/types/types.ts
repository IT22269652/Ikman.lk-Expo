export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  image: string;
}

export interface User {
  username: string;
  password: string;
  name: string;
  contactNumber: string;
  address: string;
  email: string;
}