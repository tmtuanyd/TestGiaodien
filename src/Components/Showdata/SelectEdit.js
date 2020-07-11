import TableCell from "@material-ui/core/TableCell";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from "@material-ui/core/styles";
import {TableEditRow} from "@devexpress/dx-react-grid-material-ui";
import React from "react";

const styles = theme => ({
    lookupEditCell: {
        padding: theme.spacing(1),
    },
    dialog: {
        width: 'calc(100% - 16px)',
    },
    inputRoot: {
        width: '100%',
    },
    selectMenu: {
        position: 'absolute !important',
    },
});
const availableValues = {
    institute: ['mechanical engineering', 'foreign language', 'chemical engineering', 'information technology', 'automatic control','microbiology and biotechnology'],
    authority: ['teacher(dean)', 'teacher']
};
const LookupEditCellBase = ({availableColumnValues, value, onValueChange, classes}) => (
    <TableCell
        className={classes.lookupEditCell}
    >
        <Select
            onChange={event => onValueChange(event.target.value)}
            value={value}
            MenuProps={{
                className: classes.selectMenu,
            }}
            input={(
                <Input
                    classes={{ root: classes.inputRoot }}
                />
            )}
        >
            {availableColumnValues.map(item => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    </TableCell>
);
export const LookupEditCell = withStyles(styles, { name: 'ControlledModeDemo' })(LookupEditCellBase);
export const EditCell = (props) => {
    const { column } = props;
    const availableColumnValues = availableValues[column.name];
    if (availableColumnValues) {
        return <LookupEditCell {...props} availableColumnValues={availableColumnValues} />;
    }
    return <TableEditRow.Cell {...props} />;
};