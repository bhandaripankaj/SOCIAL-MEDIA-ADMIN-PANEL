import styled from "@emotion/styled";
import { Avatar, Button, makeStyles, Menu, Paper } from "@material-ui/core";
import { Divider, FormControl, InputBase, InputLabel, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
    AreaChart,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    PieChart, Pie, Cell
  } from "recharts";
import { RecentMessage } from "../../config/config";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import EventSeatRoundedIcon from '@mui/icons-material/EventSeatRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import { useNavigate } from "react-router-dom";
// chart data 
let data = [
    { month: 'Jan', post: 35 }, { month: 'Feb', post: 28 },
    { month: 'Mar', post: 34 }, { month: 'Apr', post: 32 },
    { month: 'May', post: 40 }, { month: 'Jun', post: 32 },
    { month: 'Jul', post: 35 }, { month: 'Aug', post: 55 },
    { month: 'Sep', post: 38 }, { month: 'Oct', post: 30 },
    { month: 'Nov', post: 25 }, { month: 'Dec', post: 32 }
]
const dataDist = [
    {
      name: "A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
        name: "H",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "I",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "J",
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: "K",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "L",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
  ];
  const CircleData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
// -------

const useStyles = makeStyles({
    root:{
        borderRadius:10,
        height:40,
    },
    icon:{
        width:100,
        height:40
    }
})
const SearchIconWrapper = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#5c6bc0"
  }));
const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    position:"relative",
    // padding:"0 10px",
    // borderRadius:theme.shape.borderRadius,
    width:"20%",
    }))
const Dashboard = ()=>{
  const history = useNavigate();
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [menuBasic,setBasicMenu] = useState(false)
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <Box sx={{margin:3}}>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Typography>Dashboard</Typography>
            <Box sx={{marginLeft:80}} >
             <FormControl sx={{ marginLeft: -4,marginRight:4, minWidth: 120 ,bgcolor:"#fff"}} size="small" className={classes.root}>
                    <InputLabel id="demo-select-small">Select</InputLabel>
                                    <Select
                                        // labelId="demo-select-small"
                                        // id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Year</MenuItem>
                                        <MenuItem value={20}>Month</MenuItem>
                                        <MenuItem value={30}>Week</MenuItem>
                                    </Select>
                            </FormControl>
            </Box>
            <Search className={classes.root}>
            <SearchIconWrapper>
              <SearchRoundedIcon />
            </SearchIconWrapper>
   <InputBase sx={{margin:"5px 0px 0px 30px"}} placeholder="search..."/> </Search>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={7} marginTop={3}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1.5,
                    width: 180,
                    height: 80,
                    borderRadius:5
                    },
                }}
                >
                <Paper elevation={1} sx={{cursor:"pointer"}}>
                <PersonRoundedIcon sx={{position:"relative", width:50,height:50,color:"#e3f2fd",bgcolor:"#26a69a",margin:"15px 0px 0px 10px",borderRadius:3}}/>
                <Typography variant="6"sx={{position:"absolute",color:"#9fa8da", margin:"15px 0px 0px 10px"}}>Active User</Typography>
                <Typography variant="6"sx={{position:"absolute",color:"#3f51b5", margin:"40px 0px 0px 10px",fontSize:18,fontWeight:"bold"}}>9999</Typography>
                </Paper>
                <Paper elevation={1}>
                <BookmarkAddRoundedIcon sx={{position:"relative", width:50,height:50,color:"#e3f2fd",bgcolor:"#ff8a65",margin:"15px 0px 0px 10px",borderRadius:3}}/>
                <Typography variant="6"sx={{position:"absolute",color:"#9fa8da", margin:"15px 0px 0px 10px"}}>Posts</Typography>
                <Typography variant="6"sx={{position:"absolute",color:"#3f51b5", margin:"40px 0px 0px 10px",fontSize:18,fontWeight:"bold"}}>10000</Typography>
                </Paper>
                <Paper elevation={1}>
                <EventSeatRoundedIcon sx={{position:"relative", width:50,height:50,color:"#e3f2fd",bgcolor:"#4fc3f7",margin:"15px 0px 0px 10px",borderRadius:3}}/>
                <Typography variant="6"sx={{position:"absolute",color:"#9fa8da", margin:"15px 0px 0px 10px"}}>Events</Typography>
                <Typography variant="6"sx={{position:"absolute",color:"#3f51b5", margin:"40px 0px 0px 10px",fontSize:18,fontWeight:"bold"}}>1500</Typography>
                </Paper>
                <Paper elevation={1}>
                <Diversity1RoundedIcon sx={{position:"relative", width:50,height:50,color:"#e3f2fd",bgcolor:"#9575cd",margin:"15px 0px 0px 10px",borderRadius:3}}/>
                <Typography variant="6"sx={{position:"absolute",color:"#9fa8da", margin:"15px 0px 0px 10px"}}>Groups</Typography>
                <Typography variant="6"sx={{position:"absolute",color:"#3f51b5", margin:"40px 0px 0px 10px",fontSize:18,fontWeight:"bold"}}>888</Typography>
                </Paper>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    // m: 1.5,
                    width: 220,
                    height: 80,
                    borderRadius:5
                    },
                }}
                >
                <Paper elevation={0}>
                <ListItem >
                    <ListItemAvatar sx={{position:"relative",cursor:"pointer"}} onClick={e=>setBasicMenu(true)}>
                    <Avatar alt="Pankaj" src={RecentMessage[2].image} />
                    </ListItemAvatar>
                    
                    <ListItemText primary="Pankaj Bhandari" secondary="@bhandari.dev" />
                </ListItem>
                    </Paper>
                     <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            open={menuBasic}
                            onClose={e=>setBasicMenu(false)}
                            anchorOrigin={{
                            vertical: "top",
                            horizontal: 'right',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            style={{margin:"150px 0px 0px -100px",}}
                        >
                            <MenuItem onClick={e=>history("/profile")}>My account</MenuItem>
                            <MenuItem >Logout</MenuItem>
                            </Menu>
                </Box>
            </Stack>

            <Stack direction={"row"}  gap={7}>
                <Box sx={{bgcolor:"#fff",marginLeft:2,marginTop:3, borderRadius:5}}>
                                <BarChart
                                width={790}
                                height={300}
                                data={data}
                                margin={{
                                    top: 0,
                                    right: 40,
                                    left: 40,
                                    bottom: 5
                                }}
                                barSize={20}
                    >
                    <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
                    {/* <YAxis /> */}
                    <Tooltip />
                    <Legend />
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <Bar dataKey="post" fill="#3f51b5"  />
                    </BarChart>
                </Box>
          <Box sx={{bgcolor:"#fff",position:"relative", marginLeft:2,marginTop:3, borderRadius:5,width: 220,height:300,}}>
              <Typography sx={{fontSize:14,margin:"10px 0px 0px 10px"}}>Recent Messages</Typography>
             <Box sx={{overflowY:"scroll",height:220}}>
             {RecentMessage.map((value)=>(
                <ListItem sx={{":hover":{bgcolor:"#c5cae9",height:50,cursor:"pointer"}}}>
                    <ListItemAvatar>
                    <Avatar alt="Pankaj" src={value.image} />
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
              ))}
               {/* sx={{width:200,height:20,bgcolor:"#90a4ae",position:"absolute",}} */}
             </Box>
           <Divider variant="fullWidth" sx={{bgcolor:"#c5cae9",marginTop:0}}/>

             <Button variant="contained" style={{ width:150,height:30,backgroundColor:"#c5cae9",boxShadow:"none", position:"absolute",marginLeft:"30px",marginTop:"10px"}}>Start</Button>
          </Box>
                </Stack>  

            <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Box sx={{bgcolor:"#fff",marginLeft:2,marginTop:3,position:"relative", borderRadius:5}}>
                <AreaChart
       width={790}
        height={200}
        data={dataDist}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
        <Box sx={{position:"absolute",margin:"-200px 0px 0px 870px",bgcolor:"#fff",width:200,height:200,borderRadius:5}}>
              <PieChart width={200} height={200}>
                    <Pie
                        data={CircleData}
                        cx={100}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {CircleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    </PieChart>
              </Box>
                </Box>
              
                </Stack>       
        </Box>
    )
}

export default Dashboard