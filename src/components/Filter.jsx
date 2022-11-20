import { FormControl} from "@mui/material";
import Input from '@mui/material/Input';
import useUser from "../hooks/useUser";

//Componente Formulario donde encontramos los componentes necesarios para filtrar los usuarios
const Filter = () =>{

    //Campos para filtrar segun lo introducido por el usuario
    const { filterUser, changeFilter } = useUser()
    
    return(

        <form>

            <FormControl fullWidth>

                <Input  type="text" placeholder="Filtra Usuario" value={filterUser} onChange={changeFilter}></Input>
          
            </FormControl>

        </form>
    )
}

export default Filter