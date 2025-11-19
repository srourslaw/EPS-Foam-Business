// EPS Foam Cutting Business Data - Extracted from Master Report
export const executiveSummary = {
  recommendation: "PROCEED with Strategic Entry",
  classification: "VIABLE AND ATTRACTIVE OPPORTUNITY",
  prepared: "November 2025",
  version: "2.0 (Master Synthesis)",

  keyMetrics: [
    { label: "Break-Even Timeline", value: "18-24 months", icon: "clock", trend: "neutral" },
    { label: "Initial Investment", value: "$180k-$250k", icon: "dollarSign", trend: "neutral" },
    { label: "Year 3 Revenue", value: "$600k-$900k", icon: "trendingUp", trend: "up" },
    { label: "Year 3 Net Margin", value: "25-35%", icon: "percent", trend: "up" }
  ]
};

export const marketSize = {
  global: {
    current: { min: 10.44, max: 17.82, display: "$10.44-17.82B" },
    projected: { min: 14.64, max: 29.04, display: "$14.64-29.04B" },
    cagr: { min: 3.05, max: 5.6, display: "3.05-5.6%" },
    year: "2024-2030"
  },
  sydney: {
    annual: { min: 65, max: 90, display: "$65-90M" },
    local20km: { min: 12, max: 18, display: "$12-18M" }
  },
  segments: [
    { name: "Construction", value: 45, color: "#3b82f6" },
    { name: "Packaging", value: 28, color: "#8b5cf6" },
    { name: "Automotive", value: 9, color: "#ec4899" },
    { name: "Electronics", value: 7, color: "#f59e0b" },
    { name: "Other", value: 11, color: "#10b981" }
  ]
};

export const revenueProjections = [
  {
    period: "Year 1",
    conservative: 250,
    realistic: 300,
    optimistic: 400,
    orders: 50,
    margin: 37
  },
  {
    period: "Year 2",
    conservative: 420,
    realistic: 535,
    optimistic: 650,
    orders: 90,
    margin: 42
  },
  {
    period: "Year 3",
    conservative: 600,
    realistic: 750,
    optimistic: 900,
    orders: 125,
    margin: 45
  }
];

export const monthlyProjections = [
  { month: "Month 1", revenue: 8, costs: 19.7, cashFlow: -11.7, cumulative: -11.7 },
  { month: "Month 2", revenue: 12, costs: 16.0, cashFlow: -4.0, cumulative: -15.7 },
  { month: "Month 3", revenue: 16, costs: 17.5, cashFlow: -1.5, cumulative: -17.2 },
  { month: "Month 4", revenue: 20, costs: 17.9, cashFlow: 2.1, cumulative: -15.1 },
  { month: "Month 5", revenue: 22, costs: 18.2, cashFlow: 3.8, cumulative: -11.3 },
  { month: "Month 6", revenue: 25, costs: 18.5, cashFlow: 6.5, cumulative: -4.8 },
  { month: "Month 7", revenue: 28, costs: 18.7, cashFlow: 9.3, cumulative: 4.5 },
  { month: "Month 8", revenue: 30, costs: 18.9, cashFlow: 11.1, cumulative: 15.6 },
  { month: "Month 9", revenue: 32, costs: 19.1, cashFlow: 12.9, cumulative: 28.5 },
  { month: "Month 10", revenue: 35, costs: 19.3, cashFlow: 15.7, cumulative: 44.2 },
  { month: "Month 11", revenue: 37, costs: 19.5, cashFlow: 17.5, cumulative: 61.7 },
  { month: "Month 12", revenue: 40, costs: 19.8, cashFlow: 20.2, cumulative: 81.9 }
];

export const competitors = [
  {
    name: "The Foam Company",
    marketShare: { min: 20, max: 25, midpoint: 22, display: "20-25%" },
    minOrder: 250,
    leadTime: "5 days",
    leadTimeDays: 5,
    delivery: 80,
    strengths: ["National reach", "Brand recognition"],
    weaknesses: ["High minimums", "Slow turnaround"],
    coverage: "National"
  },
  {
    name: "Ausblox",
    marketShare: { min: 15, max: 20, midpoint: 17, display: "15-20%" },
    minOrder: null,
    leadTime: "1-3 days",
    leadTimeDays: 2,
    delivery: null,
    strengths: ["Local manufacturing", "Quick turnaround"],
    weaknesses: ["Capacity constraints"],
    coverage: "Sydney/NSW"
  },
  {
    name: "Foamex",
    marketShare: { min: 15, max: 18, midpoint: 16, display: "15-18%" },
    minOrder: null,
    leadTime: "1-5 days",
    leadTimeDays: 3,
    delivery: null,
    strengths: ["CNC technology", "Recycling"],
    weaknesses: ["Focuses on large clients"],
    coverage: "National (8 sites)"
  },
  {
    name: "Foam Sales",
    marketShare: { min: 10, max: 12, midpoint: 11, display: "10-12%" },
    minOrder: 500,
    leadTime: "2 weeks",
    leadTimeDays: 14,
    delivery: null,
    strengths: ["Bulk pricing"],
    weaknesses: ["Long lead times", "High minimums"],
    coverage: "National"
  },
  {
    name: "Australian Custom Foam Cutting",
    marketShare: { min: 5, max: 8, midpoint: 6, display: "5-8%" },
    minOrder: null,
    leadTime: "Standard",
    leadTimeDays: 4,
    delivery: null,
    strengths: ["Regional coverage", "Custom service focus", "St George area"],
    weaknesses: ["Limited capacity info", "Pricing not transparent"],
    coverage: "NSW (St George area focus)"
  },
  {
    name: "Others",
    marketShare: { min: 15, max: 20, midpoint: 28, display: "15-20%" },
    minOrder: null,
    leadTime: "Varies",
    leadTimeDays: null,
    delivery: null,
    strengths: ["Niche focus"],
    weaknesses: ["Limited capacity"],
    coverage: "Regional"
  }
];

export const customerSegments = [
  {
    segment: "Small Builders",
    revenueShare: 37,
    avgOrder: 400,
    ordersPerMonth: 35,
    cac: 115,
    ltv: 6150,
    ltvCacRatio: 41,
    retention: 65,
    priority: "PRIMARY"
  },
  {
    segment: "Large Construction",
    revenueShare: 22,
    avgOrder: 1800,
    ordersPerMonth: 12,
    cac: 1000,
    ltv: 30756,
    ltvCacRatio: 26,
    retention: 77,
    priority: "PRIMARY"
  },
  {
    segment: "Packaging",
    revenueShare: 22,
    avgOrder: 900,
    ordersPerMonth: 20,
    cac: 550,
    ltv: 29254,
    ltvCacRatio: 43,
    retention: 88,
    priority: "PRIMARY"
  },
  {
    segment: "Events/Signage",
    revenueShare: 17,
    avgOrder: 700,
    ordersPerMonth: 12,
    cac: 275,
    ltv: 5508,
    ltvCacRatio: 16,
    retention: 60,
    priority: "SECONDARY"
  },
  {
    segment: "Marine/Specialty",
    revenueShare: 7,
    avgOrder: 1200,
    ordersPerMonth: 4,
    cac: 425,
    ltv: 3524,
    ltvCacRatio: 7,
    retention: 73,
    priority: "OPPORTUNISTIC"
  }
];

export const pricingTiers = [
  {
    density: "15 kg/m³",
    thickness: "50mm",
    wholesale: 31,
    retail: 50,
    margin: 38,
    application: "Packaging, basic insulation"
  },
  {
    density: "15 kg/m³",
    thickness: "75mm",
    wholesale: 43,
    retail: 67,
    margin: 36,
    application: "Wall insulation, void fill"
  },
  {
    density: "15 kg/m³",
    thickness: "100mm",
    wholesale: 54,
    retail: 85,
    margin: 36,
    application: "Floor insulation, formwork"
  },
  {
    density: "20 kg/m³",
    thickness: "50mm",
    wholesale: 40,
    retail: 65,
    margin: 38,
    application: "Heavy-duty packaging"
  },
  {
    density: "20 kg/m³",
    thickness: "100mm",
    wholesale: 72,
    retail: 115,
    margin: 37,
    application: "Construction formwork"
  },
  {
    density: "30 kg/m³",
    thickness: "50mm",
    wholesale: 60,
    retail: 95,
    margin: 37,
    application: "High-performance insulation"
  }
];

export const equipmentOptions = [
  {
    tier: "Entry Level",
    cost: 50,
    capacity: 20,
    precision: "±1-2mm",
    support: "Limited",
    recommended: false,
    pros: ["Lower cost", "Quick delivery"],
    cons: ["Poor reliability", "Limited support", "Low precision"]
  },
  {
    tier: "Mid-Range (Wintech)",
    cost: 155,
    capacity: 80,
    precision: "±0.3-0.5mm",
    support: "Excellent",
    recommended: true,
    pros: ["Australian-made", "Local support", "Proven reliability", "Scalable"],
    cons: ["Higher upfront cost"]
  },
  {
    tier: "Premium",
    cost: 250,
    capacity: 160,
    precision: "±0.2-0.3mm",
    support: "Good",
    recommended: false,
    pros: ["Maximum capability", "High throughput"],
    cons: ["Overkill for startup", "International support delays"]
  }
];

export const hiringRoadmap = [
  {
    phase: "Phase 0",
    timing: "Months 1-9",
    revenue: 19,
    hire: "Owner Solo",
    cost: 0,
    teamSize: 1,
    revenueCapacity: 35
  },
  {
    phase: "Phase 1",
    timing: "Months 10-15",
    revenue: 40,
    hire: "Operations Assistant",
    cost: 62,
    teamSize: 2,
    revenueCapacity: 60,
    roi: 4.4
  },
  {
    phase: "Phase 2",
    timing: "Months 16-24",
    revenue: 65,
    hire: "CNC Operator",
    cost: 76,
    teamSize: 3,
    revenueCapacity: 100,
    roi: 5.4
  },
  {
    phase: "Phase 3",
    timing: "Months 24-36",
    revenue: 100,
    hire: "Sales Manager",
    cost: 96,
    teamSize: 4,
    revenueCapacity: 160,
    roi: 6.6
  }
];

export const swotAnalysis = {
  strengths: [
    { title: "Strategic Location", description: "Canterbury-Bankstown 22.5% construction density (+31% vs NSW avg)", impact: "high" },
    { title: "Owned Premises", description: "$30k-42k/year rent savings", impact: "high" },
    { title: "Service Differentiation", description: "No minimums, same-day delivery capability", impact: "high" },
    { title: "CNC Technology", description: "±0.3-0.5mm precision enables premium applications", impact: "medium" },
    { title: "Market Timing", description: "NSW approvals +30.4%, strong construction recovery", impact: "high" },
    { title: "Owner Capability", description: "$270k annual income provides financial stability", impact: "medium" }
  ],
  weaknesses: [
    { title: "New Entrant", description: "Zero brand recognition, no customer base", impact: "high" },
    { title: "Scale Disadvantage", description: "Cannot compete on price for high-volume orders", impact: "medium" },
    { title: "Capital Intensity", description: "$180k-250k investment before first sale", impact: "high" },
    { title: "Owner-Dependent", description: "Initially relies solely on owner", impact: "high" },
    { title: "No Manufacturing", description: "Reliant on external suppliers", impact: "medium" }
  ],
  opportunities: [
    { title: "Underserved Segments", description: "Small builders, rush orders, specialty applications", impact: "high" },
    { title: "Construction Growth", description: "$17.1B federal infrastructure, housing shortage", impact: "high" },
    { title: "Brisbane 2032 Spillover", description: "Resource rebalancing post-Olympics", impact: "medium" },
    { title: "Sustainability", description: "EPS recycling program differentiation", impact: "medium" },
    { title: "Prefab/Modular", description: "Market $10.78B→$13.71B by 2030", impact: "medium" },
    { title: "E-Commerce Packaging", description: "5-7% annual growth", impact: "medium" },
    { title: "Vertical Integration", description: "Phase 2: Add manufacturing (EPS molding), expand to XPS/polyurethane, proprietary products", impact: "medium" }
  ],
  threats: [
    { title: "Established Competition", description: "National players control 70-75% market share", impact: "high" },
    { title: "Economic Downturn", description: "Construction highly cyclical", impact: "high" },
    { title: "Material Cost Volatility", description: "EPS linked to petroleum (5-8% fluctuation)", impact: "medium" },
    { title: "Builder Insolvencies", description: "3,595 cases in 2024-25 (+21% YoY)", impact: "medium" },
    { title: "Labor Shortages", description: "90,000 workers needed nationally", impact: "medium" },
    { title: "Regulatory Risk", description: "EPR packaging schemes possible", impact: "low" },
    { title: "Technological Substitution", description: "Alternative materials (spray foam, aerogel), bio-based foams, 3D printing", impact: "medium" },
    { title: "Customer Concentration", description: "Construction 44.8% of market, top 10 customers = 40-60% revenue risk", impact: "medium" }
  ]
};

export const risks = [
  {
    risk: "Insufficient Customer Acquisition",
    likelihood: 40,
    impact: "Critical",
    mitigation: "Pre-launch pipeline development (3 months prior), aggressive first-customer discounts (20% off), founder-led sales (50+ calls/week), free trials/samples to target accounts",
    status: "high"
  },
  {
    risk: "Major Competitor Price War",
    likelihood: 35,
    impact: "High",
    mitigation: "Differentiate on service not price (speed, flexibility, minimums), target niches large players ignore, build switching costs through relationships and technical value",
    status: "medium"
  },
  {
    risk: "Equipment Breakdown/Failure",
    likelihood: 20,
    impact: "Critical",
    mitigation: "Purchase new equipment with 12-month warranty, strict preventive maintenance schedule, spare parts inventory (wires, critical components), equipment insurance coverage",
    status: "medium"
  },
  {
    risk: "Working Capital Shortage",
    likelihood: 30,
    impact: "High",
    mitigation: "$20k working capital buffer in initial funding, strict credit terms enforcement (30 days), inventory management discipline (2-3 weeks max), line of credit facility established",
    status: "medium"
  },
  {
    risk: "Key Employee Departure",
    likelihood: 30,
    impact: "Medium",
    mitigation: "Competitive compensation, cross-training (multiple people know each role), documented procedures (SOPs), maintain recruitment pipeline",
    status: "medium"
  },
  {
    risk: "Quality/Customer Complaint Issue",
    likelihood: 25,
    impact: "Medium",
    mitigation: "Quality control procedures (measure, verify before delivery), customer approval checkpoints for complex jobs, professional liability insurance, complaint resolution <24 hours",
    status: "low"
  },
  {
    risk: "Regulatory Change Affecting EPS",
    likelihood: 12,
    impact: "Medium",
    mitigation: "Monitor EPSA and industry associations for regulatory proposals, advocate against expansion of bans, diversify product range if needed (XPS, polyurethane)",
    status: "low"
  },
  {
    risk: "Natural Disaster (Fire, Flood)",
    likelihood: 8,
    impact: "Critical",
    mitigation: "Business/equipment insurance, fire suppression system, elevated storage (flood protection), off-site data backup, disaster recovery plan",
    status: "low"
  },
  {
    risk: "Cyber Attack / Data Breach",
    likelihood: 18,
    impact: "Medium",
    mitigation: "Cybersecurity basics (strong passwords, regular updates, backups), cyber insurance, limited credit card data storage, cloud-based systems with vendor security",
    status: "low"
  },
  {
    risk: "Owner Health/Injury",
    likelihood: 12,
    impact: "Critical",
    mitigation: "Personal health insurance, income protection insurance, safety protocols to minimize injury risk, backup key person identified, disability insurance payout",
    status: "low"
  }
];

export const actionPlan = [
  {
    phase: "Month -3",
    title: "Due Diligence",
    tasks: [
      "Visit 15-20 construction sites",
      "Interview 10-15 builders",
      "Finalize financial model",
      "Confirm funding"
    ],
    status: "pending"
  },
  {
    phase: "Month -2",
    title: "Business Setup",
    tasks: [
      "Register ABN, business name",
      "Equipment quotes (Wintech priority)",
      "Supplier negotiations",
      "Facility inspection"
    ],
    status: "pending"
  },
  {
    phase: "Month -1",
    title: "Pre-Launch",
    tasks: [
      "Order CNC equipment (12-16 week lead)",
      "Facility improvements",
      "Website build",
      "Join HIA/Master Builders"
    ],
    status: "pending"
  },
  {
    phase: "Month 1-3",
    title: "Launch",
    tasks: [
      "Equipment commissioning",
      "Process first 10-20 orders",
      "Launch Google Ads campaign",
      "Contact 50-100 prospects"
    ],
    status: "pending"
  },
  {
    phase: "Month 4-6",
    title: "Growth",
    tasks: [
      "Achieve 40+ orders/month",
      "Expand to 30-50 active customers",
      "Refine operations",
      "Implement CRM"
    ],
    status: "pending"
  }
];

export const locationAdvantages = [
  {
    factor: "Construction Density",
    hurstvillePadstow: "22.5%",
    nswAverage: "17.1%",
    advantage: "+31%",
    description: "Higher concentration of construction businesses in Canterbury-Bankstown"
  },
  {
    factor: "Delivery Time",
    hurstvillePadstow: "2-4 hours",
    competitors: "1-14 days",
    advantage: "75-90% faster",
    description: "Same-day capability vs next-day minimum from competitors"
  },
  {
    factor: "Delivery Cost",
    hurstvillePadstow: "$40-60",
    competitors: "$80-120",
    advantage: "40-50% lower",
    description: "Local proximity reduces freight costs significantly"
  },
  {
    factor: "Rent Savings",
    hurstvillePadstow: "$0",
    market: "$30k-42k/yr",
    advantage: "$30k-42k saved",
    description: "Owned premises eliminates major fixed cost"
  }
];
