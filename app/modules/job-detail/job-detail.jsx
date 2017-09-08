import React from 'react';
import Card from 'react-toolbox/lib/card';
import Application from '../job-application/job-application';

export default function JobDetail({job}) {
const {id, created, location, description} = job;

    return (
        <Card>
            <div style={{padding: '4rem 4rem 0'}}>
                <h1>{id}</h1>
                <h2>{created}</h2>
                <h3>{location}</h3>
                <p>{description}</p>
            </div>

            <Application/>
        </Card>
    )
}