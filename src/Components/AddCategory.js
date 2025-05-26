import axios from "axios";
import { useEffect, useState } from "react";

function AddCategory() {
  const [catData, setCatData] = useState({
    category_title: "",
    image: "",
  });

  const [catList, setCatList] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async (e) => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:2121/api/category/getCategory/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCatList(res.data.data);
      // console.log(res.data);
    } catch (error) {
      console.error("Error while fetching categories!!!", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setCatData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const payload = new FormData();
      payload.append("category_title", catData.category_title);
      payload.append("image", catData.image);
      await axios.post(
        "http://localhost:2121/api/category/addCategory",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      fetchCategories();

      setCatData({
        category_title: "",
        image: "",
      });

      document.getElementById("file").value = null;
      // console.log(res.data);
      alert("Category posted successfully...");
    } catch (error) {
      console.error("Could not post category!!!");
      alert("Category not posted successfully!!!");
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(
        `http://localhost:2121/api/category/deleteCategory/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchCategories();
      alert("Category deleted successfully...");
    } catch (error) {
      console.error("Error while deleting category!!!", error);
      alert("Failed to delete category");
    }
  };

  return (
    <>
      <div className="event-title mt-3">
        <div className="event-logo">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <h5>Add Category</h5>
      </div>

      <div className="add-category">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 file-input-container">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="file-input"
              id="file"
            />
            <label htmlFor="file" className="custom-file-label">
              <span className="choose-btn">Choose an Image</span>
            </label>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="category_title"
              value={catData.category_title}
              onChange={handleChange}
              placeholder="Category Name"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Post
          </button>
        </form>
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
              {catList.map((user, index) => (
                <tr key={user.id || index} className="align-middle">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:2121/uploads/${user.image}`}
                      alt="Profile"
                      className="rounded-circle cat-img"
                    />
                  </td>
                  <td>{user.category_title}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash delete-icon"
                      onClick={() => deleteCategory(user.id)}
                    ></i>
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

export default AddCategory;
