import React from 'react'

function LoginPage() {
  return (
    <main className="login-form">
      <div class="mb-3 row">
      <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly className="form-control" ></input>
      </div>
        </div>
        <div class="mb-3 row">
      <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" className="form-control" id="inputPassword"></input>
      </div>
        </div>
  <button className="btn btn-outline-success">Submit</button>

    </main>
  )
}

export default LoginPage