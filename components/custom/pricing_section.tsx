"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Monthly",
    price: "₹199",
    duration: "per month",
    features: ["Access to all courses", "Community support", "Cancel anytime"],
  },
  {
    name: "Yearly",
    price: "₹999",
    duration: "per year",
    features: ["Save more with yearly plan", "Unlimited course access", "Priority support"],
    highlight: true,
  },
  {
    name: "Custom course - Lifetime",
    price: "₹499",
    duration: "one-time payment",
    features: ["Single Course Only","Lifetime access", "All future updates", "Exclusive resources"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple & Transparent <span className="text-purple-400">Pricing</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12">
          Choose a plan that fits your learning journey. No hidden fees, cancel anytime.
        </p>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative  rounded-2xl shadow-lg overflow-hidden hover:border-purple-500 transition
              ${plan.highlight ? "border-purple-500 shadow-purple-500/40 scale-105" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <p className="text-3xl font-bold text-purple-400">{plan.price}</p>
                <p className=" text-sm">{plan.duration}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature, i) => (
                  <p key={i} className="flex items-center gap-2 ">
                    <FaCheck className="text-purple-400" /> {feature}
                  </p>
                ))}
                <Button
                  className={`w-full mt-6 ${
                    plan.highlight
                      ? "bg-purple-500 hover:bg-purple-600"
                      : " hover:bg-purple-300"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
