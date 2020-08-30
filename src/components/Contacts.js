import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box,Avatar,Typography,Button, IconButton} from '@material-ui/core';
import Navbar from "./Navbar";
import avatar from "../avatar.png";
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    avatar: { 
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
        top: "13.5rem",
        left: "3rem",
        transform: "translate(0%, 0%)",

    },
    whatsapp: { 
        width: theme.spacing(4),
        height: theme.spacing(4),
        top: "3rem",
        left: "15rem"

    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}));
const flexContainer = {
    display: "flex",
    size: "100px",
    
};

const Contacts = () => {

    const classes = useStyles();
    return (
        <Box component="div" style={{background: "#233", height: "100vh" }}>
            <Navbar/>
            <Grid container justify="center">
            <Grid container >
                <Avatar className={ classes.avatar} src={avatar} alt="Tair Hadad"/>
            </Grid>
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}>
                        about me..
                    </Typography>
                    <Typography variant="subtitle1"  style={{color: "tan"}}>
                    Ever since I can remember I have loved computers. <br/>
                    As a kid, I was on the computer all day - playing games and dismantling the computer to see what was inside.<br/>
                    Even today I am always looking for something to innovate in technology, editing wedding videos as a hobby and developing algorithms for my enjoyment.<br/>
                    Looking for a job that will challenge me and give me a lot of knowledge in the world of software.
                    </Typography>
                    <br/>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}>
                        Contact Details
                    </Typography>

                    <Box class="react-share-button">
                        <IconButton 
                            className={ classes.whatsapp} 
                            style={flexContainer.largeIcon} 
                            aria-label="WhatsApp" 
                            alt="send massage"
                            href="https://wa.me/+972523219555/?text=">
                            <WhatsAppIcon fontSize="large" style={{color:"green"}}/>
                        </IconButton>
                    </Box>




                    
                    <Typography variant="body1" style={{color: "tan"}}>
                        Tair Hadad
                    </Typography>
                    <Typography variant="body1" style={{color: "tan"}}>
                        Beer Sheva
                    </Typography>
                    <Typography variant="body1" style={{color: "tan"}}>
                        +972523219555
                    </Typography>
                    <Typography variant="body1" style={{color: "tan"}}>
                        tairhadad1@gmail.com
                    </Typography>
                    <br/>
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<PresentToAllIcon/>} href="https://drive.google.com/file/d/1cMmF30YfzBoXIGt2tkJH9FyNhxo_b1sZ/view?usp=sharing">
                        Download Resume
                    </Button> 
                    
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
