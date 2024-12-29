import React, { useState } from "react";

const Collaborate = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5173/api/collaborate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) alert("Collaboration request submitted!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Collaborate</h1>
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Your contact"
        value={formData.contact}
        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
      />
      <textarea
        placeholder="Your message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Collaborate;
