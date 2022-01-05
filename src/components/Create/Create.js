import React, { useState } from "react";
function BookForm({ handleAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      title,
      author,
      category,
      image,
    };
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newBook) => {
        handleAddBook(newBook);
      });
  }
  return (
    <section class="container">
      <form class="ui form" onSubmit={handleSubmit}>
        <h4 id="formH" class="ui dividing header">
          Add a New Book
        </h4>
        <label htmlFor="title">Title</label>
        <input
          required
          placeholder="Insert Title"
          type="text"
          title="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="author">Author</label>
        <input
          required
          placeholder="Insert Author"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label htmlFor="category">Category</label>
        <select
          class="ui fluid dropdown"
          required
          name="filter"
          placeholder="select a category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          <option value="Phonology & Articulation">
            Phonology & Articulation
          </option>
          <option value="Concepts & Prepositions">
            Concepts & Prepositions
          </option>
          <option value="Prediction & Inference">Prediction & Inference</option>
          <option value="Phonological Awareness & Literacy Development">
            Phonological Awareness & Literacy Development
          </option>
          <option value="Diversity & Inclusion">Diversity & Inclusion</option>
          <option value="Preschool Language">Preschool Language</option>
          <option value="Social Emotional Learning">
            Social Emotional Learning
          </option>
          <option value="Special Occasions">Special Occasions</option>
          <option value="Social Justice">Social Justice</option>
          <option value="none">none</option>
        </select>
        <label htmlFor="image">Image</label>
        <input
          // required
          placeholder="Image URL"
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button>Add Book</button>
      </form>
    </section>
  );
}
export default BookForm;
