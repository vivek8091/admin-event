import axios from "axios";
import adminLogo from "../assets/admin-logo.jpg";
import { useEffect, useState } from "react";

function UserProfile() {
  const [activeForm, setActiveForm] = useState("personal");

  const [adminDetails, setAdminDetails] = useState({
    name: "",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (adminData) {
      const admin = JSON.parse(adminData);
      setAdminDetails({
        name: admin.name || "",
        email: admin.email || "",
      });
    }
  }, []);

  const handleAdminDetailsChange = (e) => {
    setAdminDetails({
      ...adminDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleAdminDetailsSubmit = async (e) => {
    e.preventDefault();
    const adminData = localStorage.getItem("admin");
    const parsedAdmin = JSON.parse(adminData);
    const updatedData = {
      id: parsedAdmin.id,
      name: adminDetails.name,
      email: adminDetails.email,
    };
    try {
      const res = await axios.put(
        `http://localhost:2121/api/admin/updateAdmin/${updatedData.id}`,
        updatedData
      );
      console.log(res.data);
      const updatedAdmin = {
        ...parsedAdmin,
        name: adminDetails.name,
        email: adminDetails.email,
      };
      localStorage.setItem("admin", JSON.stringify(updatedAdmin));
      setAdminDetails({
        name: updatedAdmin.name,
        email: updatedAdmin.email,
      });
      alert("Admin details updated successfully...");
    } catch (error) {}
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
              <form onSubmit={handleAdminDetailsSubmit}>
                <div className="details-from d-flex gap-5">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={adminDetails.name}
                      onChange={handleAdminDetailsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={adminDetails.email}
                      onChange={handleAdminDetailsChange}
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
