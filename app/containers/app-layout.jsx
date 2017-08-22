import React, {PropTypes} from 'react';
import Layout from 'react-toolbox/lib/layout';
import AppBar from 'react-toolbox/lib/app_bar';
import JobList from '../modules/job-list/job-list-container';
import JobDetail from '../modules/job-detail/job-detail-container';
import {Fragment} from 'redux-little-router';
import {push} from 'redux-little-router';
import {connect} from 'react-redux';

function Giraldi() {
    return (
        <span>Eko by <span style={{fontFamily: "'Pacifico', cursive"}}>Giraldi</span></span>
    )
}

function AppLayout({push}) {

    const handleClick = () => push('/');

    return (
        <div>
            <Layout style={{padding: '2rem'}}>
                <AppBar title={<Giraldi/>} leftIcon='assessment' onLeftIconClick={handleClick}/>
                <Fragment forRoute="/"><JobList/></Fragment>
                <Fragment forRoute="/job-details"><JobDetail/></Fragment>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => state;

const actions = {push};

export default connect(mapStateToProps, actions)(AppLayout)
