import { Outlet } from "react-router-dom";
import { UserProvider } from "../context/UserProvider";

//Componente donde se muestran todos los componentes establecidos en las rutas
function App() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}
export default App;
