import { makeStyles } from "@material-ui/core";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";

const useStyles = makeStyles({
    root:{
        display:"flex",
        // justifyContent:"center",
        // justifyItems:"center",
        // alignContent:"center",
        alignItems:"center",
        flexDirection:"column",
        margin:"auto",
        marginTop:"10%",
        // height:400,
        maxWidth:600,
        maxHeight:500,
        borderRadius:20,
        backgroundColor:"#ffff",
        color:"#7986cb"
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
  const OtpInputCard = ({ title, resendOTP, ...rest }) => {
    const [OTP, setOTP] = useState("");
    return (
      <div
        style={{
          padding: 12,
        }}
      >
        <div style={{ marginBottom: 12 }}>{title}</div>
        <OTPInput value={OTP} onChange={setOTP} {...rest} />
      </div>
    );
  };
const ForgotPassword = ()=>{
  const classes = useStyles();
  const history = useNavigate();
  const [isForgot, setForgot] = useState(false)
  const [formValues, setFormValues] = useState({
    confirmPassword:{
      value:'',
      error:false,
      errorMessage:'You must enter a confirm password'
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
const [type,setType]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    let newFormValues = {...formValues}
    if(!newFormValues.email.value){
      newFormValues.email.error = true
    } else {
      newFormValues.email.error = false
    }
    if(!newFormValues.password.value && type ==="password"){
      newFormValues.password.error = true
    } else {
      newFormValues.password.error = false
    }
    if(!newFormValues.confirmPassword.value && type ==="password"){
      newFormValues.confirmPassword.error = true
    } else if(newFormValues.confirmPassword.value && newFormValues.password.value && newFormValues.confirmPassword.value !== newFormValues.password.value){
      newFormValues.confirmPassword.error = true
      newFormValues.confirmPassword.errorMessage = "Passwords does not match"
    } else  if(!(newFormValues.confirmPassword.error && newFormValues.password.error) && type ==="password"){
      history("/")
    }
    else {
      newFormValues.confirmPassword.error = false
    }
    setFormValues(newFormValues)

    if(!(newFormValues.email.error) && type ==="forgot") {
      setForgot(!isForgot)
      } 
       
    }
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
  console.log("pp",isForgot)  

    return(
        <>
        <Box className={classes.root}>
        <Typography variant="h5" marginTop={10}>{!isForgot && "Forgot Password"} {isForgot && type ==="password" && "Set Password"}</Typography>
        <Box sx={{ width: '100%' }}>
          {!isForgot && (
                  <Box display='flex'  flexDirection={"column"} margin={"50px 30px 0px 30px"}>
                  <form onSubmit={handleSubmit}>
                    <TextField  name="email"
                      fullWidth
                    className={classes.input}
                          onChange={handleInput}
                          error={ (type === "forgot") && formValues.email.error}
                          helperText={ (type === "forgot") && formValues.email.error && formValues.email.errorMessage}
                          value={formValues.email.value}
                          margin="normal" type={'email'}
                          variant='outlined' placeholder="Email" />
                            <Button className={classes.button} 
                          onClick={event => handleSubmit  (setType("forgot"))}
                          type="submit" name="submit" sx={{ marginTop: 7,marginBottom:7, display:"flex",width:150, borderRadius: 3,marginLeft:"35%" }}
                          variant="contained" style={{ backgroundColor: "#3f51b5" }}>Send Otp</Button>
                    </form>
                    </Box>
          )}
           {isForgot && type !== "password" && (
            <Box  style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }} 
            margin={"50px 30px 0px 30px"}>
       <OtpInputCard
             title=""
             inputClassName="bottom__border"
            //  autoFocus
             OTPLength={4}
             otpType="number"
             disabled={false}
             inputStyles={{
               border: 0,
               width:50,
               borderBottom: "1px solid #cbcbcb",
             }}
             resendOTP={{}}
            //  secure
           />
             <ResendOTP
          renderTime={() => React.Fragment}
          renderButton={(buttonProps) => {
            return (
              <Button  {...buttonProps} style={{marginLeft:130,color:"Highlight"}}>
                {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
              </Button>
            );
          }}
        />
              <Button className={classes.button} 
               onClick={event =>   (setType("password"))}
                          type="submit" name="submit" sx={{ marginTop: 5, marginBottom:7, display:"flex",width:150, borderRadius: 3}}
                          variant="contained" style={{ backgroundColor: "#3f51b5" }}>Verify Otp</Button>
            </Box>
            )}
            {isForgot && type === "password" &&(
               <Box display='flex'  flexDirection={"column"} margin={"50px 30px 0px 30px"}>
               <form onSubmit={handleSubmit}>
                 <TextField  name="password"
                   fullWidth
                 className={classes.input}
                       onChange={handleInput}
                       error={ (type === "password") && formValues.password.error}
                       helperText={ (type === "password") && formValues.password.error && formValues.password.errorMessage}
                       value={formValues.password.value}
                       margin="normal" type={'password'}
                       variant='outlined' placeholder="Password" />

                        <TextField  name="confirmPassword"
                   fullWidth
                 className={classes.input}
                       onChange={handleInput}
                       error={ (type === "password") && formValues.confirmPassword.error}
                       helperText={ (type === "password") && formValues.confirmPassword.error && formValues.confirmPassword.errorMessage}
                       value={formValues.confirmPassword.value}
                       margin="normal" type={'password'}
                       variant='outlined' placeholder="Confirm Password" />
                         <Button className={classes.button} 
                       type="submit" name="submit" sx={{ marginTop: 7,marginBottom:7, display:"flex",width:150, borderRadius: 3,marginLeft:"35%" }}
                       variant="contained" style={{ backgroundColor: "#3f51b5" }}>Done</Button>
                 </form>
                 </Box>
            )}
            </Box>
        </Box>
        </>
    )
}

export default ForgotPassword