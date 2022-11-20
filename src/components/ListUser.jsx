import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

// Componente para listar los usuarios recevidos de la Api

const ListUser = () =>{

    //Para establecer la navegacion entre las distintas rutas establecidas en main
    const navigate = useNavigate()
    
    //Usuarios recogidos de la api
    const { users } = useUser()

    return(
    <> 
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
        >
            Listado Usuarios
        </Typography>
        
        {/* Tabla de los usuarios */}

        <TableContainer>
         <Table 
            sx={{ minWidth: 700 }} 
            aria-label="customized table" 
          >
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((users) => (
                    
                    <TableRow key={users.name}>
                    <TableCell>{users.name}</TableCell>
                    <TableCell>{users.username}</TableCell>
                    <TableCell>{users.email}</TableCell>
                    <TableCell>{users.phone}</TableCell>
                    <TableCell><Button 
                        onClick={()=> navigate(`/usuario/${users.id}`)}
                    >
                        Ver Datos
                    </Button>
                    </TableCell>
                    
                </TableRow>
                ))}
            </TableBody>
         </Table>
      </TableContainer>
    </>   
    )
}

export default ListUser



    