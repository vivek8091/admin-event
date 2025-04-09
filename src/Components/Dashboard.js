import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  const fetchRegisteredUsers = async () => {
    try {
      const res = await axios.get("http://localhost:2121/api/users/getUsers/");
      console.log("Fetched Users", res.data);
      
      setUsers(res.data.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  // Function to toggle block/unblock status
  const toggleBlockStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };
  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-borderless text-center">
            <thead className="table-dark">
              <tr>
                <th>No.</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id} className="align-middle">
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:2121/uploads/${user.image}`}
                        alt={user.name}
                        className="rounded-circle profile-img"
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.mobile_no}</td>
                    <td>
                      <button
                        className={`btn btn-sm ${
                          user.isBlocked ? "btn-success" : "btn-danger"
                        }`}
                        onClick={() => toggleBlockStatus(user.id)}
                      >
                        {user.isBlocked ? "Unblock" : "Block"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
