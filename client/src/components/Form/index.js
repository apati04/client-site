import React, {Component} from 'react';
import { Icon, Form, Grid, Header, Segment, Button, Message, TextArea } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

class ContactForm extends Component {
  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' color='cyan' textAlign='center'>
            Contact Form
          </Header>
       
        <Form size='large'>
          <Field 
            icon='user' 
            iconPosition='left' 
            name='name' 
            component={InputField} 
            placeholder='Full Name'
            required
            />
            <Field icon='user' iconPosition='left' name='email' component={InputField} placeholder='Email Address'
            required
            />
            <TextArea placeholder="Message" />
            <Form.Button as={Button}>Send</Form.Button>
        </Form>
        
        </Grid.Column>
      </Grid>
     
    )
  }
}

export default reduxForm({
  form: 'Contact'
})(ContactForm);