import { IUser } from "../../Interfaces"

let saveLoginUser = (user: IUser) => ({ type: "LOGIN_USER", user });

export { saveLoginUser };
