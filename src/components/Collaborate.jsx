import React, { useState } from "react"; // Import React and the useState hook for managing component state

// Define the Collaborate functional component
const Collaborate = () => {
  // State hook to manage the form data
  const [formData, setFormData] = useState({
    name: "", // State for the name input
    email: "", // State for the email input
    projectUrl: "", // State for the project URL input
    message: "", // State for the message textarea
  });

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default browser form submission to handle it with JavaScript

    // Determine the API endpoint based on the environment (production or development)
    const apiEndpoint =
      process.env.NODE_ENV === "production"
        ? "https://cosmictech-api.vercel.app/api/collaborate" // Production API endpoint
        : "http://localhost:3000/api/collaborate"; // Development API endpoint

    // Make a POST request to the determined API endpoint
    fetch(apiEndpoint, {
      method: "POST", // Specify the HTTP method as POST
      headers: { "Content-Type": "application/json" }, // Set the content type to JSON
      body: JSON.stringify(formData), // Send the current form data as a JSON string in the request body
    })
      .then((res) => {
        // Handle the response from the API
        if (res.ok) {
          // If the response status is OK (2xx)
          alert("Collaboration request submitted!"); // Show a success message to the user
          // Reset the form data to initial empty state
          setFormData({
            name: "",
            email: "",
            projectUrl: "",
            message: "",
          });
        } else {
          // If the response status is not OK
          res
            .json() // Parse the response body as JSON
            .then((data) => alert(data.error || "Failed to submit request")); // Show an error message from the API response or a generic one
        }
      })
      .catch((error) => {
        // Catch any errors during the fetch operation (e.g., network issues)
        console.error("Fetch error:", error); // Log the error to the console
        alert("An error occurred while submitting the request."); // Show a generic error message to the user
      });
  };

  // Render the component's UI
  return (
    <div className="collaborate flex flex-col items-center justify-center min-h-screen py-12">
      {/* Main heading for the page */}
      <h1 className="text-[36px] md:text-[72px] font-bold mb-8 text-center">
        Collaborate
      </h1>
      {/* Section describing the collaboration philosophy */}
      <section className="max-w-[1024px] p-10 items-center space-y-4">
        <h1 className="text-xl md:text-3xl font-[700]">
          At{" "}
          <span className="p-2 border-double border-4 border-green-500">
            CosmicTech
          </span>{" "}
          collaboration is at the heart of everything we do.
        </h1>
        <p className="text-lg md:text-[32px] space-y-8 font-thin">
          We are a complete team comprising of individuals specializing in
          different aspects of a project lifecycle. By combining your unique
          vision with our expertise, we deliver solutions that go beyond
          expectations.
        </p>
      </section>
      {/* Section listing technologies used */}
      <div className="h-64 bg-cover bg-center bg-no-repeat space-x-4">
        <p className="mb-10 text-lg md:text-[42px] font-thin p-4 text-center">
          Our Mission is to enhance your digital presence, streamline
          operations, and drive engagement while utilizing modern technologies:
        </p>
        {/* List of technology icons and names */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-10 items-center text-sm md:text-[30px]">
          {/* List items for each technology */}
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=48&id=dJjTWMogzFzg&format=png"
              alt="Vite Logo"
            />{" "}
            <span>Vite</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=48&id=108784&format=png"
              alt="JavaScript Logo"
            />{" "}
            <span>JavaScript</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=80&id=NfbyHexzVEDk&format=png"
              alt="React Logo"
            />{" "}
            <span>React</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=96&id=MWiBjkuHeMVq&format=png"
              alt="Next Logo"
            />{" "}
            <span>Next.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png"
              alt="Typescript Logo"
            />{" "}
            <span>Typescript</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
              alt="Node Logo"
            />{" "}
            <span>Node.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=80&id=WNoJgbzDr3i2&format=png"
              alt="Express Logo"
            />{" "}
            <span>Express.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=96&id=74402&format=png"
              alt="Mongodb Logo"
            />{" "}
            <span>MongoDB</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=96&id=38561&format=png"
              alt="PostgreSQL Logo"
            />{" "}
            <span>PostgreSQL</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=96&id=pHS3eRpynIRQ&format=png"
              alt="Redis Logo"
            />{" "}
            <span>Redis</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png"
              alt="Tailwind Logo"
            />{" "}
            <span>Tailwind</span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              className="h-8 md:h-12"
              src="https://img.icons8.com/?size=80&id=en2FZIAZdquE&format=png"
              alt="Git Logo"
            />{" "}
            <span>Git</span>
          </li>
        </ul>
      </div>
      {/* Collaboration form */}
      <form
        onSubmit={handleSubmit} // Attach the handleSubmit function to the form's onSubmit event
        className="flex flex-col space-y-4 w-full md:w-1/2 p-4 md:p-16"
      >
        {/* Name input field */}
        <input
          type="text"
          placeholder="Your name"
          value={formData.name} // Bind input value to formData.name state
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Update name state on input change
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        {/* Email/Contact input field */}
        <input
          type="text"
          placeholder="Contact (Email or Phone)"
          value={formData.email} // Bind input value to formData.email state
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Update email state on input change
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        {/* Project URL input field */}
        <input
          type="text"
          placeholder="Project Link (Github or Website)"
          value={formData.projectUrl} // Bind input value to formData.projectUrl state
          onChange={(e) =>
            setFormData({ ...formData, projectUrl: e.target.value })
          } // Update projectUrl state on input change
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        {/* Message textarea */}
        <textarea
          placeholder="Message ( Tell us about your project )"
          value={formData.message} // Bind textarea value to formData.message state
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          } // Update message state on textarea change
          className="rounded-md border border-gray-300 px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        {/* Submit button */}
        <button
          type="submit" // Specify button type as submit
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Collaborate; // Export the component for use in other parts of the application

// The Collaborate component provides a form for users to submit collaboration requests, including their name, contact information, project URL, and a message. It handles form submission with error handling and success feedback.
