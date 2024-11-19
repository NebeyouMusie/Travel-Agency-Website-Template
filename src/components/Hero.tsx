import { Button } from "@/components/ui/button";
import { Globe, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <Globe className="mb-6 h-16 w-16 animate-fade-in" />
        <h1 className="animate-fade-up text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Discover Your Next Adventure
        </h1>
        <p className="mt-6 animate-fade-up text-lg text-gray-200 sm:text-xl">
          Explore the world's most beautiful destinations with us
        </p>
        <div className="mt-8 flex animate-fade-up gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Exploring
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-black"
          >
            <MapPin className="mr-2 h-4 w-4" />
            View Destinations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;