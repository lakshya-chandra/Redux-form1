import React from 'react'
import { Field, reduxForm} from 'redux-form'

import RenderField from './RenderField'
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.save = this.save.bind(this);
  }
  save(values) {
    console.log('values =', values);
    this.props.submitForm(values);
  }
  render() {
    return (
      <form onSubmit = {this.props.handleSubmit(this.save)}>
        <div>
          <label htmlFor = "firstName">First Name</label>
          <Field
            name = "firstName"
            component = {RenderField}
            type = "text"
            validate = {[required, maxLength15, minLength2]}
          />
        </div>
        <div>
          <label htmlFor = "Age">Age</label>
          <Field 
          name = "Age" 
          component = {RenderField} 
          type = "number"
          validate = {[required, number, minValue13]}
          warn = {tooYoung}
          />
        </div>
        <div>
          <label htmlFor = "email">Email</label>
          <Field 
          name = "email" 
          component = {RenderField}
          type = "email" 
          validate = {email}
          warn = {aol}
        />
          <div>
        <label>Gender</label>
        <div>
          <label>
            <Field
              name = "gender"
              component = "input"
              type = "radio"
              value = "male"
            />
            Male
          </label>
          <label>
            <Field
              name = "gender"
              component = "input"
              type = "radio"
              value = "female"
            />
            Female
          </label>
        </div>
        <div>
          <div>
           <label>City</label>
          </div>
            <Field name = "City" component = "select">
              <option value = "Select">Select City</option>
              <option value = "Lucknow">Lucknow</option>
              <option value = "Pune">Pune</option>
              <option value = "Goa">Goa</option>
            </Field>
          </div>
          </div>
        </div>
        <button type = "submit" >Submit</button>
      </form>
    );
  }
}
export default reduxForm({
  form: 'form',
})(ContactForm)