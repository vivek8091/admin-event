function AddGallary() {
  return (
    <>
      <div className="event-title mt-3">
        <div className="event-logo">
          <i class="fa-solid fa-images"></i>
        </div>
        <h5>Add Gallary</h5>
      </div>

      <div className="add-gallary">
        <div className="mb-4 file-input-container">
          <input type="file" className="file-input" id="file" />
          <label for="file" class="custom-file-label">
            <span class="choose-btn">Choose an Image</span>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Gallary Title"
            className="form-control"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">
          Post
        </button>
      </div>
    </>
  );
}

export default AddGallary;
