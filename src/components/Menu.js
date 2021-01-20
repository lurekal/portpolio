import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {withStyles} from '@material-ui/styles';
import {  Link } from 'react-router-dom';


const style=(theme)=>({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(5),
    },
});




class Menu extends Component{

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    componentDidMount(props) {

        console.log(props)
    }

    changeOpen=(open)=>{
        this.setState({
            open:!open
        })
    }



    render() {

        const {classes} = this.props
        const open = false



        return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
            className={classes.root}
        >

            <ListItem button>
                {/*<ListItemIcon>*/}
                {/*    <SendIcon />*/}
                {/*</ListItemIcon>*/}
                {/*<Link to={'/about'} >      </Link>*/}
                <ListItemText primary="about" />

            </ListItem>

            <ListItem button>
                {/*<ListItemIcon>*/}
                {/*    <DraftsIcon />*/}
                {/*</ListItemIcon>*/}
                <Link to={'/notice'}>
                    <ListItemText primary="notice" />
                </Link>
                {/*{open ? <ExpandLess /> : <ExpandMore />}*/}
            </ListItem>

            <ListItem button onClick={()=>{this.changeOpen(this.state.open)}}>
                {/*<ListItemIcon>*/}
                {/*    <InboxIcon />*/}
                {/*</ListItemIcon>*/}
                <ListItemText primary="Inbox" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/*<ListItemIcon>*/}
                        {/*    <StarBorder />*/}
                        {/*</ListItemIcon>*/}
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
        )
    }
}

export default withStyles(style)(Menu)
