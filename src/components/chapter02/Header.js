import React from "react";
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";

const useStyles=makeStyles(()=>({
    typographyStyles:{
        flex:1
    }
}));


const Header=()=>{
    const classes = useStyles();


    return <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographyStyles}>This is our header!</Typography>
            <AcUnitRoundedIcon/>
        </Toolbar>
    </AppBar>
}

export default Header
