import React from 'react'
import { useFormState } from 'react-hook-form'

function RegisterPage() {
  /* // const { register, handleSubmit, useFormStatete: { errors } } = useForm()

// const onUserSubmit = (user) => {
//   console.log(user) */
  // }
  return (
    <main className="register-form">
      <form className="row g-3 needs-validation" >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">Name and Lastname</label>
          <input type="text" className="form-control" id="validationCustom01" required></input>
          <div clasNames="valid-feedback">
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
            <div className="invalid-feedback">
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Password</label>
          <input type="text" className="form-control" id="validationCustom02" required></input>
          <div className="valid-feedback">
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">Photo</label>
          <input type="file" accept=".jpg, .jpeg, .png" className="form-control" id="validationCustom03" required></input>
          <div className="invalid-feedback">
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">Email</label>
          <input type="email" className="form-control" id="validationCustom04" required></input>
          <div className="invalid-feedback">
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </main>
  )
}

export default RegisterPage