import Select from "react-select";
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {compose} from "redux";
import {connect} from "react-redux";



const options = [
    { value: 'mechanical engineering', label: 'Mechanical Engineering' },
    { value: 'foreign language', label: 'Foreign Language' },
    { value: 'chemical engineering', label: 'Chemical Engineering' },
    { value: 'information technology', label: 'Information Technology' },
    { value: 'automatic control', label: 'Automatic Control' },
    { value: 'microbiology and biotechnology', label: 'Microbiology And Biotechnology' }
]
const styles = theme => ({
    select: {
        width: '450px',
        margin:'0 20px'
    },
});


class SelectSearch extends Component {
    constructor(props) {
        super(props);
        this.state=({
            selectedOption:null
        })
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // this.props.getSelect(selectedOption)
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const {classes} = this.props
        const { selectedOption } = this.state;
        return (
            <Select
                onChange={this.handleChange}
                value={selectedOption}
                isMulti
                name="colors"
                options={options}
                className={classes.select}
                classNamePrefix="select"
                placeholder="Select Institute"
                isSearchable
            >

            </Select>
        );
    }
}
// const mapStateToProps = (state)=>{
//     return {
//         data:state.data,
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         getSelect:(dataSelect)=>dispatch({type:'SELECT',dataSelect})
//     }
// }
export default  withStyles(styles)(SelectSearch);
// export default compose(connect(null, mapDispatchToProps), withStyles(styles))(SelectSearch);
