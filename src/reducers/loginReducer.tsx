import { IUser } from "../Interfaces"

const initialState: IUser = { email: '', password: '' };

const saveLoginUser = (state = initialState, action: any) => {
  const { type, user: { email, password } = initialState } = action
  switch (type) {
    case "LOGIN_USER":
      return { ...state, email, password }
    default:
      return state;
  }
};

export { saveLoginUser };
