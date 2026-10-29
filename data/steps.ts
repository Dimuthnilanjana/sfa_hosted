export interface Step {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export const stepsData: Step[] = [
  {
    stepNumber: 1,
    title: "Load van & set routes",
    description: "Assign morning route visits and stock loaded into each van from your dashboard.",
    iconName: "Map",
  },
  {
    stepNumber: 2,
    title: "Visit shops & print bills",
    description: "Reps visit shops, take orders, print bills, and collect payments even without internet.",
    iconName: "Smartphone",
  },
  {
    stepNumber: 3,
    title: "Auto-sync when online",
    description: "Sales data updates to the cloud automatically as soon as mobile signal returns.",
    iconName: "CloudSync",
  },
  {
    stepNumber: 4,
    title: "Track sales live",
    description: "Owners and managers see total sales, cash collected, and van locations live on their screen.",
    iconName: "LineChart",
  },
];
