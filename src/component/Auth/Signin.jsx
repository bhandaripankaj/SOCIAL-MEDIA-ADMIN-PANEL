import React, { useState } from "react";
import { Box, Button, Divider, Tab, Tabs, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root:{
      display:"flex",
      justifyContent:"center",
      justifyItems:"center",
      // alignContent:"center",
      // alignItems:"center",
      margin:"auto",
      marginTop:"10%",
      maxWidth:600,
      maxHeight:500,
      borderRadius:20,
      backgroundColor:"#ffff"
  },
  bar:{
    color:"red"
  },
  input:{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#5c6bc0"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#5c6bc0"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#5c6bc0"
    },
},
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Signin = ()=>{
  const [value, setValue] = useState(0); 
  const history = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const [type,setType]=useState("")
  const [formValues, setFormValues] = useState({
    name:{
      value:'',
      error:false,
      errorMessage:'You must enter a name'
    },
    email:{
      value:"",
      error:false,
      errorMessage:'You must enter an email'
    },
    password:{
      value:'',
      error:false,
      errorMessage:'You must enter your password'
    },
  })

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]:{
        ...formValues[name],
        value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFormValues = {...formValues}
    if(!newFormValues.email.value){
      newFormValues.email.error = true
    } else {
      newFormValues.email.error = false
    }
    if(!newFormValues.password.value){
      newFormValues.password.error = true
    } else {
      newFormValues.password.error = false
    }
    if(!newFormValues.name.value && type === "signup"){
      newFormValues.name.error = true
    } else {
      newFormValues.name.error = false
    }
    setFormValues(newFormValues)
   if(!(newFormValues.email.error && newFormValues.password.error)) {
    history('/dashboard')
   }
  }

  const classes = useStyles();
    return (
       <Box className={classes.root}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, position:"relative",borderRadius:20, borderColor: 'divider',}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} sx={{marginLeft:8}}/>
          <Tab label="Signup" {...a11yProps(1)} sx={{marginLeft:35}}/>
        </Tabs>
      <Divider variant="fullWidth"  orientation="vertical" sx={{position:"absolute",borderColor: 'divider',margin:"-48px 0px 0px 290px"}}/>
      </Box>
      <TabPanel value={value} index={0}>
              <Box display='flex' flexDirection={"column"} margin={"0px 30px 0px 30px"}>
                <form onSubmit={handleSubmit}>
                <TextField  name="email"
                fullWidth
              className={classes.input}
                    onChange={handleInput}
                    error={ (type === "login") && formValues.email.error}
                    helperText={ (type === "login") && formValues.email.error && formValues.email.errorMessage}
                    value={formValues.email.value}
                    margin="normal" type={'email'}
                    variant='outlined' placeholder="Email" />
                <TextField name="password"
                fullWidth
                 className={classes.input}
                    onChange={handleInput}
                    error={(type === "login") && formValues.password.error}
                    helperText={(type === "login") && formValues.password.error && formValues.password.errorMessage}
                    value={formValues.password.value}
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Password" />
                    <Button
                    onClick={e=> history("/forgot-password")}
                    sx={{ marginLeft: 40 }}
                > Forgot Password</Button>
                    <Button className={classes.button} 
                    onClick={event =>  setType("login")}
                    type="submit" name="submit" sx={{ marginTop: 3,display:"flex",width:150, borderRadius: 3,marginLeft:"35%" }}
                    variant="contained" style={{ backgroundColor: "#009688" }}>Login</Button>
                </form>
         
        </Box>
      </TabPanel>
          <TabPanel value={value} index={1}>
          <Box display='flex' flexDirection={"column"} margin={"0px 30px 0px 30px"}>
          <form onSubmit={handleSubmit}>
          <TextField name="name"
                       fullWidth
                        className={classes.input}
                        onChange={handleInput}
                        error={(type === "signup")  && formValues.name.error}
                         helperText={ (type === "signup")  && formValues.name.error && formValues.name.errorMessage}
                         value={formValues.name.value}
                        margin="normal" type={'text'}
                        variant='outlined' placeholder="Name" />
              <TextField  name="email"
                      fullWidth
                    className={classes.input}
                        onChange={handleInput}
                        error={ (type === "signup")  &&  formValues.email.error}
                    helperText={ (type === "signup")  &&  formValues.email.error && formValues.email.errorMessage}
                    value={formValues.email.value}
                        margin="normal" type={'email'}
                        variant='outlined' placeholder="Email" />
                    <TextField name="password"
                    fullWidth
                    className={classes.input}
                        onChange={handleInput}
                        error={(type === "signup")  && formValues.password.error}
                    helperText={ (type === "signup")  &&  formValues.password.error && formValues.password.errorMessage}
                    value={formValues.password.value}
                        margin="normal"
                        type={'password'} variant='outlined' placeholder="Password" />
                        <Button className={classes.button} 
                        onClick={event =>  setType("signup")}
                        type="submit" sx={{ marginTop: 3,display:"flex",width:150, borderRadius: 3,marginLeft:"35%" }}
                        variant="contained" style={{ backgroundColor: "#009688" }}>Signup</Button>
            </form>
           
            </Box>
          </TabPanel>
    </Box>
       </Box>
    )
}

export default Signin