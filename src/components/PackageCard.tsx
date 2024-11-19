import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface PackageCardProps {
  image: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
}

const PackageCard = ({
  image,
  title,
  duration,
  price,
  rating,
}: PackageCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-2 right-2 rounded bg-white px-2 py-1 text-sm font-semibold">
            {price}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{duration}</p>
          <div className="mt-2 flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-secondary text-secondary"
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90">
          View Package
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;