function AddEvent() {
  return (
    <>
      <div className="event-title mt-3">
        <div className="event-logo">
          <i class="fa-solid fa-calendar-plus"></i>
        </div>
        <h5>Add Event</h5>
      </div>

      <div className="add-event">
        <div className="mb-3 file-input-container">
          <input type="file" className="file-input" id="file" />
          <label for="file" class="custom-file-label">
            {/* <span class="file-name">No file chosen</span> */}
            <span class="choose-btn">Choose an Image</span>
          </label>
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Title" className="form-control" />
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="date" id="startDate" className="form-control" />
            <label htmlFor="startDate">Start Date</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="date" id="endDate" className="form-control" />
            <label htmlFor="endDate">End Date</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="time" id="startTime" className="form-control" />
            <label htmlFor="startTime">Start Time</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="time" id="endTime" className="form-control" />
            <label htmlFor="endTime">End Time</label>
          </div>
        </div>
        <div className="mb-3">
          <input type="number" placeholder="Price" className="form-control" />
        </div>
        <div className="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="1">Festival</option>
            <option value="2">Cricket</option>
            <option value="3">Party</option>
          </select>
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Location" className="form-control" />
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Description</label>
        </div>
        <div className="mb-3 file-input-container">
          <input type="file" className="file-input" id="file" />
          <label for="file" class="custom-file-label">
            {/* <span class="file-name">No file chosen</span> */}
            <span class="choose-btn">Choose an Image</span>
          </label>
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Title" className="form-control" />
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="date" id="startDate" className="form-control" />
            <label htmlFor="startDate">Start Date</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="date" id="endDate" className="form-control" />
            <label htmlFor="endDate">End Date</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="time" id="startTime" className="form-control" />
            <label htmlFor="startTime">Start Time</label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <input type="time" id="endTime" className="form-control" />
            <label htmlFor="endTime">End Time</label>
          </div>
        </div>
        <div className="mb-3">
          <input type="number" placeholder="Price" className="form-control" />
        </div>
        <div className="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="1">Festival</option>
            <option value="2">Cricket</option>
            <option value="3">Party</option>
          </select>
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Location" className="form-control" />
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Description</label>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
