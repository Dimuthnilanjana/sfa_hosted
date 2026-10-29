export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  location: string;
  rating: number;
  quote: string;
  beforeAfterMetrics?: {
    metric: string;
    before: string;
    after: string;
  }[];
  isFeatured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  industryTag: string;
  resultHeadline: string;
  summary: string;
  metrics: string[];
}

// TODO: All testimonial quotes, client names, and case study metrics below are placeholders.
// MUST BE REPLACED WITH REAL, PERMISSION-APPROVED CLIENT TESTIMONIALS BEFORE LAUNCH.

export const featuredTestimonial: Testimonial = {
  id: "feat-1",
  authorName: "Dammika Samarasinghe", // TODO: Replace placeholder
  authorRole: "Managing Director",
  companyName: "Lanka Consumer Goods (Pvt) Ltd", // TODO: Replace placeholder
  location: "Colombo, Sri Lanka",
  rating: 5,
  quote:
    "Prima SFA completely simplified our van sales. Before, our team spent over 3 hours every evening matching paper bills and re-typing sales numbers. Now, bills are printed instantly, cheques are tracked, and evening checking takes just 15 minutes.",
  beforeAfterMetrics: [
    { metric: "Evening Accounts Work", before: "3.5 hours every day", after: "15 minutes done" }, // TODO: Replace placeholder metric
    { metric: "Billing Mistake Rate", before: "14% monthly mistakes", after: "Zero billing errors" }, // TODO: Replace placeholder metric
    { metric: "Customer Credit Days", before: "65 days average", after: "38 days average" }, // TODO: Replace placeholder metric
  ],
  isFeatured: true,
};

export const reviewsData: Testimonial[] = [
  {
    id: "rev-1",
    authorName: "Kushan Perera", // TODO: Replace placeholder
    authorRole: "Head of Distribution",
    companyName: "Apex Foods Sri Lanka",
    location: "Kandy",
    rating: 5,
    quote:
      "The app works great even in hill country routes with no phone signal. Our sales reps issue bills and collect payments without any delay.",
  },
  {
    id: "rev-2",
    authorName: "Nirosha Jayawardena", // TODO: Replace placeholder
    authorRole: "Finance & Operations Manager",
    companyName: "Islandwide Logistics",
    location: "Galle",
    rating: 5,
    quote:
      "We can see where our sales vans are live on the map. Automatic credit limit warnings stopped reps from giving unauthorized credit.",
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-1",
    title: "Simplified 45 Van Routes Across Colombo",
    industryTag: "Food & Household Goods",
    resultHeadline: "Saved 3 hours per rep daily & stopped billing errors",
    summary:
      "How a Colombo distributor stopped re-typing paper bills and gained complete control over daily van stock.",
    metrics: ["3 Hours Saved Daily", "Zero Billing Errors", "45 Active Vans"],
  },
  {
    id: "case-2",
    title: "Faster Cash & Cheque Collections",
    industryTag: "Beverage Wholesaler",
    resultHeadline: "Unpaid customer bills cleared 25 days faster",
    summary:
      "Automatic cheque tracking and credit alerts helped improve cash flow across 1,200 shops.",
    metrics: ["25 Days Faster Cash", "1,200 Shops Covered", "No Lost Cheques"],
  },
  {
    id: "case-3",
    title: "Reliable Van Billing in Remote Villages",
    industryTag: "Agro Products",
    resultHeadline: "100% bill printing uptime even with zero phone signal",
    summary:
      "Using Prima SFA in Southern province villages allowed instant bill printing on handheld Bluetooth printers.",
    metrics: ["Works Without Internet", "Instant Bill Print", "Zero Missing Sales"],
  },
];
