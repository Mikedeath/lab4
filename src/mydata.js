import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class MyData extends Component{

    
    constructor(props){
        super(props);

       
    }

    Table= ()=> {

        const styles = theme => ({
            root: {
              width: '100%',
              marginTop: theme.spacing.unit * 5,
              overflowX: 'auto',
            },
            table: {
              minWidth: 500,
            },
          });
          
          let id = 0;
          function createData(name, parcial1, parcial2) {
            id += 1;
            return { name, parcial1, parcial2 };
          }

        return (
            <div>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Nombre de Clase</TableCell>
                  <TableCell align="right">Parcial 1</TableCell>
                  <TableCell align="right">Parcial 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              </TableBody>
            </Table>
          </Paper>
          </div>
        );
      }

    handleClick = ()=> {

        this.Table();
    }

    render(){

        return(
            <div>
                <TextField   placeholder="Clase 1"> </TextField>    
                <TextField  placeholder="Parcial 1 Nota"> </TextField> 
                <TextField  placeholder="Parcial 2 Nota"> </TextField> 
                <br/>
                <TextField   placeholder="Clase 2"> </TextField>  
                <TextField  placeholder="Parcial 1 Nota"> </TextField>       
                <TextField  placeholder="Parcial 2 Nota"> </TextField> 
                <br/>
                <TextField   placeholder="Clase 3"> </TextField>    
                <TextField  placeholder="Parcial 1 Nota"> </TextField> 
                <TextField  placeholder="Parcial 2 Nota"> </TextField> 
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={ this.handleClick}>
                    Guardar
                </Button>

            

            </div>    
        );
    }

}

export default MyData;



