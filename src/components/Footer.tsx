import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
          <p className="text-sm">
            We're passionate about making your travel dreams come true. Discover
            the world with our expert guidance and personalized service.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Travel Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Travel Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@travelagency.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Travel Street, City, Country</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2024 Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;