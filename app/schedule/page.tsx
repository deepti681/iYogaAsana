'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInSection } from "@/components/smooth-scroll";
import Link from "next/link";
import { Clock, Users, MapPin } from "lucide-react";

const scheduleData = [
  {
    day: "Monday",
    classes: [
      {
        time: "7:00 AM - 8:00 AM",
        name: "Morning Flow",
        instructor: "Sarah Johnson",
        level: "All Levels",
        duration: "60 min",
        capacity: "20 students",
        location: "Studio A"
      },
      {
        time: "6:00 PM - 7:15 PM",
        name: "Vinyasa Flow",
        instructor: "Michael Chen",
        level: "Intermediate",
        duration: "75 min",
        capacity: "18 students",
        location: "Studio B"
      }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "9:00 AM - 10:00 AM",
        name: "Gentle Yoga",
        instructor: "Emma Wilson",
        level: "Beginner",
        duration: "60 min",
        capacity: "15 students",
        location: "Studio A"
      },
      {
        time: "7:00 PM - 8:00 PM",
        name: "Power Yoga",
        instructor: "David Martinez",
        level: "Advanced",
        duration: "60 min",
        capacity: "16 students",
        location: "Studio B"
      }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "7:00 AM - 8:00 AM",
        name: "Morning Flow",
        instructor: "Sarah Johnson",
        level: "All Levels",
        duration: "60 min",
        capacity: "20 students",
        location: "Studio A"
      },
      {
        time: "12:00 PM - 1:00 PM",
        name: "Lunch Break Yoga",
        instructor: "Lisa Anderson",
        level: "All Levels",
        duration: "60 min",
        capacity: "12 students",
        location: "Studio A"
      }
    ]
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "9:00 AM - 10:00 AM",
        name: "Yin Yoga",
        instructor: "Emma Wilson",
        level: "All Levels",
        duration: "60 min",
        capacity: "15 students",
        location: "Studio A"
      },
      {
        time: "6:00 PM - 7:15 PM",
        name: "Hot Yoga",
        instructor: "Michael Chen",
        level: "Intermediate",
        duration: "75 min",
        capacity: "14 students",
        location: "Studio B"
      }
    ]
  },
  {
    day: "Friday",
    classes: [
      {
        time: "7:00 AM - 8:00 AM",
        name: "Morning Flow",
        instructor: "Sarah Johnson",
        level: "All Levels",
        duration: "60 min",
        capacity: "20 students",
        location: "Studio A"
      },
      {
        time: "5:30 PM - 6:30 PM",
        name: "Restorative Yoga",
        instructor: "Lisa Anderson",
        level: "All Levels",
        duration: "60 min",
        capacity: "12 students",
        location: "Studio A"
      }
    ]
  },
  {
    day: "Saturday",
    classes: [
      {
        time: "9:00 AM - 10:30 AM",
        name: "Weekend Warrior",
        instructor: "David Martinez",
        level: "Intermediate",
        duration: "90 min",
        capacity: "18 students",
        location: "Studio B"
      },
      {
        time: "11:00 AM - 12:00 PM",
        name: "Family Yoga",
        instructor: "Emma Wilson",
        level: "All Ages",
        duration: "60 min",
        capacity: "10 families",
        location: "Studio A"
      }
    ]
  },
  {
    day: "Sunday",
    classes: [
      {
        time: "10:00 AM - 11:30 AM",
        name: "Sunday Slow Flow",
        instructor: "Sarah Johnson",
        level: "All Levels",
        duration: "90 min",
        capacity: "20 students",
        location: "Studio A"
      },
      {
        time: "4:00 PM - 5:00 PM",
        name: "Meditation & Breathwork",
        instructor: "Lisa Anderson",
        level: "All Levels",
        duration: "60 min",
        capacity: "25 students",
        location: "Meditation Hall"
      }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    case "All Levels":
      return "bg-blue-100 text-blue-800";
    case "All Ages":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Schedule() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              Class <span className="font-semibold text-sage">Schedule</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find the perfect class for your schedule and skill level. All classes are
              designed to accommodate different experience levels and physical abilities.
            </p>
            <Button
              asChild
              className="bg-sage hover:bg-sage/90 text-white rounded-full px-8 py-4 text-lg"
            >
              <Link href="/contact">Book Your First Class</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scheduleData.map((daySchedule, index) => (
              <FadeInSection key={daySchedule.day} className="mb-8">
                <div className="sticky top-24 mb-6">
                  <h2 className="text-2xl font-semibold text-charcoal mb-4 text-center">
                    {daySchedule.day}
                  </h2>
                </div>
                <div className="space-y-4">
                  {daySchedule.classes.map((classInfo, classIndex) => (
                    <Card key={classIndex} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg text-charcoal">
                              {classInfo.name}
                            </CardTitle>
                            <CardDescription className="text-sage font-medium">
                              {classInfo.instructor}
                            </CardDescription>
                          </div>
                          <Badge className={getLevelColor(classInfo.level)}>
                            {classInfo.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">{classInfo.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="text-sm">{classInfo.capacity}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{classInfo.location}</span>
                          </div>
                        </div>
                        <Button
                          asChild
                          className="w-full mt-4 bg-sage hover:bg-sage/90 text-white rounded-full"
                          size="sm"
                        >
                          <Link href="/contact">Book Class</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl font-light text-charcoal mb-6">
              Flexible <span className="font-semibold text-sage">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the option that works best for your lifestyle and budget.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">Drop-In</CardTitle>
                  <CardDescription className="text-3xl font-bold text-sage">$25</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">Perfect for trying out classes</p>
                  <Button
                    asChild
                    className="w-full bg-sage hover:bg-sage/90 text-white rounded-full"
                  >
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-sage">
                <CardHeader>
                  <Badge className="bg-sage text-white mb-2">Most Popular</Badge>
                  <CardTitle className="text-2xl text-charcoal">Monthly Unlimited</CardTitle>
                  <CardDescription className="text-3xl font-bold text-sage">$120</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">Unlimited classes for one month</p>
                  <Button
                    asChild
                    className="w-full bg-sage hover:bg-sage/90 text-white rounded-full"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">Class Package</CardTitle>
                  <CardDescription className="text-3xl font-bold text-sage">$200</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">10 classes (never expire)</p>
                  <Button
                    asChild
                    className="w-full bg-sage hover:bg-sage/90 text-white rounded-full"
                  >
                    <Link href="/contact">Purchase</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}