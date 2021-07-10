import { Container, Grid, Typography } from '@material-ui/core';
import styles from '../styles/header.module.scss';


export default function Header() {
    return (
        <div className={styles.header}>
            <Container fixed>
                <Grid container alignItems="center" justifyContent='center' spacing={3}>
                    <Grid item>
                        <Typography className={styles.title} variant='h1'>Calculadora</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img className={styles.mathImg} src='/images/math.png'/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}