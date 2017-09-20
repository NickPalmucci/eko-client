import React from 'react';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import Button from 'react-toolbox/lib/button';

export default class JobApplication extends React.Component {
    jobOptions = [{value: 'fulltime', label: 'Full Time'}, {value: 'parttime', label: 'Part Time'}];

    state = { name: '', email: '', job: '' };

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    handleSubmit = () => {
        this.props.submitApplication(this.state)
    };

    handleDropChange = value => {
        this.setState({job: value});
    };

    componentDidUpdate() {
        this.props.updateForm(this.state)
    }

    render() {
        return (
            <div style={{padding: '1rem 5rem'}}>
                <section>
                    <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                    <Input type='email' label='Email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                    <Dropdown
                        auto={false}
                        source={this.jobOptions}
                        onChange={this.handleDropChange}
                        label='Select Job'
                        value={this.state.job}
                    />
                    <Input type='text' multiline label='Resume' name='resume' value={this.state.resume} onChange={this.handleChange.bind(this, 'resume')}/>
                    <Input type='text' multiline label='Cover Letter' name='cover_letter' value={this.state.cover_letter} onChange={this.handleChange.bind(this, 'cover_letter')}/>
                </section>
                <Button primary raised label={'Submit'} style={{marginTop: '2rem'}} onClick={this.handleSubmit}/>
            </div>
        )
    }
}
