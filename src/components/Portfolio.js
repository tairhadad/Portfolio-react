import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Grid, Box, Card, CardActionArea, CardActions, CardContent,  CardMedia, Button, Typography} from '@material-ui/core';

import Navbar from './Navbar';
import project1 from '../images/bsport.png'
import project2 from '../images/rsz_crm.png'

const useStyles = makeStyles({
    mainContainer: {
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"

    }
})


const Portfolio = () => {
    
    const classes = useStyles();
    return (
        
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center" >
                {/*Project 1*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>

                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Project 1"
                            height= "350"
                            image = {project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" align="center">
                                    B-sport Mobile app
                                </Typography>
                                <Typography  variant="body2" color= "textSecondary" component="p" align="center">
                                Social network for finding sports activities in Beer Sheva.
                                The purpose of the app is to access the existing sports ground in Be'er Sheva using the city's open reservoirs.
                                In addition, the app allows you to search and sort by categories, join the created activity, set new activity and more.
                                </Typography>
                                <Typography  variant="body4" color= "#233" component="p" align="center">
                                    using: Java, Android Studio, Firebase 
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button size="small" color="primary" href="https://www.youtube.com/watch?v=DEywaCTQ4yA&t=3s">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/tairhadad/BSport">
                                    Git
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/*Project 2*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>

                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Project 2"
                            height= "350"
                            image = {project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" align="center">
                                    CRM System
                                </Typography>
                                <Typography  variant="body2" color= "textSecondary" component="p" align="center">
                                    Manage customers, employees, etc.
                                </Typography>
                                <Typography  variant="body4" color= "#233" component="p" align="center">
                                    using: C#, SQL <br/><br/><br/><br/><br/><br/><br/>
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button size="small" color="primary" href="" >
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/tairhadad/CRM-System">
                                    Git
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
