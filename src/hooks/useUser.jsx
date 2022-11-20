import { useContext } from "react";
import Users from "../context/UserProvider";

//Hooks para coger las propiedades de nuestro context(usuarioProvider)
const useUser = () => {
  return useContext(Users);
};

export default useUser;
