import React from 'react';
import Layout from 'react-toolbox/lib/layout';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

export default function JobList({jobList, select, push}) {

    const generateList = jobList => {
        let items = [];
        for (let i = 0; i < jobList.length; i++) {
            let data = jobList[i];

            const handleClick = () => {
                select(i);
                push('/job-details');
            };

            items[i] = (
                <ListItem
                    key={i}
                    caption={data.position}
                    legend={data.name}
                    onClick={handleClick}
                    rightIcon="create"
                />
            )
        }
        return items;
    };

    const list = generateList(jobList);

    return(
        <Card style={{padding: '2rem'}}>
            <div style={{borderBottom: 'solid black 2px'}}>
                <CardTitle title="Teaching Postions Hiring Now" subtitle="New York City Area"/>
            </div>
            <List selectable ripple>
                {list}
            </List>
        </Card>
    )
}