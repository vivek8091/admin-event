import adminLogo from "../assets/admin-logo.jpg";
import { useState } from "react";

function UserProfile() {
  const [activeForm, setActiveForm] = useState("personal");

  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleUserDetailsChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="user-account">
        <div className="user-logo">
          <img src={adminLogo} alt="admin_logo" />
        </div>

        <div className="buttons">
          <button
            className="btn btn-dark"
            onClick={() => setActiveForm("personal")}
          >
            Personal Details
          </button>
          <button
            className="btn btn-dark"
            onClick={() => setActiveForm("password")}
          >
            Change Password
          </button>
        </div>

        <div className="card p-4 mt-5">
          {activeForm === "personal" ? (
            <div>
              <h6 className="mb-5">Personal Details</h6>
              <form>
                <div className="details-from d-flex gap-5">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={userDetails.name}
                      onChange={handleUserDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={userDetails.email}
                      onChange={handleUserDetailsChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary float-end mt-2"
                >
                  Update
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h6 className="mb-5">Change Password</h6>
              <form>
                <div className="password-form d-flex gap-3">
                  <div className="mb-3">
                    <label className="form-label">Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="oldPassword"
                      value={passwords.oldPassword}
                      onChange={handlePasswordChange}
                      placeholder="Old Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={passwords.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary float-end mt-2"
                >
                  Update
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
