import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useFetchSGC from '../hooks/useFetchSGC';


const useStyles = makeStyles({
   table: {
      minWidth: 650,
   },
});

const EventosSismicos = () => {

   const classes = useStyles();
   const { loading, data } = useFetchSGC();

   useEffect(() => {
      console.log(data);
   }, [data]);

   return (
      <>
         {loading && <h1>Cargando datos...</h1>}
         {/* <ol>
         {data.map((row) => (
            <li key={row.id}>{row.place}  {row.mag} {row.utc} </li>
            // <TableRow key={row.id}>
            //    <TableCell component="th" scope="row">{row.place}</TableCell>
            //    <TableCell align="right">{row.mag}</TableCell>
            //    <TableCell align="right">{row.utc}</TableCell>
            // </TableRow>
         ))}
         </ol> */}
         <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Place</TableCell>
                     <TableCell align="right">Mag</TableCell>
                     <TableCell align="right">Local Time</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {data.map((row) => (
                     <TableRow key={row.id}>
                        <TableCell component="th" scope="row">{row.place}</TableCell>
                        <TableCell align="right">{row.mag}</TableCell>
                        <TableCell align="right">{row.utc}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer> 
      </>
   )
}

export default EventosSismicos;
