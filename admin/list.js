import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Delete from "./delete";
import { useSelector } from "react-redux";

function List() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // Store the filtered posts based on search term
  const [SearchTerm, setSearchTerm] = useState("");
  const user = useSelector((store) => store.auth.user);

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (SearchTerm.trim() === "") {
      // If the search input is empty, reset the filteredPosts state.
      setFilteredPosts(allPosts);
    } else {
      // Otherwise, filter the posts based on the search term.  

      
      var filteredItems = allPosts.filter((item) =>
        item.name.toLowerCase().includes(SearchTerm.toLowerCase())
      );
      setFilteredPosts(filteredItems);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://medicalstore.mashupstack.com/api/medicine/search?keyword=${SearchTerm}`,
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        );
        setAllPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error("error fetching posts", error);
      }
    };

    fetch();
  }, [SearchTerm, user.token]);

  function fetchPosts() {
    axios
      .get("https://medicalstore.mashupstack.com/api/medicine", {
        headers: { Authorization: "Bearer " + user.token },
      })
      .then((response) => {
        setAllPosts(response.data);
        setFilteredPosts(response.data);
      });
  }

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <label>Search medicine: </label>
              <input
                type="text"
                value={SearchTerm}
                onChange={handleSearchInputChange}
              />{" "}
              &nbsp;
              <button
                className="btn btn-small btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">medicine</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/blog/posts/create" className="btn btn-info mb-2">
              Create
            </Link>
            {filteredPosts.length === 0 ? (
              <p>No matching posts found.</p>
            ) : (
              filteredPosts.map((post) => (
                <Delete key={post.id} post={post} refresh={fetchPosts} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;