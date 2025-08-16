import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Ordering & Payment",
      color: "bg-[#F97316]/10 text-[#F97316]",
      faqs: [
        {
          question: "How do I place an order?",
          answer:
            "Simply browse restaurants, select your dishes, add them to cart, and proceed to checkout. You can track your order in real-time after placement.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery in select areas.",
        },
        {
          question: "Can I modify my order after placing it?",
          answer:
            "You can modify your order within 2 minutes of placing it. After that, please contact the restaurant directly or our support team.",
        },
        {
          question: "Do you charge any service fees?",
          answer:
            "We charge a small service fee and delivery fee. All fees are clearly displayed before you confirm your order.",
        },
      ],
    },
    {
      title: "Delivery & Timing",
      color: "bg-[#10B981]/10 text-[#10B981]",
      faqs: [
        {
          question: "How long does delivery take?",
          answer:
            "Average delivery time is 25-45 minutes depending on your location, restaurant preparation time, and weather conditions.",
        },
        {
          question: "Do you deliver in my area?",
          answer:
            "Enter your address on our homepage to check if we deliver to your location. We're constantly expanding our delivery zones.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes! You'll receive real-time updates via SMS and email. You can also track your order live on our website or app.",
        },
        {
          question: "What if my order is late?",
          answer:
            "If your order is significantly delayed, you'll receive automatic updates. Contact support for compensation on late deliveries.",
        },
      ],
    },
    {
      title: "Account & Support",
      color: "bg-[#3B82F6]/10 text-[#3B82F6]",
      faqs: [
        {
          question: "Do I need to create an account?",
          answer:
            "While you can browse without an account, creating one allows you to save favorites, track orders, and earn rewards.",
        },
        {
          question: "How do I reset my password?",
          answer:
            'Click "Forgot Password" on the login page and follow the instructions sent to your email.',
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach us via live chat, email at support@foodly.com, or phone at +1 (555) 123-4567. We're available 24/7.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "Contact our support team to request account deletion. Note that this action is permanent and cannot be undone.",
        },
      ],
    },
    {
      title: "Restaurants & Menu",
      color: "bg-[#A78BFA]/10 text-[#A78BFA]",
      faqs: [
        {
          question: "How do you choose restaurant partners?",
          answer:
            "We partner with restaurants that meet our quality standards for food safety, preparation time, and customer satisfaction.",
        },
        {
          question: "Are menu prices the same as in restaurants?",
          answer:
            "Prices may vary slightly from in-restaurant prices due to delivery service fees. All prices are clearly displayed.",
        },
        {
          question: "Can I see nutritional information?",
          answer:
            "Many restaurants provide nutritional information for their dishes. Look for the nutrition icon on menu items.",
        },
        {
          question: "How do I report an issue with food quality?",
          answer:
            "Contact our support team immediately with your order details. We take food quality seriously and will investigate promptly.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-16 font-sans">
      <div className="mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#10B981] rounded-2xl">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-[#6B7280]">
            Find answers to common questions about Foodly's delivery service
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <Badge
                  className={`${category.color} px-4 py-2 text-sm font-semibold`}
                >
                  {category.title}
                </Badge>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-[#E5E7EB] rounded-lg px-6"
                  >
                    <AccordionTrigger className="hover:text-[#F97316] py-6">
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-[#6B7280] leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
