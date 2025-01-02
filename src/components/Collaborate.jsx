import React, { useState } from "react";

const Collaborate = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectUrl: "",
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
    <div className="collaborate flex flex-col items-center justify-center min-h-screen py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Collaborate</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full md:w-1/2"
      >
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="text"
          placeholder="Your contact (Email or Phone)"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="text"
          placeholder="Project Link (Github or Website)"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, projectUrl: e.target.value })
          }
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <textarea
          placeholder="Your message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="rounded-md border border-gray-300 px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Collaborate;
