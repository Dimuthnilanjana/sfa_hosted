export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colSpan?: string;
  highlightBadge?: string;
  gradient?: string;
}

export const featuresData: Feature[] = [
  {
    id: "invoicing",
    title: "Instant Bill Printing on the Road",
    description: "Issue printed bills directly from the van. Add discounts and free items automatically.",
    iconName: "FileText",
    colSpan: "col-span-12 lg:col-span-8 md:row-span-2",
    highlightBadge: "Main Van Sales Tool",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "route-planning",
    title: "Daily Route & Shop Visits",
    description: "Give your sales reps a clear list of shops to visit every morning in order.",
    iconName: "MapPin",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "payments",
    title: "Cash & Cheque Collection",
    description: "Record cash and post-dated cheques so no money goes missing.",
    iconName: "CreditCard",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    id: "gps-tracking",
    title: "Live Location Tracking",
    description: "See where your sales vans are right now on a map, with time-stamped shop visits.",
    iconName: "Navigation",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "retailer-mgmt",
    title: "Credit Limits & Due Alerts",
    description: "Stop billing shops automatically if they owe money past their credit limit.",
    iconName: "ShieldAlert",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "returns",
    title: "Damaged Stock & Returns",
    description: "Handle returned goods and damaged items easily with photo proof.",
    iconName: "RotateCcw",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: "targets",
    title: "Daily Target Progress Bars",
    description: "Reps can see how close they are to reaching today's sales target at any moment.",
    iconName: "TrendingUp",
    colSpan: "col-span-12 lg:col-span-8",
    highlightBadge: "Motivate Sales Reps",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: "image-capture",
    title: "Shop Photo Proof",
    description: "Sales reps take quick photos of shop fronts and product displays.",
    iconName: "Camera",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    id: "rep-expenses",
    title: "Daily Expense Claims",
    description: "Log fuel, vehicle parking, and food expenses with receipt photos.",
    iconName: "Receipt",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: "reports",
    title: "Easy Business Reports",
    description: "Get daily sales totals, unpaid bills lists, and stock levels in one click.",
    iconName: "BarChart3",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    gradient: "from-blue-600 to-navy",
  },
];
