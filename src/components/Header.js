import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    List,
    Box,
    IconButton
} from "@material-ui/core";
import Typed from 'react-typed';
import avatar from "../avatar.png";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: { 
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)

    },
    title: {
        color: "tomato"
    },
    subtitle:{
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1

    },
    listItem:{
        color: "tomato",
        margin: "1rem",
    }
}));
const flexContainer = {
    display: "flex",
    size: "100px"
};

const Header = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={ classes.typedContainer}>
            <Grid container justify= "center">
                <Avatar className={ classes.avatar} src={avatar} alt="Tair Hadad"/>
            </Grid>
            <Typography className={ classes.title} variant="h4">
                <Typed strings={["Tair Hadad"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={ classes.subtitle} variant="h5">
                <Typed 
                strings={["C", "C++","C#", "Java", "Python", "Sql", "React"]} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
            <Grid container justify= "center">
            <List style={flexContainer}>
                {/*Linkedin*/}
                <IconButton 
                    className={ classes.listItem} 
                    style={flexContainer.largeIcon} 
                    aria-label="LinkedIn" 
                    href="https://www.linkedin.com/in/tair-hadad-b0b75b190/">
                        <LinkedInIcon fontSize="large"/>
                </IconButton>

                {/*git*/}
                <IconButton 
                    className={ classes.listItem} 
                    style={flexContainer.largeIcon} 
                    aria-label="GitHub" 
                    href="https://github.com/tairhadad">
                        <GitHubIcon fontSize="large"/>
                </IconButton>

                {/*youtube*/}
                <IconButton 
                    className={ classes.listItem} 
                    style={flexContainer.largeIcon} 
                    aria-label="Youtube" 
                    href="https://www.youtube.com/channel/UCajrVTjuwxGA4iNtAoO6m8Q">
                        <YouTubeIcon fontSize="large"/>
                </IconButton>

            </List>
            </Grid>
        </Box> 
            
        </>
      
    );
};

export default Header
