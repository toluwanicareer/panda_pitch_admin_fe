import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

export const prList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label='First Name' source="first_name" />
            <TextField source="work_at" />
            <ShowButton />
        </Datagrid>
    </List>
);