import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component
import Navbar from '../admin/navbar';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    return (
    <div>

      <div className="App container-fluid">
        <h2 className="mt-4 mb-4">Don't wait</h2>
        <p><i>Book your tickets online and enjoy the latest movies!</i></p>
        <div className="row">
          {movies.map(movie => (
            <div key={movie.id} className="col-md-4 mb-4">
              {/* Use correct syntax for template literals */}
              <Link to={`/movies/${movie.id}`} className="card-link">
                <div className="card">
                  {/* Use correct interpolation for image URL */}
                  <img src={`http://127.0.0.1:8000${movie.image}`} alt={movie.title} className="card-img-top img-fluid" style={{objectFit:'cover',height:'550px'}} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    {/* Display other movie details as needed */}
                  </div> 
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
