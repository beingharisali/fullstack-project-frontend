import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const loginUser = await axios.post(
        "https://fullstack-project-backend-o7sy.onrender.com/login",
        user
      );
      setUser({
        email: "",
        password: "",
      });
      toast.success("User logged in");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
  return (
    <div className="w-[50%] mx-auto">
      <h1 className="text-3xl font-semibold">Login User</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
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
        </Form.Group>

        <button className="btn btn-success" type="submit">
          Login
        </button>
      </Form>
      <p>
        Don't have an account? Please <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
