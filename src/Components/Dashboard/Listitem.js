import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";

const useStyles = theme =>({
    activeStyle:{
        backgroundColor: '#fa255e',
        fontWeight: 'bold',
        transition: '.3s',
        textDecoration:'none',
        color:'#fff',
    },
    itemText:{
        textDecoration:'none',
        color:'#fff',
        '&:hover .MuiTouchRipple-root':{
            backgroundColor: 'rgba(200, 200, 200, 0.2)'
        }
    },
})
class ListitemDetail extends Component {
    render() {
        const {classes} = this.props
        return (
            <NavLink activeClassName={classes.activeStyle} className={classes.itemText} to={this.props.link}>
                <ListItem button>
                    <ListItemIcon style={{color:'#fff'}}>
                        {this.props.icon}
                    </ListItemIcon>
                    <ListItemText primary={this.props.name}/>
                </ListItem>
            </NavLink>
        );
    }
}
export default withStyles(useStyles) (ListitemDetail);
