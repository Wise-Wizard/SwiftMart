import React from "react";
import { Form } from "react-bootstrap";
function FormComponent() {
  return (
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true"></input>

      <div class="login">
        <Form>
          <label for="chk" aria-hidden="true">
            Log in
          </label>
          <input
            class="input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          ></input>
          <input
            class="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          ></input>
          <button>Log in</button>
        </Form>
      </div>

      <div class="register">
        <Form>
          <label for="chk" aria-hidden="true">
            Register
          </label>
          <input
            class="input"
            type="text"
            name="txt"
            placeholder="Username"
            required=""
          ></input>
          <input
            class="input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          ></input>
          <input
            class="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          ></input>
          <button>Register</button>
        </Form>
      </div>
    </div>
  );
}
export default FormComponent;
