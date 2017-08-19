import React from 'react';
import Layout from 'react-toolbox/lib/layout';
import Card from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import {Link} from 'redux-little-router';

export default function Example({clicked, count, click, addCount, minusCount}) {

    return(
        <Layout>
            <Card>
                <Button label={'Clicked ?'} onClick={click}/>
                <Button label={'add to count'} onClick={addCount}/>
                <Button label={'subtract'} onClick={minusCount}/>
                <div>Clicked = {clicked ? 'true' : 'false'}</div>
                <div>Count = {count}</div>
                <Link href="/other-page">Link</Link>
            </Card>
        </Layout>
    )
}