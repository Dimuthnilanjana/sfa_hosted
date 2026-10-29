export interface StatItem {
  id: string;
  value: number; // Numeric target for count-up
  prefix?: string;
  suffix: string;
  label: string;
  isPlaceholder?: boolean;
}

// TODO: Replace these placeholder numbers with verified real figures prior to production release
export const statsData: StatItem[] = [
  {
    id: "reps",
    value: 500, // TODO: Replace with real number of active reps
    suffix: "+",
    label: "Active Field Sales Reps",
    isPlaceholder: true,
  },
  {
    id: "distributors",
    value: 40, // TODO: Replace with real number of distributor networks
    suffix: "+",
    label: "Distributor Networks",
    isPlaceholder: true,
  },
  {
    id: "invoices",
    value: 2, // TODO: Replace with real millions of invoices processed
    suffix: "M+",
    label: "Invoices Processed",
    isPlaceholder: true,
  },
  {
    id: "experience",
    value: 12, // TODO: Replace with verified years of experience
    suffix: " Years",
    label: "Distribution Domain Experience",
    isPlaceholder: true,
  },
];
