import axios from "axios";
import { useState } from "react";

function AddGallary() {
  const [gallaryData, setGallaryData] = useState({
    gallary_title: "",
    gallary_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGallaryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setGallaryData((prev) => ({
      ...prev,
      gallary_image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const gallary = new FormData();
      gallary.append("gallary_title", gallaryData.gallary_title);
      gallary.append("gallary_image", gallaryData.gallary_image);
      const res = await axios.post(
        "http://localhost:2121/api/gallary/addGallary/",
        gallary,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setGallaryData({
        gallary_title: "",
        gallary_image: "",
      });

      document.getElementById("file").value = null;
      console.log(res.data);
      alert("Data posted successfully...");
    } catch (error) {
      console.error("Error while posting gallary data!!!", error);
      alert("Could not post gallary data...");
    }
  };

  return (
    <>
      <div className="event-title mt-3">
        <div className="event-logo">
          <i className="fa-solid fa-images"></i>
        </div>
        <h5>Add Gallary</h5>
      </div>

      <div className="add-gallary">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 file-input-container">
            <input
              type="file"
              name="gallary_image"
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
              placeholder="Gallary Title"
              name="gallary_title"
              value={gallaryData.gallary_title}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default AddGallary;
