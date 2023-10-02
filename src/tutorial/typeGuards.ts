interface IUser {
  id: number;
  name: string;
  gender: string;
  image: string;
  age: number;
}

interface IAdmin extends IUser {
  token: string;
  addNewUser: () => void;
}

const isAdminUser = (user: unknown): user is IAdmin => {
  if (user !== null && typeof user === 'object') {
    return 'token' in user;
  }
  return false;
};

const isRegularUser = (user: unknown): user is IUser => {
  if (user !== null && typeof user === 'object') {
    return 'token'! in user;
  }
  return false;
};

const fetchUser = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users/1');
    
    // ! Note the use of unknown type because we don't know yet what type it is
    const user: unknown = response.json(); 

    // Type guard
    if (isAdminUser(user)) {
      return user.token;
    }
    // Type guard
    if (isRegularUser(user)) {
      return user.name;
    }
  } catch (error) {
    console.log(error);
  }
};