import { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Vishal",
    email: "vishalbavaliya21@gmail.com",
    gender: "male",
    phone: "7755934563",
    image: "https://i.pravatar.cc/50?img=1",
    isBlocked: true,
  },
  {
    id: 2,
    name: "uday",
    email: "u@gmail.com",
    gender: "male",
    phone: "7777777777",
    image: "https://i.pravatar.cc/50?img=2",
    isBlocked: true,
  },
  {
    id: 3,
    name: "aj",
    email: "ajay@gmail.com",
    gender: "male",
    phone: "9999999999",
    image: "https://i.pravatar.cc/50?img=3",
    isBlocked: true,
  },
  {
    id: 4,
    name: "jani",
    email: "jani@gmail.com",
    gender: "male",
    phone: "7852152960",
    image: "https://i.pravatar.cc/50?img=4",
    isBlocked: true,
  },
  {
    id: 5,
    name: "titu",
    email: "titu@gmail.com",
    gender: "male",
    phone: "7852152969",
    image: "https://i.pravatar.cc/50?img=5",
    isBlocked: true,
  },
  {
    id: 6,
    name: "khushbu",
    email: "khushi@gmail.com",
    gender: "Female",
    phone: "1234567891",
    image: "https://i.pravatar.cc/50?img=6",
    isBlocked: true,
  },
];

function Dashboard() {
  const [users, setUsers] = useState(initialUsers);

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
              {users.map((user, index) => (
                <tr key={user.id} className="align-middle">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.image}
                      alt="Profile"
                      className="rounded-circle profile-img"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
