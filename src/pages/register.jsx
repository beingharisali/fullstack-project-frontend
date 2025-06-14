import { useState } from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const regiteredUser = await axios.post(
        "https://fullstack-project-backend-o7sy.onrender.com/register",
        user
      );
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      toast.success("User registered successfully");
    } catch (error) {
      toast.error(error.response.data.msg);
      // setError(error.response.data.error.errors.firstName.message);
    }
  }
  return (
    <div className="w-[50%] mx-auto">
      <h1 className="text-3xl font-semibold">Register User</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={user.firstName}
            onChange={changeHandler}
          />
          {/* {error} */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={user.lastName}
            onChange={changeHandler}
          />
          {/* {error} */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
          {/* {error} */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
          {/* {error} */}
        </Form.Group>

        <button className="btn btn-success" type="submit">
          Register
        </button>
      </Form>
      <p>
        Already have an account? Please <Link to="/">Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
