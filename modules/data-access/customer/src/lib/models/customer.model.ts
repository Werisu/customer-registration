export type Customers = Customer[];

export type Customer = {
  createdAt: string;
  name: string;
  avatar: string;
  gender: string;
  maritalStatus: string;
  cpf: string;
  rg: string;
  email: string;
  phone: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  id: string;
};

export type CustomerData = Omit<Customer, 'id'>;
