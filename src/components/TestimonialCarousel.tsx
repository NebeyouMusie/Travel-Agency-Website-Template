import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "The most amazing travel experience of my life! The team took care of everything and made our journey unforgettable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "Exceptional service and attention to detail. Our family vacation was perfectly planned from start to finish.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    text: "Professional, reliable, and truly passionate about creating wonderful travel experiences. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      <Card className="border-none bg-transparent shadow-none">
        <CardContent className="relative p-6 text-center">
          <Quote className="mx-auto mb-6 h-12 w-12 text-primary opacity-20" />
          <p className="mb-6 text-lg text-gray-700">
            {testimonials[currentIndex].text}
          </p>
          <div className="flex items-center justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="ml-4 text-left">
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-600">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;