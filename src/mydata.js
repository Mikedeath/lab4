import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class MyData extends Component{

    
    constructor(props){
        super(props);
        this.state={
        clase1: 'Clase 1',
        clase2: 'Clase 2',
        clase3: 'Clase 3',
         //Nombre de clase cambiada
        clase1_changed: 'Clase 1',
        clase2_changed: 'Clase 2',
        clase3_changed: 'Clase 3',
        //Filas de Notas del table Para parcial 1 
        //Parcial 1
        notaP1C1: 0,
        notaP1C2: 0,
        notaP1C3: 0,

           //Filas de Notas del table Para parcial 1 cambiadas
        //Parcial 1
        notaP1C1_changed: 0,
        notaP1C2_changed: 0,
        notaP1C3_changed: 0,

};
}

    change_states = ()=> {
        this.setState = ({
            // Clases
            clase1_changed: this.clase1,
            clase2_changed: this.clase2,
            clase3_changed: this.clase3,
            
            //Parcial 1
            notaP1C1_changed: this.notaP1C1.value,
            notaP1C2_changed: this.notaP1C2.value,
            notaP1C3_changed: this.notaP1C3.value

        })
    }


    render(){

        return(
            <div>
                <TextField  placeholder="Clase 1" onChange = {this.changed_C1}> </TextField>    
                <TextField  placeholder=" Nota Parcial 1" onChange = {this.changed_note_C1P1} > </TextField> 
                <br/>
                <TextField  placeholder="Clase 2" onChange = {this.changed_C2} > </TextField>         
                <TextField  placeholder=" Nota Parcial 1" onChange = {this.changed_note_C2P1}> </TextField>              
                <br/>
                <TextField  placeholder="Clase 3" onChange = {this.changed_C3} > </TextField>                  
                <TextField  placeholder="Nota Parcial 1" onChange = {this.changed_note_C3P1} > </TextField>          
                <br/>

                <br/>
                <Button variant="contained" color="primary" align="right" onClick={this.change_states}>
                Continuar
                </Button>

                <TableHead>
                    <TableRow>
                        <TableCell align="right">Nombre de Clase</TableCell>
                        <TableCell align="right">Nota Parcial 1</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">{this.state.clase1_changed}</TableCell>
                        <TableCell align="right">{this.state.notaP1C1_changed}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{this.state.clase2_changed}</TableCell>
                        <TableCell align="right">{this.state.notaP1C2_changed}</TableCell>
                
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{this.state.clase3_changed}</TableCell>
                        <TableCell align="right">{this.state.notaP1C3_changed}</TableCell>
                    </TableRow>
                </TableBody>
            </div> 
          
        );
    }

    //nombre de clase
   changed_C1 = (e)=> {
       this.setState({clase1: e.target.value});
    }
    changed_C2 = (e)=> {
        this.setState({clase2: e.target.value});
    }
    changed_C3 = (e)=> {
        this.setState({clase3: e.target.value});
    }

    //Clases 1 parcial nota
   changed_note_C1P1 = (e)=> {
        this.setState({notaP1C1: e.target.value});
    }
   changed_note_C2P1 = (e)=> {
        this.setState({notaP1C2: e.target.value});
    }
   changed_note_C3P1 = (e)=> {
        this.setState({notaP1C3: e.target.value});
    }



}
export default MyData;


