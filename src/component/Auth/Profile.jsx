import { makeStyles } from "@material-ui/core";
import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const useStyles = makeStyles({
    root:{
        width:"98%",
        height:"97%",
        backgroundColor:"#ffff",
        margin:"10px 10px 10px 5px",
        borderRadius:20,
        // display:"colum",
        // justifyContent:"center"
    },
    root1:{
        padding:"10px 0px 0px 20px",
        display:"flex",
        // justifyContent:"center",
        // justifyItems:"center",
        // alignContent:"center",
        // alignItems:"center",
        flexDirection:"row",
        position:"relative"

    },
    image:{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        // justifyContent:"center",
        // justifyItems:"center",
        // alignContent:"center",
        // alignItems:"center",
        marginTop:"60px"
    },
    details:{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        // justifyContent:"center",
        // justifyItems:"center",
        // alignContent:"center",
        // alignItems:"center",
        color:"#3f51b5",
        margin:"50px 0px 0px 300px"
    },
    button:{
        marginTop:"10px",
        backgroundColor:"red"
    }
})
const Profile = ()=>{
    const classes = useStyles();
    return(
        <>
        <Box className={classes.root}>
         <Box className={classes.root1}>
            <Box className={classes.image}>
            <Avatar style={{width:250,height:250}} alt="Two way"  src="/static/my-photo/avatar-g371090870_640.png" />
            </Box>
            <Box className={classes.details}>
                <Typography variant="h6" fontWeight={"bold"}>Pankaj Bhandari</Typography>
                <Typography fontSize={12}>@backend.dev</Typography>
            <Stack direction={"row"} marginTop={5} alignItems={"center"} gap={5}>
                    <Stack>
                    <Typography variant="h6" className={classes.text} fontWeight={"bold"}>349</Typography>
                 <Typography fontSize={16}>Posts</Typography>
                    </Stack>
                    <Stack>
                    <Typography variant="h6" fontWeight={"bold"}>98.7K</Typography>
                 <Typography fontSize={16}>Followers</Typography>
                    </Stack>
                    <Stack>
                    <Typography variant="h6" fontWeight={"bold"}>1.1K</Typography>
                 <Typography fontSize={16}>Following</Typography>
                    </Stack>
            </Stack>
            <Typography marginTop={3} fontSize={16}>I'm a full stack developer</Typography>
            <Typography fontSize={12}>#dev #uk01</Typography>
            <Button variant="contained" sx={{marginTop:2,bgcolor:"#3949ab" ,":hover":{bgcolor:"#3949ab"}}}>Edit Profile</Button>

            </Box>
        </Box>  
        <Divider variant="middle" sx={{bgcolor:"divider",marginTop:42}}/>
        </Box>
        </>
    )
}

export default Profile