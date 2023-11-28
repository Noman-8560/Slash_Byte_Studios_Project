// // src/components/UserList.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UserForm from "./UserForm";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/users/")
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   const handleUserAdded = () => {
//     axios
//       .get("http://localhost:8000/api/users/")
//       .then((response) => {
//         setUsers(response.data);
//         handleCloseDialog();
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   };

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleOpenDialog} style={{justifyContent:'end'}}>
//         Add User
//       </Button>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Role</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent>
//           <UserForm onUserAdded={handleUserAdded} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default UserList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
} from "@mui/material";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserAdded = () => {
    axios
      .get("http://localhost:8000/api/users/")
      .then((response) => {
        setUsers(response.data);
        handleCloseDialog();
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{marginTop:'70px'}}>
      <Grid item xs={8}>
        <Button variant="outlined" onClick={handleOpenDialog} style={{marginBottom:'20px'}} justifyContent="flex-end">
          Add User
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Add User</DialogTitle>
          <DialogContent>
            <UserForm onUserAdded={handleUserAdded} />
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default UserList;
