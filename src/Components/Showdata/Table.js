import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import {
    Grid,
    PagingPanel, SearchPanel,
    Table,
    TableEditColumn,
    TableEditRow, TableFilterRow,
    TableHeaderRow,
    Toolbar
} from '@devexpress/dx-react-grid-material-ui';
import {connect} from "react-redux";
import {
    EditingState, FilteringState, IntegratedFiltering,
    IntegratedPaging,
    IntegratedSorting,
    PagingState,
    SearchState,
    SortingState
} from "@devexpress/dx-react-grid";
import {Getter,} from '@devexpress/dx-react-core';
import {Command} from "./ChangeIcon";
import {EditCell} from "./SelectEdit";
import {TableComponent} from "./TableStyle";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";




const columns = [
    { name: 'userName', title: 'User Name' },
    { name: 'fullname', title: 'Full Name' },
    { name: 'institute', title: 'Institue' },
    { name: 'authority', title: 'Authority' },
];


const getRowId = row => row.id;

class Tableshow extends Component {
    constructor(props) {
        super(props);
        this.state=({
            // rows:[],
            rows:this.props.data,
            pageSizes:[5, 10, 15, 0],
            tableColumnExtensions:[
                { columnName: 'userName',width: 230 },
                { columnName: 'fullname',width: 260},
                { columnName: 'institute',width: 260 },
                { columnName: 'authority',width: 250, align: 'center' }
            ],
                check:false,
        })
    }
    // componentDidMount() {
    //     if(this.state.rows!==this.props.data.filter((el)=>el.authority==='teacher(dean)'||el.authority==='teacher')){
    //         return this.setState({rows:this.props.data.filter((el)=>el.authority==='teacher(dean)'||el.authority==='teacher')})
    //     }
    // }

    render() {
        const deleteRows = (deletedIds) => {
            const rowsForDelete = this.state.rows.slice();
            deletedIds.forEach((rowId) => {
                const index = rowsForDelete.findIndex(row => row.id === rowId);
                if (index > -1) {
                    rowsForDelete.splice(index, 1);
                }
            });
            return rowsForDelete;
        };
        const commitChanges = ({ changed, deleted }) => {
            let changedRows;
            if (changed) {
                changedRows = this.state.rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
            }
            if (deleted) {
                changedRows = deleteRows(deleted);
            }
            this.setState({rows:changedRows});
            this.props.dataUpdate(changedRows)
        };
        const checkFilter = ({handleChange})=>{
            handleChange=(e)=>(this.setState({check:e.target.checked}))
            return (
                <Tooltip title="Row Filter" aria-label="row filter">
                    <Switch
                        checked={this.state.check}
                        onChange={handleChange}
                        name="check"
                    />
                </Tooltip>
                )

        }
        return (
            <Paper>
                <Grid
                    rows={this.state.rows}
                    columns={columns}
                    getRowId={getRowId}
                >

                    <SearchState
                    />
                    <SortingState
                        defaultSorting={[{ columnName: 'userName', direction: 'asc' }]}
                    />
                    <PagingState
                        defaultCurrentPage={0}
                        defaultPageSize={5}
                    />
                    <FilteringState defaultFilters={[]} style={{background:'none'}}/>
                    <IntegratedPaging />
                    <IntegratedFiltering />
                    <IntegratedSorting/>
                    <EditingState
                        onCommitChanges={commitChanges}
                    />

                    <IntegratedFiltering />
                    <Table
                        columnExtensions={this.state.tableColumnExtensions}
                        tableComponent={TableComponent}
                    />
                    <TableHeaderRow showSortingControls/>
                    {/*<Toolbar/>*/}
                    <Toolbar flexibleSpaceComponent={checkFilter}/>
                    <PagingPanel
                        pageSizes={this.state.pageSizes}
                    />
                    <TableEditRow cellComponent={EditCell}/> {/*select in edit*/}
                    <TableEditColumn
                        showEditCommand
                        showDeleteCommand
                        commandComponent={Command}//change icon edit .....
                    />
                    <SearchPanel />
                    {(this.state.check)?<TableFilterRow />:null}
                    <Getter
                        name="tableColumns"
                        computed={({ tableColumns }) => {
                            // debugger
                            const result = [
                                ...tableColumns.filter(c => c.type !== TableEditColumn.COLUMN_TYPE),
                                { key: 'editCommand', type: TableEditColumn.COLUMN_TYPE,width: 100 }
                            ];
                            return result;
                        }
                        }
                    />
                </Grid>
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
export default connect(mapStateToProps,mapDispatchToProps) (Tableshow);