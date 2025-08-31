"use client";

import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function HomePage() {
  const featuredBikes = [
    {
      id: 1,
      name: "Mountain Bike Pro",
      type: "Mountain",
      price: "$25/day",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "City Cruiser",
      type: "City",
      price: "$15/day",
      image: "/api/placeholder/300/200",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Electric Bike",
      type: "E-Bike",
      price: "$35/day",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      reviews: 156,
    },
  ];

  const stats = [
    { label: "Bikes Available", value: "150+" },
    { label: "Locations", value: "25+" },
    { label: "Happy Customers", value: "10K+" },
    { label: "Cities Covered", value: "15+" },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 py-4 sm:py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Rent the Perfect Bike for Your <span className="text-black">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Explore your city, trails, or commute with our premium collection of bikes. From
            mountain bikes to e-bikes, find your perfect ride today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" className="w-full sm:w-auto">
            Browse Bikes
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            View Locations
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Bikes</h2>
          <p className="text-lg text-gray-600">
            Discover our most popular bikes for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredBikes.map((bike) => (
            <Card key={bike.id} className="overflow-hidden p-0" data-testid="bike-card">
              <div className="aspect-video bg-gray-200 rounded-t-2xl"></div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">{bike.name}</h3>
                  <p className="text-sm text-gray-600">{bike.type}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm text-gray-600">{bike.rating}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      ({bike.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-black">{bike.price}</div>
                </div>

                <Button variant="primary" className="w-full">
                  Rent Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h2>
          <p className="text-lg text-gray-600">Get your bike in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              step: "1",
              title: "Choose Your Bike",
              description:
                "Browse our selection of bikes and choose the perfect one for your adventure.",
              icon: "🚲",
            },
            {
              step: "2",
              title: "Book & Pay",
              description:
                "Select your dates, location, and complete your booking securely online.",
              icon: "📅",
            },
            {
              step: "3",
              title: "Pick Up & Ride",
              description: "Collect your bike from our location and start your adventure!",
              icon: "🎯",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">{item.icon}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-black mb-2">Step {item.step}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 rounded-2xl text-center bg-gray-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of happy customers who have discovered the joy of bike rentals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
