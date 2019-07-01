import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const PitchList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="author_id" />
        </Datagrid>
    </List>
);