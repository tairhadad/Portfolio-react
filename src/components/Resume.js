import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme =>({
    mainContainer: {
        background: "#223"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.325rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                mergin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"

            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "15.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                mergin: "0 auto"
            },
            "&:nth-of-type(2n):befort": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    } ,
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }

}));


const Resume = () => {
    const classes = useStyles ();
    return (
        <>
        <Navbar/>
        <Typography variant="h4" align="center" className={classes.heading}>
            EDUCATION
        </Typography>
        <Box component="div" className={classes.timeLine}>
            {/* 2017 - Current */}
            <Typography 
            variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2017 - Current
            </Typography> 
            <Box component="div" className={classes.timeLineItem} >
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    B.Sc. Software Engineering student 
                </Typography>
                <Typography variant="body1" style={{color: "tomato"}}>
                    “Sami Shamoon” College
                </Typography>
                <Typography variant="subtitle1"  style={{color: "tan"}}>
                •	GPA – 85.4, Expected graduation - end of 2021. <br/>
                •	Majoring in Cyber: Cryptography - Linux Environment. <br/> 
                •	Learned to develop apps independently in Android Studio enviroment. <br/>
                •	Other Skills: Python, C, C++, Java, Html, CSS, ASP.Net, C#, SQL.

                </Typography>
            </Box>

        </Box>

        <Box component="header" className={classes.mainContainer} >
            <Typography variant="h4" align="center" className={classes.heading}>
                WORK EXPERIENCE
            </Typography>
            <Box component="div" className={classes.timeLine}>
                {/* 2019 - Current */}
                <Typography 
                variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2019 - Current
                </Typography> 
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Tutor
                    </Typography>
                    <Typography variant="body1" style={{color: "tomato"}}>
                        "Hapoel Beer Sheva F.C"
                    </Typography>
                    <Typography variant="subtitle1"  style={{color: "tan"}}>
                    •	Tutoring young football players in Coding and Math. <br/>
                    •	Bringing children with learning difficulties to success in school.
                    </Typography>
                </Box>

                {/* 2018 */}
                <Typography 
                variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2018
                </Typography> 
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Lessons planner
                    </Typography>
                    <Typography variant="body1" style={{color: "tomato"}}>
                        "Bet Yatziv" programming camp
                    </Typography>
                    <Typography variant="subtitle1"  style={{color: "tan"}}>
                        •	Designing lesson plans for middle school students. <br/>
                        •	Adapting complex study materials for young students <br/>
                        •	Time management under a specific time schedule and pressure.

                    </Typography>
                </Box>

                {/* 2015 - 2018 */}
                <Typography 
                variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2015 - 2018
                </Typography> 
                <Box component="div" className={classes.timeLineItem} >
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Shift Manager 
                    </Typography>
                    <Typography variant="body1" style={{color: "tomato"}}>
                        Security Company Meitar
                    </Typography>
                    <Typography variant="subtitle1"  style={{color: "tan"}}>
                        •	Managing about 10 security guards. <br/>
                        •	Responsibility and decision making under pressure.


                    </Typography>
                </Box>

            </Box>
        </Box >
        </>
    )
}

export default Resume
