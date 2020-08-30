import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import Youtube from '@material-ui/icons/YouTube';
import GitHub from '@material-ui/icons/GitHub';
import Linkedin from '@material-ui/icons/LinkedIn';

const useStyle = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover" : {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})


const Footer = () => {
    const classes = useStyle();
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon = {<Youtube/>}
                href= "https://www.youtube.com/channel/UCajrVTjuwxGA4iNtAoO6m8Q"
            />
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon = {<GitHub/>}
                href= "https://github.com/tairhadad"
            />
            <BottomNavigationAction
                className={classes.root}
                style={{padding: 0}}
                icon = {<Linkedin/>}
                href= "https://www.linkedin.com/in/tair-hadad-b0b75b190/"
            />
        </BottomNavigation>
    )
}

export default Footer
