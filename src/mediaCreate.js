import React from 'react';
import { ReferenceInput, SimpleForm, TextInput, Create
	 ,ReferenceArrayInput, SelectArrayInput, SelectInput } from 'react-admin';


export const mediaCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceArrayInput label="Journalists" reference="journalists" source="journalists">
                <SelectArrayInput optionText="first_name" />
                   
            </ReferenceArrayInput>
            <ReferenceInput label="Owner" source="owner_id" reference="prs">
			    <SelectInput optionText="first_name" />
			</ReferenceInput>
        </SimpleForm>
    </Create>
);