import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


function StyledTable(props) {
  const propa = props.options.map((option, id) => {
    if (!option) return;
    return (
      <TableCell key={id} sx={{ fontWeight: "bold" }} align="center">
        {option}
      </TableCell>
    );
  });

  
  let edit;
  if (props.options.includes("Edit")) {
    edit = (
      <TableCell align="center">
        <Button variant={"contained"} size={"large"}>
          EDIT
        </Button>
      </TableCell>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ p: 8 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell sx={{ fontWeight: "bold" }} align="center">
              {col1}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              {col2}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              {col3}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              {btn1}
            </TableCell> */}
            {propa}
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              DELETE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data?.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {user.name ? user.name : user.title}
              </TableCell>
              <TableCell align="center">{user.email ? user.email : user.price}</TableCell>
              <TableCell align="center">{user.phone ? user.phone : user.date}</TableCell>
              {/*  */}
              {edit}
              <TableCell align="center">
                <Button variant={"contained"} color={"error"}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StyledTable;
