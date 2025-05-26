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

  const getValidAdminFromSession = () => {
    try {
      const data = sessionStorage.getItem("admin");
      if (!data) return null;
      const admin = JSON.parse(data);
      if (admin?.id && admin?.name && admin?.email) {
        return admin;
      }
    } catch (err) {
      console.error("Error parsing admin data:", err);
    }
    return null;
  };

  useEffect(() => {
    const admin = getValidAdminFromSession();

    if (admin) {
      setAdminDetails({
        name: admin.name || "",
        email: admin.email || "",
      });
      console.log("Admin loaded from sessionStorage:", admin);
    } else {
      alert("Invalid admin session. Please log in again.");
    }

    const newAdmin = JSON.parse(sessionStorage.getItem("admin"));
    console.log(newAdmin);
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
    const admin = getValidAdminFromSession();
    const updatedData = {
      id: admin.id,
      name: adminDetails.name,
      email: adminDetails.email,
    };
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:2121/api/admin/updateAdmin/${updatedData.id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      const updatedAdmin = {
        ...admin,
        name: adminDetails.name,
        email: adminDetails.email,
      };
      sessionStorage.setItem("admin", JSON.stringify(updatedAdmin));
      setAdminDetails({
        name: updatedAdmin.name,
        email: updatedAdmin.email,
      });
      alert("Admin details updated successfully...");
    } catch (error) {}
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const admin = JSON.parse(sessionStorage.getItem("admin"));
    const adminId = admin?.id;
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New password and confirmed passowrd does not match!!!");
      return;
    }

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:2121/api/admin/changePassword/${adminId}`,
        {
          oldPassword: passwords.oldPassword,
          newPassword: passwords.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setPasswords({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      const updatedAdmin = { ...admin, password: passwords.newPassword };
      sessionStorage.setItem("admin", JSON.stringify(updatedAdmin));
      alert(response.data.message);
      console.log(sessionStorage.getItem("admin"));
    } catch (error) {
      console.error("Password change failed:", error);
      alert("Failed to update password. Please check old password.");
    }
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
              <form onSubmit={handlePasswordSubmit}>
                <div className="password-form d-flex gap-3">
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">
                      Old Password
                    </label>
                    <input
                      type="password"
                      id="oldPassword"
                      className="form-control"
                      name="oldPassword"
                      value={passwords.oldPassword}
                      onChange={handlePasswordChange}
                      placeholder="Old Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="form-control"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
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
