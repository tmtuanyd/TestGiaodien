import React, {Component} from 'react';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FaceIcon from '@material-ui/icons/Face';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

export const cardDetail=[
    {
        name:"TEACHER",
        color:'#f25f5c',
        background:'#f8ad9d',
        number:15,
        icon:<SupervisedUserCircleIcon style={{height: 32,width: 32}}/>
    },
    {
        name:"STUDENT",
        color:'#2ec4b6',
        background:'#83c5be',
        number:200,
        icon:<FaceIcon style={{height: 32,width: 32}}/>
    },
    {
        name:"CLASS",
        color:'#0077b6',
        background:'#90e0ef',
        number:20,
        icon:<CastForEducationIcon style={{height: 32,width: 32}}/>
    }
]