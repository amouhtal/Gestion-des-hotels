import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Adress
{
  _id : String;
  adresse1 : String;
  adresse2 : String;
  ville : String;
}

interface Client
{
  _id : Number;
  nomDuContact: String;
  societe: String;
  numIce: String;
  telephone: String;
  email: String;
  adresse: Adress;
  webSiteUrl : String;
}




export default function ClientsList() {
  // let rows :Client[] = [];

  const [rows, setRows] = useState<Client[]>([])

  useEffect(() => {
    Axios.get("http://localhost:3300/Client/all")
    .then(res => { 
      setRows(res.data);
    })
    .catch(err => console.log(err));  
  },[]);
 
  
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>  Nom Du Contact</StyledTableCell>
            <StyledTableCell align="right">Societe</StyledTableCell>
            <StyledTableCell align="right">ICE</StyledTableCell>
            <StyledTableCell align="right">Telephone</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Adresse</StyledTableCell>
            <StyledTableCell align="right">URL</StyledTableCell>
            <StyledTableCell align="right">Suprimmer <DeleteForeverIcon /></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (

            <StyledTableRow key={row._id.toString()}>
              <StyledTableCell component="th" scope="row">
               <Link href={`http://localhost:3000/client/update/${row._id}`}>
                 <a>{row?.nomDuContact}</a>
                 </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{row.societe}</StyledTableCell>
              <StyledTableCell align="right">{row.numIce}</StyledTableCell>
              <StyledTableCell align="right">{row.telephone}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.adresse.adresse1}</StyledTableCell>
              <StyledTableCell align="right">{row.webSiteUrl}</StyledTableCell>
              <Button variant="outlined" color="error">
                Suprimmer
              </Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}