export interface IUser {
  id: number;
  // name: string;
  // username: string;
  // email: string;
  // phone: string;
  // website: string;
  // address: IAddress;
  // company: ICompany;
  userId: number;
  title: string;
  body: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IGeo {
  lat: number;
  lng: number;
}

export interface ICompany {
  name: string;
  catchpharse: string;
  bs: string;
}
