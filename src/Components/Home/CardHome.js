import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core/styles";
import FaceIcon from '@material-ui/icons/Face';

const useStyles = theme=>({
    title: {
        fontWeight: 700
    },
    avatar: {

        height: 56,
        width: 56
    },
    iconavatar: {
        height: 32,
        width: 32
    },
    group: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },

})
class CardHome extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid item xs={3}>
                <Card>
                    <CardContent  style={{background:`${this.props.background}`}}>
                        <Grid container justify="space-between">
                            <Grid item>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    {this.props.name}
                                </Typography>
                                <Typography variant="h3">{this.props.number}</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar className={classes.avatar} style={{ backgroundColor:`${this.props.color}`}}>
                                    <FaceIcon className={classes.iconavatar} />
                                </Avatar>
                            </Grid>
                        </Grid>
                        <div className={classes.group}>
                            <Typography
                                className={classes.caption}
                                variant="caption"
                            >
                                See the detail
                            </Typography>
                        </div>

                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
export default withStyles(useStyles)(CardHome);
