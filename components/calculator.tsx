import styles from '../styles/calculator.module.scss';
import { createTheme } from '@material-ui/core/styles'; 
import { ThemeProvider } from '@material-ui/core/styles'; 
import { red, indigo } from '@material-ui/core/colors';
import { Card, CardActions, CardContent, Button, ButtonGroup } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import DeleteIcon from '@material-ui/icons/Delete';
import DragHandleIcon from '@material-ui/icons/DragHandle';


const theme = createTheme({
    palette: {
      primary: {
        light: red['A400'],
        main: red[900],
      },
      secondary: {
        main: indigo[800],
      },
    },
  });

export default function Calculator() {
    return (
        <div className={styles.calculator}>

            <ThemeProvider theme={theme}>
            <Card>
                <CardContent>
                    <CardActions>
                        <ButtonGroup orientation='vertical' variant="contained" color="primary">
                            <Button>7</Button>
                            <Button>4</Button>
                            <Button>1</Button>
                            <Button>0</Button>
                        </ButtonGroup>

                        <ButtonGroup orientation='vertical' variant="contained" color="primary">
                            <Button>8</Button>
                            <Button>5</Button>
                            <Button>2</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="contained" color="primary">
                            
                            
                            <Button>3</Button>
                            
                            
                            <Button>6</Button>
                            
                            
                            <Button>9</Button>
                            
                        </ButtonGroup>
                        <ButtonGroup orientation='vertical' variant="contained" color="secondary">
                            <Button>+</Button>
                            <Button>-</Button>
                            <Button>÷</Button>
                            <Button>×</Button>
                            <Button>√</Button>
                            <Button>^</Button>
                            <Button>.</Button>
                        </ButtonGroup>
                        <ButtonGroup color='primary'>
                            <Button>
                                <BackspaceIcon/>
                            </Button>
                            <Button>
                                <DeleteIcon/>
                            </Button>
                            <Button>
                                <DragHandleIcon/>
                            </Button>
                            <Button>(</Button>
                            <Button>)</Button>
                        </ButtonGroup>
                    </CardActions>
                </CardContent>
            </Card>
            </ThemeProvider>
        </div>
    );
}