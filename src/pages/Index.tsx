import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Banff National Park",
    location: "Alberta, Canada",
    description: "Discover the majestic Canadian Rockies with pristine lakes and stunning mountain views.",
  },
  {
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Bali Beaches",
    location: "Bali, Indonesia",
    description: "Experience paradise on Earth with white sandy beaches and crystal-clear waters.",
  },
  {
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    title: "Swiss Alps",
    location: "Switzerland",
    description: "Explore breathtaking mountain landscapes and charming alpine villages.",
  },
];

const packages = [
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Mountain Explorer Package",
    duration: "7 Days / 6 Nights",
    price: "$1,299",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    title: "Tropical Paradise Getaway",
    duration: "5 Days / 4 Nights",
    price: "$999",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Cultural Discovery Tour",
    duration: "8 Days / 7 Nights",
    price: "$1,499",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="relative -mt-8 px-4">
        <SearchBar />
      </div>

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Popular Destinations
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Packages
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What Our Travelers Say
        </h2>
        <TestimonialCarousel />
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;