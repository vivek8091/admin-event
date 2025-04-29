import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:2121/api/admin/adminLogin/", loginData);
      localStorage.setItem("admin", JSON.stringify(res.data.admin));
      console.log("Logged in admin...", res.data.admin);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Login not successfull!!!");
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-control"
                id="password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
