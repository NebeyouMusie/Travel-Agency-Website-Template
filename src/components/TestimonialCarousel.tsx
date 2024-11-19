import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "The most amazing travel experience of my life! The team took care of everything and made our journey unforgettable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "Exceptional service and attention to detail. Our family vacation was perfectly planned from start to finish.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    text: "Professional, reliable, and truly passionate about creating wonderful travel experiences. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  },
  {
    name: "David Rodriguez",
    location: "Barcelona, Spain",
    text: "An incredible journey through Europe! Every detail was perfectly arranged, making our trip stress-free and memorable.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Sophie Martin",
    location: "Paris, France",
    text: "The customized itinerary exceeded our expectations. We discovered hidden gems we would have never found on our own.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    name: "James Wilson",
    location: "Sydney, Australia",
    text: "From the initial planning to the final day, everything was seamless. The local guides were knowledgeable and friendly.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  }
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
      <Card className="overflow-hidden border-none bg-transparent shadow-none">
        <CardContent className="relative p-6">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-4 text-center"
                >
                  <Quote className="mx-auto mb-6 h-12 w-12 text-primary opacity-20" />
                  <p className="mb-6 text-lg text-gray-700">{testimonial.text}</p>
                  <div className="flex items-center justify-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;