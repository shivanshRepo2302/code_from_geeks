import React, { useState } from "react";

const SellProduct = () => {
  const [form, setForm] = useState({
    name: "",
    details: "",
    category: "",
    price: "",
    phone: "",
    image: null,
    imagePreview: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can send the form data to your backend or show a success message
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <h2>Sell Your Product</h2>
      {submitted ? (
        <div>
          <p>Thank you for submitting your product!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Product Details:</label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc", minHeight: 60 }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Product Category:</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Price (₹):</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              min="0"
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Seller Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Product Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "block", marginTop: 8 }}
            />
            {form.imagePreview && (
              <img
                src={form.imagePreview}
                alt="Preview"
                style={{ marginTop: 12, maxWidth: "100%", maxHeight: 180, borderRadius: 8, border: "1px solid #eee" }}
              />
            )}
          </div>
          <button
            type="submit"
            style={{
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 20px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SellProduct;