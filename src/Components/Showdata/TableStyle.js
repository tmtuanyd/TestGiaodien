import {Table} from "@devexpress/dx-react-grid-material-ui";
import {withStyles} from "@material-ui/core/styles";
import React from "react";

const styles = theme => ({
    tableStriped: {
        '& tbody tr :not(:first-of-type)':{
            textTransform:'capitalize'
        },
        // '& tbody tr:nth-of-type(even)': {
        //     backgroundColor: '#e5e5e5',
        // },
        // '& thead':{
        //     backgroundColor: '#00b4d8',
        // }
    },
});

const TableComponentBase = ({ classes, ...restProps }) => (
    <Table.Table
        {...restProps}
        className={classes.tableStriped}
    />
);

export const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);