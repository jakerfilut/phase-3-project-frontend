import React, { useState } from "react";

function CreateProd({ handleNewProduct }) {
  const [name, setName] = useState("");
  const [depart, setDepart] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [inv, setInv] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      depart,
      desc,
      price,
      img,
      inv,
    };

    handleNewProduct(formData);
    
  }
  return (
    <section className="container">
      <form className="ui form" onSubmit={handleSubmit}>
        <h4 id="formH" className="ui dividing header">
          Add a New Proudct
        </h4>
        <label htmlFor="name">Name</label>
        <input
          required
          placeholder="Product's Name"
          type="text"
          title="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="department">Department</label>
        <select
          className="ui fluid dropdown"
          required
          name="department"
          placeholder="Select Department"
          value={depart}
          onChange={(event) => setDepart(event.target.value)}
        >
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          <option value="Appliances">Appliances</option>
          <option value="Bath & Faucets">Bath & Faucets</option>
          <option value="Blinds & Window">Blinds & Window</option>
          <option value="Building Material">Building Material</option>
          <option value="Electrical">Electrical</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Lighting & Ceiling Fans">
            Lighting & Ceiling Fans
          </option>
          <option value="Outdoor Living">Outdoor Living</option>
          <option value="Paint">Paint</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Tools">Tools</option>
        </select>
        <label htmlFor="department">Description</label>
        <textarea
          rows="8"
          cols="50"
          required
          placeholder="Product's Description"
          type="text"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />

        <label htmlFor="price">Product's Price</label>
        <input
          // required
          placeholder="Product's Price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label htmlFor="image">Image</label>
        <input
          // required
          placeholder="Image URL"
          type="text"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />

        <label htmlFor="price">Inventory</label>
        <input
          // required
          placeholder="How many in Stock?"
          type="number"
          value={inv}
          onChange={(event) => setInv(event.target.value)}
        />

        <button>Add Product</button>
      </form>
    </section>
  );
}
export default CreateProd;
