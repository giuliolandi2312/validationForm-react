import React from 'react';
import { Button,  Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import girella from '../girella.png';
import { makeStyles } from '@material-ui/core';
import { Card } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    border: '3px solid teal',
    borderRadius: 30,
    marginTop: 20
  },
  item: {
    marginTop: 30,
    marginBottom: 40
  },
  spinner: {
      marginTop: 10,
      marginLeft: 100
  }

})


export default function Typage() {
  const history = useHistory()
  const classes = useStyles()


  return(
        <Container maxWidth="sm">
          <Card
            elevation={5}
            className={classes.container}>
              <Typography
                className={classes.item}
                gutterBottom
                align="center"
                variant="h3"
                color="primary"
              >Complimenti! Registrazione completata
              </Typography>

              <div className={classes.spinner}>
                <img className="w3-spin" src={girella} alt=""/>
              </div>

              <Button
                className={classes.item}
                onClick={() => history.push('/')}
              >premi per tornare indietro
              </Button>
          </Card>
        </Container>

  )
}