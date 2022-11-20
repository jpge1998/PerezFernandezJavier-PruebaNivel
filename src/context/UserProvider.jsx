import { useState, useEffect, createContext } from "react";

/* Almacenar propiedades context */
const UserContext = createContext()

const UserProvider = ({children}) => {
    
    /* Filtrado por la eleccion del usuario */
    const [filterUser, setFilterUser] = useState('')

    /* Añadir los usuarios  según los filtros introrducidos*/
    const [users, setUsers] = useState([])

    /* Tabla de todos usuarios en total*/
    const [tablaUser, setTableUser] = useState([])
    
    //Recoger los datos introcidos por pantalla en el input de filtrar
    const changeFilter = e => {
        setFilterUser(e.target.value)
        filter(e.target.value)
    }

    //Filtrar los usuarios segun lo introducido en el input
    const filter = (termSearch)=>{
        var resultSearch = tablaUser.filter(element =>{
            if(element.name.toString().toLowerCase().includes(termSearch.toLowerCase()) ||
               element.username.toString().toLowerCase().includes(termSearch.toLowerCase()) ||
               element.email.toString().toLowerCase().includes(termSearch.toLowerCase()) ||
               element.phone.toString().toLowerCase().includes(termSearch.toLowerCase())
            ){
                return element;
            }
        });
        
        setUsers(resultSearch)
    }

    /* Recoger los datos de aquellos usuarios almacenados en la api proporcionada */
    useEffect(()=>{

        const consultApi = async() =>{
            const URL = "https://jsonplaceholder.typicode.com/users"
            const response = await fetch(URL)
            const data = await response.json()
            setUsers(data)
            setTableUser(data)
        }

        consultApi();

    }, [])

    return(
        <UserContext.Provider  
            value={{
                filterUser,
                changeFilter,
                users
            }}
        >
           {children}
        </UserContext.Provider>
    )
}

export{
    UserProvider
}

export default UserContext