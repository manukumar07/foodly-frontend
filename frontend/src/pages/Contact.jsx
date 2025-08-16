import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 981785XXXX",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: Mail,
      title: "Email",
      content: "demo@foodly.com",
      description: "Online support",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Food Street, YNR",
      description: "Come say hello",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "24/7 Delivery",
      description: "Support: 8am - 6pm",
    },
  ];

  return (
    <div className='min-h-screen bg-[#FFFFFF] py-16 font-["Poppins","Inter",ui-sans-serif,system-ui]'>
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Top Horizontal */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="w-64 border border-[#E5E7EB] hover:border-[#F97316]/50 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#F97316]/10 rounded-lg">
                    <info.icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="font-semibold text-[#111827]">{info.title}</h3>
                  <p className="text-lg font-medium text-[#111827]">
                    {info.content}
                  </p>
                  <p className="text-[#6B7280] text-sm">{info.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* Contact Form - Left */}
          <div
            className="lg:col-span-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Card className="border-2 border-[#E5E7EB] shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center text-[#111827]">
                  <MessageCircle className="w-6 h-6 mr-2 text-[#F97316]" />
                  Send us a message
                </CardTitle>
                <CardDescription className="text-[#6B7280]">
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#111827]">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className=" border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#111827]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className=" border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#111827]">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className=" border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#111827]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 h-12 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Quick Contact & FAQ */}
          <div
            className="flex flex-col gap-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Quick Contact */}
            <Card className="bg-gradient-to-r from-[#F97316]/5 to-[#10B981]/5 border-[#F97316]/20 w-96">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Need Immediate Help?
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Our customer support team is available 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-gradient-to-r from-[#F97316]/5 to-[#10B981]/5 border-[#F97316]/20 w-96">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  Need Quick Answers?
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Check out our FAQ section for instant answers to common
                  questions.
                </p>
                <Link to="/faq">
                  <Button
                    variant="outline"
                    className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white"
                  >
                    View FAQ
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
