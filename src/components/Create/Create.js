import React, { useState } from "react";

function CreateProd({ handleNewProduct }) {
  const [name, setName] = useState("");
  const [department, setDepart] = useState("");
  const [description, setDesc] = useState("");
  const [unit_price, setPrice] = useState("");
  const [img_url, setImg] = useState("");
  const [inventory, setInv] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      department,
      description,
      unit_price,
      img_url,
      inventory,
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
          value={department}
          onChange={(event) => setDepart(event.target.value)}
        >
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          <option value="Appliances">Appliances</option>
          <option value="Bath & Faucets">Bath & Faucets</option>
          <option value="Blinds & Windows">Blinds & Windows</option>
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
          value={description}
          onChange={(event) => setDesc(event.target.value)}
        />

        <label htmlFor="unit_price">Product's Price</label>
        <input
          // required
          placeholder="Product's Price"
          type="number"
          value={unit_price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label htmlFor="unit_price">Image</label>
        <input
          // required
          placeholder="Image URL"
          type="text"
          value={img_url}
          onChange={(event) => setImg(event.target.value)}
        />

        <label htmlFor="price">Inventory</label>
        <input
          // required
          placeholder="How many in Stock?"
          type="number"
          value={inventory}
          onChange={(event) => setInv(event.target.value)}
        />

        <button>Add Product</button>
      </form>
    </section>
  );
}
export default CreateProd;
