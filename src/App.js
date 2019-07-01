import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { prList } from './prList';
import {prShow} from './prShow';
import {mediaCreate} from './mediaCreate';
import {clientCreate} from './clientCreate'

const dataProvider = simpleRestProvider('http://localhost:8000/api');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="prs" show={prShow} list={prList} />
        <Resource name="pitches" />
        <Resource name="media_lists"  create={mediaCreate}/>
        <Resource name="clients" create={clientCreate} />
        <Resource name="journalists" />
    </Admin>
);

export default App;