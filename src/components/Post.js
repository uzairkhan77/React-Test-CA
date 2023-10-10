import React, { useContext, useState } from "react";
import { useEffect } from "react";
import PostItem from "./PostItem";
import Spinner from "./Spinner";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import NavBar from "./Navbar";
import { AuthContext } from "../AuthContext";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isChecked, setIsChecked] = useState(false);
  const {user} = useContext(AuthContext)

  const handleCheckboxChange = () => {
    setMyPosts(!myPosts);
    setIsChecked(!isChecked);
  };

  const addNewPost = (newPost, userId) => {
    // Assign the specified userId to the new post
    newPost.userId = userId;
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = formData;
    if (title && description) {
      const userId = user.email; // Replace 'YourUserID' with the actual user ID
      addNewPost(
        { userId, id: posts.length + 1, title, body: description },
        userId
      );
      setFormData({ title: "", description: "" });
      handleClose();
    } else {
      alert("Please enter both title and description.");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const updatePosts = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setPosts(parsedData);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `All Posts`;
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    // console.log("All Posts from Local Storage:", storedPosts);
    if (storedPosts.length === 0) {
      updatePosts();
    } else {
      setPosts(storedPosts);
      setLoading(false);
    }
  }, []);

  const filteredPosts = isChecked
    ? posts.filter((post) => post.userId === user.email)
    : posts;

  return (
    <>
    {/* NavBarr */}
    <NavBar />


      <div className="container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <h1
            className="text-center"
            style={{ color: "black", marginTop: "80px", marginBottom: "30px" }}
          >
            {myPosts ? "PostApp - My Posts" : "PostApp - All Posts"}
          </h1>
          {/* toggle button for mypost filter */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleCheckboxChange} // Add onChange event here
              checked={isChecked} // Set the checked state based on the component state
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {myPosts ? "Showing My Posts Only" : "Showing All Posts"}
            </label>
          </div>
          {/* toggle button for mypost filter */}
        </div>
      </div>

      {filteredPosts.length === 0 && myPosts && (
        <p className="container">
          You haven't made any posts yet. Make posts to view.
        </p>
      )}

      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {filteredPosts.map((post) => {
            return (
              <div className="col-md-4" key={post.id}>
                <PostItem
                  title={post.title ? post.title : ""}
                  body={post.body ? post.body : ""}
                />
              </div>
            );
          })}
        </div>
        {/* Add the "Add Post" button */}

        <div>
          <Button onClick={handleOpen}>Make a post</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="container my-5">
                <h2 className="mb-4">Create a New Post</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      className="form-control my-2"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      className="form-control my-2"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary my-2">
                    Make Post
                  </button>
                </form>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Post;
