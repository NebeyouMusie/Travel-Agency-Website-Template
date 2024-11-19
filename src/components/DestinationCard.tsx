import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
}

const DestinationCard = ({
  image,
  title,
  location,
  description,
}: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="mt-2 flex items-center text-gray-600">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="link" className="p-0 text-primary hover:text-primary/80">
          Learn More →
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;