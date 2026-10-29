export interface RoleBenefit {
  id: string;
  roleName: string;
  badge: string;
  headline: string;
  subhead: string;
  accentColor: string; // "blue" | "violet" | "orange"
  benefits: string[];
}

export const rolesData: RoleBenefit[] = [
  {
    id: "reps",
    roleName: "Sales Reps",
    badge: "For Van Sales Reps",
    headline: "Issue bills and finish shop visits faster.",
    subhead: "Easy mobile app designed for quick order taking and instant bill printing, even without internet signal.",
    accentColor: "blue",
    benefits: [
      "Issue printed bills 100% offline",
      "Instant Bluetooth receipt printing",
      "Clear view of daily sales targets",
      "Take quick shop photos for proof",
    ],
  },
  {
    id: "distributors",
    roleName: "Distributors",
    badge: "For Van & Stock Control",
    headline: "Know where your vans, stock, and cash are.",
    subhead: "Full control over van inventory, credit limits, and daily cash & cheque collections before reps return.",
    accentColor: "violet",
    benefits: [
      "See live van locations on a map",
      "Track stock loaded and sold in each van",
      "See unpaid bills and credit limits instantly",
      "No paper bills to re-type in the evening",
    ],
  },
  {
    id: "management",
    roleName: "Management",
    badge: "For Business Owners",
    headline: "Make decisions with real daily numbers.",
    subhead: "Simple web dashboard showing total sales, collections, and top selling products across all routes.",
    accentColor: "orange",
    benefits: [
      "Track daily sales targets vs actuals",
      "See top selling products per route",
      "Check rep attendance and visit counts",
      "All business data stored in one safe place",
    ],
  },
];
