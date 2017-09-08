import React from 'react';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

export default function JobList({jobList, select, push}) {

    const generateList = list => {
        let items = [];
        for (let i = 0; i < list.length; i++) {
            let data = list[i];

            const handleClick = () => {
                select(i);
                push('/job-details');
            };

            items[i] = (
                <ListItem
                    key={i}
                    caption={data.description}
                    legend={data.location}
                    onClick={handleClick}
                    rightIcon="create"
                />
            )
        }
        return items;
    };

    const jobs = generateList(jobList);

    return(
        <Card style={{padding: '2rem'}}>
            <div style={{borderBottom: 'solid black 2px'}}>
                <CardTitle title="Teaching Postions Hiring Now" subtitle="New York City Area"/>
            </div>
            <List selectable ripple>
                {jobs}
            </List>
        </Card>
    )
}