import React, {Component} from 'react';
import {Container,Typography,Paper,Avatar} from '@material-ui/core';
import {withStyles} from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";

const style=(theme)=>({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        // minHeight:300
    },
    avatar:{
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
});


class About extends Component{



    componentDidMount(props) {

        console.log(props)
    }


    render() {
        const {classes} = this.props

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>

                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="button" display="block" >
                                        Profile
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}/>
                                <Grid item xs={8}>
                                    <div className={classes.avatar}>
                                        <Avatar alt="Remy Sharp" src="/images/baby.jpg" className={classes.large}/>

                                    </div>

                                    <Typography variant="button" display="block" align={'center'}>
                                        Lim hee jun
                                    </Typography>
                                    <Typography variant="button" display="block"  align={'center'}>
                                        Developer
                                    </Typography>


                                </Grid>
                                <Grid item xs={2}/>

                            </Grid>


                        </Paper>
                    </Grid>
                    <Grid item xs={10}>
                        <Paper className={classes.paper}>

                        </Paper>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default  withStyles(style)(About);
