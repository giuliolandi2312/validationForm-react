import React from 'react';
import Container from '@material-ui/core/Container';
import Typografy from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { lime } from '@material-ui/core/colors';
import { useState } from 'react';
import ErrorIcon from '@material-ui/icons/Error'
import { Card } from '@material-ui/core';
import { useHistory } from 'react-router';



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    width: '50%'
  },
  leftfield: {
    marginTop: 20,
    marginBottom: 20,
    width: '50%',
    marginRight: 20
    },
  longfield: {
    marginTop: 20,
    marginBottom: 20
  },
  btn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'teal',
    '&:hover': {
      backgroundColor: lime,
    },
    marginBottom: 10
  },
  container: {
    borderRadius: 30,
    border: '3px solid teal',
    padding: 10,
    marginTop: 20,
    marginBottom:20
  },
  group: {
    display: 'flex',
    justifyContent: 'space-between'

  },
  error: {
    display: 'flex',
    fontSize: 15,
    padding: 5
    
  }
})


export default function Form() {
    const history = useHistory()
    const classes = useStyles() 

    const [name, setName] = useState('')
    const [nameError, setNameError ] = useState(false)
    const [helpertextName, setHelperTextName] = useState(false)
    const [surname, setSurname] = useState('')
    const [surnameError, setSurnameError ] = useState(false)
    const [helpertextSurname, setHelperTextSurname] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError ] = useState(false)
    const [helpertextEmail, setHelperTextEmail] = useState(false)
    const [cemail, setCemail] = useState('')
    const [cemailError, setCemailError ] = useState(false)
    const [helpertextCemail, setHelperTextCemail] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError ] = useState(false)
    const [helpertextPassword, setHelperTextPassword] = useState(false)
    const [cpassword, setCpassword] = useState('')
    const [cpasswordError, setCpasswordError ] = useState(false)
    const [helpertextCpassword, setHelperTextCpassword] = useState(false)
    const [address, setAddress] = useState('')
    const [addressError, setAddressError ] = useState(false)
    const [helpertextAddress, setHelperTextAddress] = useState(false)
    const [city, setCity] = useState('')
    const [cityError, setCityError ] = useState(false)
    const [helpertextCity, setHelperTextCity] = useState(false)


    const handleSubmit = (e) => {
      e.preventDefault()
      history.push('/typage')



      if(name === ''){
        setNameError(true)
        setHelperTextName(<span className={classes.error}><ErrorIcon />&nbsp;Inserisci il tuo nome</span>)
        history.push('/')
      }

      if(surname === ''){
        setSurnameError(true)
        setHelperTextSurname(<span className={classes.error}><ErrorIcon />&nbsp;Inserisci il tuo cognome</span>)
        history.push('/')
      }
      
      if(email === ''){
        setEmailError(true)
        setHelperTextEmail(<span className={classes.error}><ErrorIcon />&nbsp;Inserisci la tua email</span>)
        history.push('/')
      }

      if(cemail === ''){
        setCemailError(true)
        setHelperTextCemail(<span className={classes.error}><ErrorIcon />&nbsp;Conferma la tua email</span>)
        history.push('/')
      }
      
      if(password === ''){
        setPasswordError(true)
        setHelperTextPassword(<span className={classes.error}><ErrorIcon />&nbsp;Inserisci una password valida</span>)
        history.push('/')
      }

      if(cpassword === ''){
        setCpasswordError(true)
        setHelperTextCpassword(<span className={classes.error}><ErrorIcon />&nbsp;Conferma la tua password</span>)
        history.push('/')
      }

      if(address === ''){
        setAddressError(true)
        setHelperTextAddress(<span className={classes.error}><ErrorIcon />&nbsp;Inserisci il tuo indirizzo</span>)
        history.push('/')
      }

      if(city === ''){
        setCityError(true)
        setHelperTextCity(<span className={classes.error}><ErrorIcon />&nbsp;Inserisci la tua città</span>)
        history.push('/')
      }
    }



  return(
    <Container  maxWidth="sm" >
      <Card 
        elevation={10} 
        className={classes.container}
      >
        <Typografy
          align="center"
          variant="h4"
          color="primary"
          gutterBottom
        >Registrazione
        </Typografy>

        <form noValidate onSubmit={handleSubmit}> 
          <div className={classes.group}>
            <TextField
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              className={classes.leftfield}
              label="Nome"
              variant="outlined"
              color="primary"
              required
              placeholder="Inserisci il tuo nome"
              error={nameError}
              helperText={helpertextName}
            />

            <TextField
              autoComplete="off"
              onChange={(e) => setSurname(e.target.value)}
              className={classes.field}
              label="Cognome"
              variant="outlined"
              color="primary"
              required
              placeholder="Inserisci il tuo cognome"
              error={surnameError}
              helperText={helpertextSurname}
            />
          </div>
          
          <div className={classes.group}>
            <TextField
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className={classes.leftfield}
              label="Email"
              variant="outlined"
              color="primary"
              required
              placeholder="Inserisci la tua email"
              error={emailError}
              helperText={helpertextEmail}
            />
            
            <TextField
              autoComplete="off"
              onChange={(e) => setCemail(e.target.value)}
              className={classes.field}
              label="Conferma email"
              variant="outlined"
              color="primary"
              placeholder="Conferma la tua email"
              required
              error={cemailError}
              helperText={helpertextCemail}
            />
          </div>
          
          <div className={classes.group}>
            <TextField
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.leftfield}
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Inserisci una password"
              color="primary"
              required
              error={passwordError}
              helperText={helpertextPassword}
            />

            <TextField
              autoComplete="off"
              onChange={(e) => setCpassword(e.target.value)}
              className={classes.field}
              label="Conferma password"
              type="password"
              variant="outlined"
              color="primary"
              required
              placeholder="Conferma la tua password"
              error={cpasswordError}
              helperText={helpertextCpassword}
            />
          </div>

            <TextField
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
              className={classes.longfield}
              label="Indirizzo residenza"
              fullWidth
              variant="outlined"
              color="primary"
              required
              placeholder="Inserisci il tuo indirizzo"
              error={addressError}
              helperText={helpertextAddress}
            />
            
            <TextField
              autoComplete="off"
              className={classes.longfield}
              label="Indirizzo domicilio"
              fullWidth
              variant="outlined"
              placeholder="Inserisci il tuo domicilio (opzionale)"
              color="primary"
            />

            <TextField
              autoComplete="off"
              onChange={(e) => setCity(e.target.value)}
              className={classes.longfield}
              label="Città"
              fullWidth
              variant="outlined"
              color="primary"
              required
              placeholder="Inserisci la tua città"
              error={cityError}
              helperText={helpertextCity}
            />

            <TextField
              autoComplete="off"
              className={classes.longfield}
              label="Informazioni personali"
              fullWidth
              variant="outlined"
              color="primary"
              placeholder="Aggiungi qualcosa su di te (opzionale)"
              multiline
              rows={4}
            />

            <Button
              elevation={10}
              className={classes.btn}  
              fullWidth      
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >Registrati
            </Button>
        </form>

    </Card>
  </Container>

  )
}