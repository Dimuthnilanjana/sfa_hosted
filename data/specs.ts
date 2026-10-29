export interface TechSpec {
  category: string;
  detail: string;
  description: string;
  isUnverified?: boolean;
}

export interface IntegrationLogo {
  id: string;
  name: string;
  category: string;
}

export const techSpecsData: TechSpec[] = [
  {
    category: "Phone Compatibility",
    detail: "Runs on Any Android Phone",
    description: "Works on standard Android smartphones or tablets used by sales reps.",
  },
  {
    category: "Internet Requirement",
    detail: "Works 100% Without Internet",
    description: "Take orders and print bills even in remote areas with zero mobile signal.",
  },
  {
    category: "Bill Printing",
    detail: "Pocket Bluetooth Printer",
    description: "Prints receipts instantly on small handheld thermal printers.",
  },
  {
    category: "Data Syncing",
    detail: "Automatic Cloud Sync",
    description: "All bills and collections update automatically on your dashboard when internet is available.",
  },
  {
    category: "Accounting Systems",
    detail: "Connects to Your Software",
    description: "Works together with SAP, QuickBooks, Tally, Microsoft Dynamics, or your custom billing system.",
  },
  {
    category: "Data Security",
    detail: "100% Safe & Backed Up",
    description: "Your sales data is completely private, encrypted, and backed up daily.",
  },
  {
    category: "Help & Training",
    detail: "Local Team Support",
    description: "Full training for your reps on-site, plus 24/7 hotline and WhatsApp help from Colombo.",
  },
];

export const integrationsData: IntegrationLogo[] = [
  { id: "sap", name: "SAP Business One", category: "Accounting & ERP" },
  { id: "dynamics", name: "Microsoft Dynamics", category: "Accounting & ERP" },
  { id: "quickbooks", name: "QuickBooks", category: "Accounting" },
  { id: "tally", name: "Tally", category: "Accounting" },
  { id: "custom", name: "Your Custom System", category: "Custom Back-end" },
];
