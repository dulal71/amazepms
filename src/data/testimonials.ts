export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "t1",
    name: "Michael Anderson",
    role: "Property Owner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    review:
      "Their team completely transformed the way I manage my rental properties. Occupancy has increased, maintenance requests are handled quickly, and the monthly reports are incredibly detailed.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    review:
      "Professional, responsive, and transparent. I finally have peace of mind knowing my investment is managed by experienced professionals.",
    rating: 5,
  },
  {
    id: "t3",
    name: "David Wilson",
    role: "Apartment Owner",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    review:
      "From tenant screening to rent collection, everything is seamless. Their service has exceeded every expectation.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Emily Carter",
    role: "Rental Property Investor",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    review:
      "Communication is outstanding, maintenance is always completed on time, and my rental income has never been more consistent.",
    rating: 5,
  },
  {
    id: "t5",
    name: "James Thompson",
    role: "Commercial Property Owner",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    review:
      "An outstanding property management partner. Their professionalism and attention to detail have made a significant difference to my portfolio.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Olivia Martin",
    role: "Landlord",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
    review:
      "I highly recommend their services. They treat every property as if it were their own and provide exceptional support throughout the entire process.",
    rating: 5,
  },
];
