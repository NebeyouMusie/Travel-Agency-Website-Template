import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-accent py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <Mail className="mx-auto mb-4 h-12 w-12" />
        <h2 className="mb-4 text-3xl font-bold">Join Our Travel Community</h2>
        <p className="mb-8 text-lg">
          Subscribe to receive exclusive travel tips, promotions and inspiration
          straight to your inbox.
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white"
          />
          <Button className="bg-secondary hover:bg-secondary/90">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;