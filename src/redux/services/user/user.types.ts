export interface RegisterUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  mobile: string;
}

export interface InitialStateUser {
  isLoading: boolean;
  user: User | null;
  error: any;
  data: userToken | any;
  password?: string | null;
  image?: string | null;
  updated_profile?: string | null;
}

export interface userToken {
  id: string;
  token: string;
}

export interface User {
  data: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    mobile: string;
    id: string;
    deleteRequestDate: any;
    active: boolean;
    isAccountVerified: boolean;
    isBlocked: boolean;
    loggedInAfterRequest: boolean;
    profilePhoto: string;
    role?: string;
  };
  message: string;
  status: string;
}
