import { Button } from "@/components/ui/button";
import { Globe, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white sm:px-16">
        <Globe className="mb-6 h-16 w-16 animate-bounce" />
        <h1 className="animate-fade-up bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Discover Your Next Adventure
        </h1>
        <p className="mt-6 animate-fade-up text-lg text-gray-200 sm:text-xl">
          Explore the world's most beautiful destinations with us
        </p>
        <div className="mt-8 flex w-full animate-fade-up flex-col gap-4 sm:w-auto sm:flex-row">
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
            Start Exploring
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black sm:w-auto"
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