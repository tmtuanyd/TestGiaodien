import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import { KeyboardDatePicker} from "@material-ui/pickers";
import Select from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { v4 as uuidv4 } from 'uuid'
import {compose} from "redux";
import {connect} from "react-redux";
import Alertinfo from "../Alert/Alert";


const useStyles = theme=>({
    paper: {
        marginTop: theme.spacing(2),
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:'#fafafa',
        padding:'30px 0',
        borderRadius:5,
        '& label.Mui-focused': {
            color: '#051622',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#99DDFF',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#1BA098',
            },
            '&:hover fieldset': {
                borderColor: '#8ecde9',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#051622',
            },
        },
    },
    form: {
        width: '60%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: '#1BA098'
    },
})
class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state=({
            showPassword: false,
            selectDate:new Date(),
            username:'',
            password:'',
            authority:'',
            institute:'',
            firstname:'',
            lastname:'',
            fullname:'',
            id:'',
            selectedOption:null,
            alertAp:false,
            alertSu:false,
        })
    }
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleDateChange = (e) =>{
         this.setState({selectDate:e})
        console.log(this.state.selectDate)

    }
    onAlert=()=>{
        this.setState({
            alertAp: true,
        });
    }
    onAlertSu=()=>{
        this.setState({
            alertSu:true
        });
    }
    offAlert=()=>{
        this.setState({
            alertAp: false,
            alertSu:false
        });
    }
    onClick = (e)=> {
        e.preventDefault()
        const {username,password,authority,fullname,institute}=this.state
        if(authority.length===0||institute.length===0){
            this.onAlert()
        }
        else{
            const tempdata=this.props.data
            console.log(tempdata)
            if(tempdata!==null){
                if(tempdata.filter((el)=>el.userName===username).length>0||username==='tmtuanyd'){
                    this.onAlert()
                }
                else {
                    const newuser = {
                        id: uuidv4(),
                        userName: username,
                        pw: password,
                        authority: authority,
                        fullname: fullname,
                        institute: institute
                    }
                    tempdata.push(newuser)
                    this.props.dataUpdate(tempdata)
                    this.onAlertSu()
                }
            }


        }
    }
    onChange =  (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        const {classes}=this.props
        console.log(this.state)
        return (
            <Paper component="main">
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={this.onClick}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstname"
                                    variant="outlined"
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Last Name"
                                    name="lastname"
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Full Name"
                                    name="fullname"
                                    onChange={this.onChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="User Name"
                                    name="username"
                                    onChange={this.onChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={this.state.showPassword?'text':'password'}
                                    onChange={this.onChange}
                                    required
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth >
                                    <InputLabel>Authority</InputLabel>
                                    <Select
                                        name='authority'
                                        value={this.state.authority}
                                        onChange={this.onChange}
                                        label="Authority"
                                    >
                                        <MenuItem value="teacher(dean)">Teacher(Dean)</MenuItem>
                                        <MenuItem value="teacher">Teacher</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth >
                                    <InputLabel>Institute</InputLabel>
                                    <Select
                                        name='institute'
                                        value={this.state.institute}
                                        onChange={this.onChange}
                                        label="Institute"
                                    >
                                        <MenuItem value="mechanical engineering">Mechanical Engineering</MenuItem>
                                        <MenuItem value="foreign language">Foreign Language</MenuItem>
                                        <MenuItem value="chemical engineering">Chemical Engineering</MenuItem>
                                        <MenuItem value="information technology">Information Technology</MenuItem>
                                        <MenuItem value="automatic control">TAutomatic Control</MenuItem>
                                        <MenuItem value="microbiology and biotechnology">Microbiology And Biotechnology</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                    <KeyboardDatePicker
                                        autoOk
                                        variant="inline"
                                        inputVariant="outlined"
                                        label="Date of Birth"
                                        format="dd/MM/yyyy"
                                        value={this.state.selectDate}
                                        InputAdornmentProps={{ position: "start" }}
                                        onChange={this.handleDateChange}
                                        fullWidth
                                    />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            ADD NEW
                        </Button>
                        {this.state.alertAp && <Alertinfo alertAp={this.state.alertAp} offAlert={this.offAlert}  type='error' title={'Add Failed'} message={'Please check information again or username was existed'}/>}
                        {this.state.alertSu && <Alertinfo alertAp={this.state.alertSu} offAlert={this.offAlert}  type='success' title={'Success'} message={'Add Success User'}/>}
                    </form>
                </div>
            </Paper>
        );
    }
}
const mapStateToProps = (state)=> {
    return {
        data: state.dataTeacher
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dataUpdate:(dataUpdate)=>dispatch({type:'UPDATE',dataUpdate})
    }
}
export default compose(connect(mapStateToProps,mapDispatchToProps),withStyles(useStyles))(AddNew)