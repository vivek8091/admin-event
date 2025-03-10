
const catData = [
    {
        id: 1,
        image: "https://i.pravatar.cc/50?img=1",
        name: "cricket", 
    },
    {
        id: 2,
        image: "https://i.pravatar.cc/50?img=3",
        name: "cristmas",
    },
    {
        id: 3,
        image: "https://i.pravatar.cc/50?img=5",
        name: "food zone",
    },
    {
        id: 4,
        image: "https://i.pravatar.cc/50?img=1",
        name: "festival",
    },
    {
        id: 5,
        image: "https://i.pravatar.cc/50?img=6",
        name: "party",
    },
];


function AddCategory() {

    // const [categories] = useState(catData);
  return (
    <>
      <div className="event-title mt-3">
        <div className="event-logo">
          <i class="fa-solid fa-layer-group"></i>
        </div>
        <h5>Add Category</h5>
      </div>

      <div className="add-category">
        <div className="mb-4 file-input-container">
          <input type="file" className="file-input" id="file" />
          <label for="file" class="custom-file-label">
            <span class="choose-btn">Choose an Image</span>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Category Name"
            className="form-control"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">
          Post
        </button>
      </div>

      <div className="cat-table mt-5">
        <div className="table-responsive">
          <table className="table table-borderless text-center">
            <thead className="table-dark">
              <tr>
                <th>No.</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {catData.map((user, index) => (
                <tr key={user.id} className="align-middle">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.image}
                      alt="Profile"
                      className="rounded-circle cat-img"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td><i class="fa-solid fa-trash delete-icon"></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
