import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Explore = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.NODE_ENV === "production"
          ? "https://cosmictech-api.onrender.com/api/joinUs"
          : "http://localhost:3000/api/joinUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        alert("Email submitted successfully!");
        setEmail("");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Failed to submit email"}`);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Explore More</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Explore Our Website Resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Take a deep dive into our services, solutions, and past
                  projects to understand how we can help your business grow
                </li>
                <li>
                  Schedule a free consultation with our experts to brainstorm
                  ideas, clarify your goals, and outline the best solutions for
                  your business.
                </li>
                <li>
                  Choose from our wide range of services and create a custom
                  package tailored to your specific requirements.
                </li>
                <li>
                  Our team will present a detailed proposal, complete with
                  timelines, deliverables, and cost estimates.
                </li>
                <li>
                  Watch your project come to life! Post-launch, we provide
                  ongoing support.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>
                Get in touch with our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you need further assistance, please contact our support team:
              </p>
              <ul className="space-y-2">
                <li>Email: cosmicflowtech@outlook.com</li>
                <li>Phone: +254 723 722 998</li>
                <li>Office line: +254 782 777 061</li>
                <li>Live Chat: Available 24/7 on Office line WhatsApp</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 mt-12 px-4 sm:px-6 lg:px-8">
          {/* TODO: ADD Social media links to X, Facebook, Tiktok */}
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                Our School Management System is always online and accessable to
                it's Users at all time with a live Support Line. Visit{" "}
                <a
                  className="text-purple-700"
                  href="https://shulepoa.system.ke/auth/login"
                >
                  Shule Poa
                </a>{" "}
                Now
              </CarouselItem>
              <CarouselItem>
                For School or Related Systems Contact us for a Free live Demo,
                dont hesitate to ask for a assistance!
              </CarouselItem>
              <CarouselItem>
                We Conduct Live online demos on Google Meets, Zoom or One on One
                Demo
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Can I customize a package to suit my business needs?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We understand that every business is unique. Our
              solutions are fully customizable to align with your specific
              goals, whether you need tailored branding, a custom-built system,
              or advanced integrations. Contact us to discuss your requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do your School & Appointment Systems work?
            </AccordionTrigger>
            <AccordionContent>
              Our systems are designed to streamline operations for schools, and
              other enterprises. They include features like automated
              scheduling, real-time notifications, and analytics to make
              management efficient and hassle-free. Schedule a demo with us to
              see it in action.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer post-launch support?
            </AccordionTrigger>
            <AccordionContent>
              Yes, all our packages include post-launch support to ensure smooth
              operations. We provide maintenance, troubleshooting, and
              performance optimization to keep your system running flawlessly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How do I know if your services are right for my business?
            </AccordionTrigger>
            <AccordionContent>
              We recommend starting with a free consultation where we can
              understand your needs and recommend the best solutions.
              Additionally, you can check out some of our completed projects to
              see the value we bring to businesses like yours. Here are some of
              our projects:{" "}
              <Link
                className="text-sky-500"
                to="https://art-of-ai-prompts.vercel.app/"
              >
                Art of AI Prompts
              </Link>
              {"      "}
              <Link
                className="text-orange-300"
                to="https://tubonge-kipz.onrender.com/"
              >
                Tubonge Chat App
              </Link>
              {"     "}
              <Link
                className="text-red-500"
                to="https://v2-bagisto-demo.vercel.app/"
              >
                YouTube Clone
              </Link>
              {"     "}
              <Link
                className="text-color-1"
                to="https://v2-bagisto-demo.vercel.app/"
              >
                Simple Store
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What payment options are available for your services?
            </AccordionTrigger>
            <AccordionContent>
              We offer flexible payment plans, including installment options for
              larger projects. All payments are processed securely through our
              integrated digital payment solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can I collaborate with CosmicTech on a long-term basis?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we welcome long-term collaborations! Our collaboration
              packages are designed to provide ongoing support, regular updates,
              and scalability to help your business grow. Contact us to learn
              more about partnership opportunities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-4 py-12 text-white text-center">
        <h1 className="text-2xl font-bold">Join Us</h1>
        <p className="mb-4">
          Subscribe to our newsletter for the latest updates
        </p>

        <p className="mb-4">
          Contact Us
          <a
            className="text-2xl text-violet-600"
            href="mailto: cosmicflowtech@outlook.com"
          >
            {" "}
            Email{" "}
          </a>{" "}
          or {""}
          <span className="text-2xl"> Call +254 723 722 998</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-md"
          />
          <button
            className="px-4 py-2 bg-inherit hover:bg-blue-300 rounded-md text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Explore;
