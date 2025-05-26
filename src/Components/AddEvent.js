import axios from "axios";
import { useEffect, useState } from "react";

function AddEvent() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async (e) => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:2121/api/events/getEventData/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEventData(res.data.data);
    } catch (error) {
      console.error("Error while fetching events!!!", error);
    }
  };

  const handleTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    const date = new Date();
    date.setHours(hour, minute);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const [events, setEvents] = useState(
    {
      event_title: "",
      event_start_date: "",
      event_end_date: "",
      event_start_time: "",
      event_end_time: "",
      event_price: "",
      event_category_name: "",
      event_location: "",
      event_description: "",
      event_image: "",
    },
    []
  );

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFileChange = (e) => {
    setEvents((prev) => ({
      ...prev,
      event_image: e.target.files[0],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptions = (e) => {
    setSelectedCategory(e.target.value);
    setEvents((prev) => ({
      ...prev,
      event_category_name: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const payload = new FormData();
      payload.append("event_title", events.event_title);
      payload.append("event_start_date", events.event_start_date);
      payload.append("event_end_date", events.event_end_date);
      payload.append("event_start_time", events.event_start_time);
      payload.append("event_end_time", events.event_end_time);
      payload.append("event_price", events.event_price);
      payload.append("event_category_name", events.event_category_name);
      payload.append("event_location", events.event_location);
      payload.append("event_description", events.event_description);
      payload.append("event_image", events.event_image);

      const response = await axios.post(
        "http://localhost:2121/api/events/addEvent/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchEvents();
      alert("Event posted successfully...");
      console.log(response.data);

      setEvents({
        event_title: "",
        event_start_date: "",
        event_end_date: "",
        event_start_time: "",
        event_end_time: "",
        event_price: "",
        event_category_name: "",
        event_location: "",
        event_description: "",
        event_image: "",
      });
      setSelectedCategory("");
      document.getElementById("file").value = null;
    } catch (error) {
      console.error("Error while uploading event!!!", error);
      alert("Failed to post event!!!");
    }
  };

  const deveteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`http://localhost:2121/api/events/deleteEvent/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
      alert("Event deleted successfully...");
    } catch (error) {
      console.error("Error while deleting event!!!", error);
      alert("Failed to delete event");
    }
  };

  return (
    <>
      <div className="event-title mt-3">
        <div className="event-logo">
          <i className="fa-solid fa-calendar-plus"></i>
        </div>
        <h5>Add Event</h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="add-event">
          <div className="mb-3 file-input-container">
            <input
              type="file"
              className="file-input"
              name="event_image"
              onChange={handleFileChange}
              id="file"
            />
            <label htmlFor="file" className="custom-file-label">
              <span className="choose-btn">Choose an Image</span>
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Title"
              name="event_title"
              value={events.event_title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="date"
                id="startDate"
                name="event_start_date"
                value={events.event_start_date}
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="startDate">Start Date</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="date"
                id="endDate"
                name="event_end_date"
                value={events.event_end_date}
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="endDate">End Date</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="time"
                id="startTime"
                name="event_start_time"
                value={events.event_start_time}
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="startTime">Start Time</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="time"
                id="endTime"
                name="event_end_time"
                value={events.event_end_time}
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="endTime">End Time</label>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Price"
              name="event_price"
              value={events.event_price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              id="categoryName"
              name="event_category_name"
              value={selectedCategory}
              onChange={handleOptions}
              aria-label="Default select example"
            >
              <option value="">Select Category</option>
              <option value="festivals">Festival</option>
              <option value="cricket">Cricket</option>
              <option value="party">Party</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Location"
              name="event_location"
              value={events.event_location}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="event_description"
              value={events.event_description}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="floatingTextarea">Description</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-5">
            Post
          </button>
        </div>
      </form>

      <div className="container-fluid">
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>No.</th>
                <th>Profile</th>
                <th>Event Title</th>
                <th>Starting Date</th>
                <th>Ending Date</th>
                <th>Starting Time</th>
                <th>Ending Time</th>
                <th>Price</th>
                <th>Location</th>
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {eventData.length > 0 ? (
                eventData.map((events, index) => (
                  <tr key={events.id} className="align-middle">
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:2121/uploads/${events.event_image}`}
                        alt={events.event_image}
                        className="rounded-circle profile-img"
                      />
                    </td>
                    <td>{events.event_title}</td>
                    <td>{handleDate(events.event_start_date)}</td>
                    <td>{handleDate(events.event_end_date)}</td>
                    <td>{handleTime(events.event_start_time)}</td>
                    <td>{handleTime(events.event_end_time)}</td>
                    <td>{events.event_price?.toLocaleString("en-IN")}</td>
                    <td>{events.event_location}</td>
                    <td>{events.event_category_name}</td>
                    <td>{events.event_description}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash delete-icon"
                        onClick={() => deveteEvent(events.id)}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No events found
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

export default AddEvent;
