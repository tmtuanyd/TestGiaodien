import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import React from "react";

//change icon edit, delete, save, cancel
const EditButton = ({ onExecute }) => (
    <IconButton style={{color:'#4ecdc4'}} onClick={onExecute} title="Edit row">
        <EditIcon />
    </IconButton>
);
const DeleteButton = ({ onExecute }) => (
    <IconButton style={{color:'#6d6875'}}
                onClick={() => {
                    // eslint-disable-next-line
                    if (window.confirm('Are you sure you want to delete this row?')) {
                        onExecute();
                    }
                }}
                title="Delete row"
    >
        <DeleteIcon />
    </IconButton>
);
const CommitButton = ({ onExecute }) => (
    <IconButton style={{color:'#457b9d'}}  onClick={onExecute} title="Save changes">
        <SaveIcon />
    </IconButton>
);
const CancelButton = ({ onExecute }) => (
    <IconButton style={{color:'#e63946'}} onClick={onExecute} title="Cancel changes">
        <CancelIcon />
    </IconButton>
);
const commandComponents = {
    edit: EditButton,
    delete: DeleteButton,
    cancel: CancelButton,
    commit: CommitButton,
};
export const Command = ({ id, onExecute }) => {
    const CommandButton = commandComponents[id];
    return (
        <CommandButton
            onExecute={onExecute}
        />
    );
};
