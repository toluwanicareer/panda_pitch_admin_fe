import React from 'react';
import { Show,Datagrid,ReferenceArrayField,ChipField, SingleFieldList, TextField,RichTextField,TabbedShowLayout, Tab } from 'react-admin';
import  CreateMediaButton  from './createMediaButton'
import CreateClientButton from './createClientButton'
export const prShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
        	<Tab label="User Info">
	            <TextField source="first_name" />
	            <TextField source="last_name" />
	            <RichTextField source="email" />
	        </Tab>
	        <Tab label="Pitches">
	        	<ReferenceArrayField reference="pitches" source="pitches">
	        		<SingleFieldList>
	        			<ChipField source="title" />
	        		</SingleFieldList>
	        	</ReferenceArrayField>
	        </Tab>
	        <Tab label="Media Lists">
	        	<ReferenceArrayField reference="media_lists" source="media_lists">
	        		<Datagrid>
                        <ChipField source="name" />                        
                    </Datagrid>
	        	</ReferenceArrayField>
	        	<CreateMediaButton />
	        </Tab>	
	        <Tab label="Client Lists">
	        	<ReferenceArrayField reference="clients" source="clients">
	        		<SingleFieldList>
	        			<ChipField source="name" />
	        		</SingleFieldList>
	        	</ReferenceArrayField>
	        	<CreateClientButton />
	        </Tab>	
        </TabbedShowLayout>
    </Show>
);