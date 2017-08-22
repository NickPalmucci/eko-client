import React from 'react';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

export default class JobApplication extends React.Component {
    state = { name: '', phone: '', email: '', address: '' };

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    render() {
        return (
            <div style={{padding: '1rem 5rem'}}>
                <section>
                    <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                    <Input type='email' label='Email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                    <Input type='tel' label='Phone' name='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
                    <Input type='text' label='Address' name='address' value={this.state.address} onChange={this.handleChange.bind(this, 'address')}/>
                </section>
                <Button primary raised label={'Submit'} style={{marginTop: '2rem'}}/>
            </div>
        )
    }
}
