import { Box, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
import PlaylistAddCheckCircleTwoToneIcon from '@mui/icons-material/PlaylistAddCheckCircleTwoTone';
import Diversity3TwoToneIcon from '@mui/icons-material/Diversity3TwoTone';
import { useLocation, useNavigate } from "react-router-dom";
const BoxStyle= styled(Box)({
    // display:"flex",
    width:300,
    height:"98%",
    alignContent:"center",
    justifyItems:"center",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ffff",
    position:"fixed",
    borderRadius:"20px 0px 0px 20px",
})
  let onClick = {
    marginLeft:20,
    backgroundColor:"#3f51b5",
    color:"#fff",
    borderRadius:10,
    marginRight:20,
    
  }
const Sidebar =()=>{
    const [open, setOpen] = useState(false);
    const history = useNavigate();
    const navigation = useLocation();

    const handleClick = () => {
      setOpen(!open);
    };
      const CheckPath = (path)=>{
          if(navigation.pathname === path) return true
       }
   const ListItem = styled(ListItemButton)({
      marginLeft:20,
      borderRadius:10,
       "&:hover":{
      backgroundColor:"#9fa8da",
      color:"#fff",
      borderRadius:10,
      marginRight:20,
      "& .MuiListItemIcon-root": {
        color: "#ffff"
      }
      },
     

  })
      const ItemIcon = styled(ListItemIcon)({
        color:"#607d8b",
      })

console.log("menu",navigation , CheckPath(navigation.pathname))
    return(
      <>
       <BoxStyle>
      <Divider variant="fullWidth" sx={{bgcolor:"#c5cae9",marginTop:1.8}}/>
      <Stack direction={"row"} gap={1} sx={{marginTop:2,marginLeft:4}}>
      <Diversity2TwoToneIcon sx={{position:"relative",width:40,height:40,cursor:"pointer" ,color:"#303f9f"}}/>
      <Typography variant="6" fontWeight={"bold"} sx={{position:"absolute",margin:"15px 0px 0px 45px"}}  color={"#3f51b5"}>Two~Way</Typography>
     </Stack>  
     <Divider variant="fullWidth" sx={{bgcolor:"#c5cae9",marginTop:1}}/>
     <List
      sx={{ width: '100%', maxWidth: 360,color:"#3f51b5",marginTop:2, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem onClick={event =>   (history('/dashboard')) } style={CheckPath("/dashboard")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/dashboard")?{color:"#ffff"}:{}}>
          <GridViewRoundedIcon/>  
        </ItemIcon>
        <ListItemText primary="Dashboard"/>
      </ListItem>
      <ListItem onClick={event =>  (history('/users'))} style={CheckPath("/users")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/users")?{color:"#ffff"}:{}}>
         <PersonRoundedIcon/>
        </ItemIcon>
        <ListItemText primary="Users" />
      </ListItem>

      <ListItem onClick={event =>  (history('/posts'))} style={CheckPath("/posts")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/posts")?{color:"#ffff"}:{}}>
         <PostAddRoundedIcon/>
        </ItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>

      <ListItem onClick={event =>  (history('/story'))} style={CheckPath("/story")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/story")?{color:"#ffff"}:{}}>
         <BookmarkRoundedIcon/>
        </ItemIcon>
        <ListItemText primary="Stories" />
      </ListItem>

      <ListItem onClick={event =>  (history('/events'))} style={CheckPath("/events")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/events")?{color:"#ffff"}:{}}>
         <EventNoteRoundedIcon/>
        </ItemIcon>
        <ListItemText primary="Events" />
      </ListItem>
      
      <ListItem onClick={event =>  (history('/playlist'))} style={CheckPath("/playlist")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/playlist")?{color:"#ffff"}:{}}>
         <PlaylistAddCheckCircleTwoToneIcon/>
        </ItemIcon>
        <ListItemText primary="Playlist" />
      </ListItem>
      <ListItem onClick={event =>  (history('/groups'))} style={CheckPath("/groups")?{...onClick}:{}}>
        <ItemIcon style={CheckPath("/groups")?{color:"#ffff"}:{}}>
         <Diversity3TwoToneIcon/>
        </ItemIcon>
        <ListItemText primary="Groups" />
      </ListItem>
      <ListItem onClick={handleClick } >
        <ItemIcon>
          <SettingsRoundedIcon/>
        </ItemIcon>
        <ListItemText primary="Setting" />
        {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }} 
          // onClick={event => history('/help')} style={CheckPath("/help")?{...onClick}:{}}
          >
            <ItemIcon>
             <ContactSupportRoundedIcon/>
            </ItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </BoxStyle>
      </>
   
    )
}


export default Sidebar