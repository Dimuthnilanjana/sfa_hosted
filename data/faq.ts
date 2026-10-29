export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}





export const faqData: FAQItem[] = [
  {
    id: "setup-time",
    question: "How fast can we set up Prima SFA for our business?",
    answer:
      "Most distributors start using Prima SFA within 3 to 5 days. Our team in Colombo will help upload your items, prices, and shops, and train your sales reps on how to use the app.",
  },
  {
    id: "offline-mode",
    question: "Does it work when reps are in areas with no phone coverage?",
    answer:
      "Yes, completely. Sales reps can take orders, print bills, and collect cheques without any mobile internet connection. Everything saves safely on the phone and updates automatically once internet is back.",
  },
  {
    id: "erp-integration",
    question: "Can Prima SFA link with our accounting or billing software?",
    answer:
      "Yes! Prima SFA easily connects with QuickBooks, Tally, SAP, Microsoft Dynamics, or your existing billing system.",
  },
  {
    id: "hardware-support",
    question: "What phones and printers do our sales reps need?",
    answer:
      "Reps can use any standard Android smartphone. For printing bills, it connects with small, low-cost Bluetooth thermal receipt printers widely available in Sri Lanka.",
  },
  {
    id: "pricing-structure",
    question: "How much does Prima SFA cost?",
    answer:
      "We offer affordable monthly plans based on the number of sales reps using the app. Dashboard access for owners and managers is included with no hidden fees.",
  },
  {
    id: "data-security",
    question: "Is our customer and sales data kept private?",
    answer:
      "Yes, 100%. Your business data is encrypted and saved on secure servers with daily backups. Only authorized managers in your company can access your numbers.",
  },
];
