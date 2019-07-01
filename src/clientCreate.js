import React from 'react';
import { ReferenceInput, SimpleForm, TextInput, Create,
	SelectInput} from 'react-admin';


export const clientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Pr" source="pr_id" reference="prs">
			    <SelectInput optionText="first_name" />
			</ReferenceInput>
        </SimpleForm>
    </Create>
);