import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import {connect} from 'react-redux'
import Alertinfo from "../Alert/Alert";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const awidth = 280
const useStyles = theme=>({
    root:{
        background:'url(/images/bg.png)',
        height: '100vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        overflow:'hidden',
    },
    page:{
        width:360,
        height: 580,
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        position:'absolute',
        left: 'calc(50% - 180px)',
        top: 'calc(50% - 290px)',
        backgroundColor:theme.palette.background.paper,
        borderRadius:20,
        padding:'80px 40px',
        boxSizing: 'border-box',
    },
    avatar:{
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,

    },
    select:{
        width: awidth,
        height:30,
        backgroundColor:'#2f3640',
        color:theme.palette.background.paper,
        padding: 10,
        fontSize:13,
        '&:hover .MuiNativeSelect-icon':{
            color:'#fff'
        },
    },

    icon:{
        backgroundColor:'#fff',
        width:10,
        height:10
    },
    text:{
        width: awidth,
        marginBottom:20,
        fontWeight:800,
        fontSize:20,
        textAlign:'center',
        textTransform:'uppercase'
    },
    inputtext:{
        width:awidth,
        fontSize: 13,
        marginTop: '25px',
        '& ::-webkit-input-placeholder':{
            fontSize:10
        },
        '& >label':{
            fontSize:13
        },
        '& .MuiInputBase-root':{
            fontSize:'13px'
        },
    },
    button:{
        width: awidth,
        height:40,
        background: 'linear-gradient(120deg,#3498db,#8e44ad,#3498db)',
        backgroundSize: '200%',
        marginTop: 50,
        fontSize:13,
    },
})
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            authority:'',
            login:'',
            alertAp:false,
            showPassword: false
        }
        this.onAlert = this.onAlert.bind(this);
        this.offAlert = this.offAlert.bind(this);
    }
    onAlert=()=>{
        this.setState({
            alertAp: true
        });
    }
    offAlert=()=>{
        this.setState({
            alertAp: false
        });
    }
    onChange =  (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    onClick = (e)=>{
        e.preventDefault()
        if(this.props.dataAdmin!==null){
            let data = this.props.dataAdmin
            let loginAcc = data.filter((el)=>(el.userName===this.state.username && el.pw===this.state.password && el.authority===this.state.authority))
            if(loginAcc.length===0){
                this.onAlert()
            }
            else {
                let acc =[
                    {
                        'username':loginAcc[0].fullname
                    },
                    {
                        'authority':loginAcc[0].authority
                    }
                ]
                sessionStorage.setItem('loginAcc',JSON.stringify(acc))

                this.props.getLog()
            }
        }

    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Container>
                    <form className={classes.page} onSubmit={this.onClick}>
                        <Avatar className={classes.avatar}>
                        {/*<CssBaseline/>  */}
                        <VpnKeyRoundedIcon/>
                            </Avatar>
                            <Typography className={classes.text}>
                                Login
                            </Typography>
                            <NativeSelect
                                name="authority"
                                variant='outlined'
                                defaultValue={'DEFAULT'}
                                className={classes.select}
                                // IconComponent={classes.icon}
                                onChange={this.onChange}
                            >
                                <option value="DEFAULT" disabled>--Choose an option--</option>
                                <option value="admin">Admin</option>
                                <option value="teacher(dean)">Teacher(Dean)</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </NativeSelect>
                            <TextField
                                label="Username"
                                placeholder="Username"
                                className={classes.inputtext}
                                name='username'
                                onChange={this.onChange}
                                required
                            />
                            <TextField
                                label="Password"
                                placeholder="Password"
                                type={this.state.showPassword?'text':'password'}
                                className={classes.inputtext}
                                name='password'
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

                            >
                            </TextField>
                            <Button variant="contained" color="primary" type='submit' className={classes.button}>
                             Submit
                            </Button>
                            {this.state.alertAp && <Alertinfo alertAp={this.state.alertAp} offAlert={this.offAlert}  type='error' title={'Login Failed'} message={'Please check your account again '}/>}
                            {console.log(this.state.alertAp)}
                        </form>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        dataAdmin:state.dataAdmin,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getLog:()=>dispatch({type:'LOG'})
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyles)(Login));
