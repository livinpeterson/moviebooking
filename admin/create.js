import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { useSelector } from "react-redux";

function CreateMovieBooking() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");
  const [language, setLanguage] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [showtime, setShowtime] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  var user = useSelector((store) => store.auth.user);
  var navigate = useNavigate();

  function addPost() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("director", director);
    formData.append("genre", genre);
    formData.append("release_date", releaseDate);
    formData.append("duration", duration);
    formData.append("language", language);
    formData.append("seat_number", seatNumber);
    formData.append("showtime", showtime);
    formData.append("price", price);
    formData.append("image", image);

    axios
      .post(
        "http://127.0.0.1:8000/admin/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + user.token,
          },
        }
      )
      .then((response) => {
        navigate("/admin/list");
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="text-center">Add Movie Booking</h1>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Director:</label>
              <textarea
                className="form-control"
                value={director}
                onChange={(event) => {
                  setDirector(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Genre:</label>
              <textarea
                className="form-control"
                value={genre}
                onChange={(event) => {
                  setGenre(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Release Date:</label>
              <textarea
                className="form-control"
                value={releaseDate}
                onChange={(event) => {
                  setReleaseDate(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Duration:</label>
              <textarea
                className="form-control"
                value={duration}
                onChange={(event) => {
                  setDuration(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Language:</label>
              <textarea
                className="form-control"
                value={language}
                onChange={(event) => {
                  setLanguage(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Seat Number:</label>
              <textarea
                className="form-control"
                value={seatNumber}
                onChange={(event) => {
                  setSeatNumber(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Showtime:</label>
              <textarea
                className="form-control"
                value={showtime}
                onChange={(event) => {
                  setShowtime(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <textarea
                className="form-control"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                type="file"
                className="form-control"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary float-right" onClick={addPost}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMovieBooking;