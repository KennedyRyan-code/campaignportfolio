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

const Explore = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
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
              <CardDescription>
                Learn the basics of using the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Navigate using the sidebar menu</li>
                <li>View reservations and occupancy on the main dashboard</li>
                <li>Use the search bar to find specific information</li>
                <li>
                  Create new reservations using the "New reservation" button
                </li>
                <li>Check notifications for important updates</li>
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
                <li>Email: support@hoteldashboard.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Live Chat: Available 24/7 on the dashboard</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 mt-12">
          {/* TODO: ADD Social media links to X, Facebook, Tiktok */}
          <Carousel>
            <CarouselContent>
              <CarouselItem>1</CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
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
              How do I create a new reservation?
            </AccordionTrigger>
            <AccordionContent>
              To create a new reservation, click on the "New reservation" button
              in the top right corner of the dashboard. Fill in the required
              information in the form that appears, including guest details,
              room type, and dates of stay. Once completed, click "Confirm
              Reservation" to finalize the booking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I view occupancy rates?</AccordionTrigger>
            <AccordionContent>
              Occupancy rates are displayed on the main dashboard under the
              "Occupancy" card. You can see the number of vacant, occupied, and
              not ready rooms. For more detailed occupancy reports, navigate to
              the "Reports" section using the sidebar menu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I update guest information?
            </AccordionTrigger>
            <AccordionContent>
              To update guest information, go to the "Guests" section using the
              sidebar menu. Use the search function to find the specific guest,
              then click on their name to access their profile. From there, you
              can edit their details and save the changes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I customize the dashboard layout?
            </AccordionTrigger>
            <AccordionContent>
              Currently, the dashboard layout is fixed to ensure consistency
              across all users. However, you can collapse the sidebar to gain
              more screen space. We're working on customization options for
              future updates. Stay tuned for announcements in the "What's New"
              section.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I generate reports?</AccordionTrigger>
            <AccordionContent>
              To generate reports, navigate to the "Reports" section using the
              sidebar menu. From there, you can select the type of report you
              need (e.g., occupancy, revenue, guest statistics). Choose the date
              range and any other relevant filters, then click "Generate
              Report". You can view the report on-screen or download it in
              various formats like PDF or CSV.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-4 py-12 text-white text-center">
        <h1>Join Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Explore;