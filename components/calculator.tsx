import styles from '../styles/calculator.module.scss';
import React from 'react';
import { createTheme } from '@material-ui/core/styles'; 
import { ThemeProvider } from '@material-ui/core/styles'; 
import { teal, pink } from '@material-ui/core/colors';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab'
import { useState } from 'react'; 
import BackspaceIcon from '@material-ui/icons/Backspace';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';


const theme = createTheme({
    palette: {
      primary: {
        light: teal[600],
        main: teal[800],
      },
      secondary: {
        main: pink['A200'],
      },
    },
  });


export default function Calculator() {

    const [expression, setExpression] = useState('');
    const [symbol, setSymbol] = useState('');
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    function math() {

        setExpression(number1 + symbol + number2 + '=')

        if (symbol == '+') {
            const numberOne = Number(number1);
            const numberTwo = Number(number2);

            const calculation = numberOne + numberTwo;

            setResult(Number(calculation.toFixed(2)));

            
        } else if (symbol == '-') {
            const numberOne = Number(number1);
            const numberTwo = Number(number2);

            const calculation = numberOne - numberTwo;

            setResult(Number(calculation.toFixed(2)));

            
        } else if (symbol == '×') {
            const numberOne = Number(number1);
            const numberTwo = Number(number2);

            const calculation = numberOne * numberTwo;

            setResult(Number(calculation.toFixed(2)));

            
        } else if (symbol == '÷') {
            const numberOne = Number(number1);
            const numberTwo = Number(number2);

            const calculation = numberOne / numberTwo;

            setResult(Number(calculation.toFixed(2)));

            
        } else if (symbol == '^') {
            const numberOne = Number(number1);
            const numberTwo = Number(number2);

            const calculation = Math.pow(numberOne, numberTwo);

            setResult(Number(calculation.toFixed(2)));

            
        } else if (symbol == '√') {

            setExpression(symbol + number1 + '=')

            const numberOne = Number(number1);

            const calculation = Math.sqrt(numberOne);

            setResult(Number(calculation.toFixed(2)));

            
        }
    }
    
    
        
    console.log(symbol);
    

    return (
        <div className={styles.calculator}>

            <ThemeProvider theme={theme}>

                     

                <Grid container direction='column' alignItems="center" justifyContent="center" spacing={2}>
                    
                    <Typography className={styles.title} variant='h3' align='center' color='primary'>
                        Calculadora Básica ⚝
                    </Typography>

                    <br />
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            className={styles.input}
                            variant='filled'
                            color='secondary'
                            type='number'
                            label='Escolha o primeiro valor:'
                            onChange={ ({target}) => setNumber1(Number(target.value))}> 
                            
                        </TextField>
                    </Grid>

                    <br />

                    <Typography align='center' color='secondary'>
                        Clique na operação que deseja fazer:
                    </Typography>

                    <Grid item xs={12} sm={6}>
                        <Button
                            className={styles.symbolBtn} 
                            variant="contained" 
                            color="primary" 
                            onClick={ ({target}) => setSymbol('+')}>
                            +
                        </Button>

                        <Button
                            className={styles.symbolBtn} 
                            variant="contained" 
                            color="primary" 
                            onClick={ ({target}) => setSymbol('-')}>
                            -
                        </Button>

                        <Button 
                            className={styles.symbolBtn}
                            variant="contained" 
                            color="primary" 
                            onClick={ ({target}) => setSymbol('×')}>
                            ×
                        </Button>

                        <Button
                            className={styles.symbolBtn} 
                            variant="contained" 
                            color="primary" 
                            onClick={ ({target}) => setSymbol('÷')}>
                            ÷
                        </Button>

                        <Button
                            className={styles.symbolBtn} 
                            variant="contained" 
                            color="primary" 
                            onClick={ ({target}) => setSymbol('^')}>
                            ^
                        </Button>

                        <Button
                            className={styles.symbolBtn} 
                            variant="contained" 
                            color="primary" 
                            onClick={ ({target}) => setSymbol('√')}>
                            √
                        </Button>
                    </Grid>

                        <br />

                    {

                    symbol !== '√' ? (

                    <Grid item xs={12} sm={6}>
                        <TextField 
                            className={styles.input}
                            variant='filled'
                            color='secondary'
                            type='number'
                            label='Escolha o segundo valor:'
                            onChange={ ({target}) => setNumber2(Number(target.value))}> 
                        </TextField>
                    </Grid> ) : <Grid item xs={12} sm={6}>
                        <TextField 
                            className={styles.input}
                            variant='filled'
                            color='secondary'
                            type='number'
                            disabled={true}
                            label='Escolha o segundo valor:'
                            onChange={ ({target}) => setNumber2(Number(target.value))}> 
                        </TextField>
                    </Grid> 
                    }

                    <br />

                    <Grid item xs={12} sm={6}>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => math()}>
                            =
                        </Button>
                    </Grid>

                    <div>
                        <Typography className={styles.result} variant='h4' align='center' color='primary'>

                            {expression}

                            <br />

                            {result}

                        </Typography>

                    </div>

                    <div>
                        <Button 
                            className={styles.iconBtn}
                            onClick={() => window.location.reload()}
                            color='secondary'> 
                            <DeleteIcon /> 
                        </Button>

                        <Button 
                            className={styles.iconBtn}
                            color='secondary'
                            href='https://github.com/danielafarias'
                            target='_blank'
                            rel='noreferrer'> 
                            <CodeIcon /> 
                        </Button>
                    </div>

                    <Typography className={styles.text} color='primary'>by @danielafarias ❤</Typography>

                </Grid>
            </ThemeProvider>
        </div>
    );
}