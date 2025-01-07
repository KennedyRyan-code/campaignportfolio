import React, { useState } from "react";

const Collaborate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectUrl: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/collaborate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        alert("Collaboration request submitted!");
        setFormData({
          name: "",
          email: "",
          projectUrl: "",
          message: "",
        });
      } else {
        res
          .json()
          .then((data) => alert(data.error || "Failed to submit request"));
      }
    });
  };

  return (
    <div className="collaborate flex flex-col items-center justify-center min-h-screen py-12">
      <h1 className="text-[72px] font-bold mb-8 text-center">Collaborate</h1>
      <section className="max-w-[1024px] p-10 items-center">
        <h1 className="text-3xl  font-[700]">
          At
          <span className="p-2 border-double border-4 border-green-500">
            CosmicTech
          </span>{" "}
          collaboration is at the heart of everything we do.
        </h1>
        <p className="text-[32px] font-thin ">
          We are a complete team comprising of individuals specializing in
          different aspects of a project lifecycle. By combining your unique
          vision with our expertise, we deliver solutions that go beyond
          expectations.
        </p>
      </section>
      <div className="w-34 h-64 bg-cover bg-center bg-no-repeat">
        <p className="mb-10 text-[42px] font-thin p-4">
          Our Mission is to enhance your digital presence, streamline
          operations, and drive engagement while utilizing modern technologies:
          <ul className="flex space-x-10 items-center text-[30px]">
            <li>
              <img
                className="h-12"
                src="https://img.icons8.com/?size=48&id=dJjTWMogzFzg&format=png"
                alt="Vite Logo"
              />{" "}
              Vite
            </li>
            <li>
              <img
                className="h-12"
                src="https://img.icons8.com/?size=48&id=108784&format=png"
                alt="JavaScript Logo"
              />{" "}
              JavaScript
            </li>
            <li>
              <img
                className="h-12"
                src="https://img.icons8.com/?size=80&id=NfbyHexzVEDk&format=png"
                alt="React Logo"
              />{" "}
              React
            </li>
            <li>
              <img
                className="h-12"
                src="https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png"
                alt="Tailwind Logo"
              />{" "}
              Tailwind
            </li>
            <li>
              <img
                className="h-12"
                src="https://img.icons8.com/?size=80&id=en2FZIAZdquE&format=png"
                alt="Git Logo"
              />{" "}
              Git
            </li>
          </ul>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 md:w-1/2 mr-[720px] p-16"
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
          placeholder="Contact (Email or Phone)"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="text"
          placeholder="Project Link (Github or Website)"
          value={formData.projectUrl}
          onChange={(e) =>
            setFormData({ ...formData, projectUrl: e.target.value })
          }
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <textarea
          placeholder="Message ( Tell us about your project )"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="rounded-md border border-gray-300 px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="bg-inherit hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Collaborate;
