// Financial Data
export const financialMetrics = {
  revenue: {
    current: 857432,
    previous: 753201,
  },
  profit: {
    current: 215438,
    previous: 189321,
  },
  expenses: {
    current: 641994,
    previous: 563880,
  },
  cashFlow: {
    current: 145327,
    previous: 132541,
  },
};

export const revenueData = [
  { month: 'Jan', revenue: 67500 },
  { month: 'Feb', revenue: 72300 },
  { month: 'Mar', revenue: 78900 },
  { month: 'Apr', revenue: 71200 },
  { month: 'May', revenue: 85600 },
  { month: 'Jun', revenue: 82100 },
  { month: 'Jul', revenue: 91800 },
  { month: 'Aug', revenue: 98700 },
  { month: 'Sep', revenue: 104500 },
  { month: 'Oct', revenue: 97300 },
  { month: 'Nov', revenue: 89600 },
  { month: 'Dec', revenue: 92100 },
];

export const expenseCategories = [
  { name: 'Salaries', value: 420000 },
  { name: 'Operations', value: 185000 },
  { name: 'Marketing', value: 78000 },
  { name: 'Software', value: 45000 },
  { name: 'Office', value: 67000 },
  { name: 'Other', value: 23000 },
];

// Inventory Data
export const inventoryMetrics = {
  totalItems: 2578,
  lowStock: 142,
  outOfStock: 36,
  reorderRequired: 87,
};

export const topSellingProducts = [
  { id: 1, name: 'Premium Widget A', sku: 'WDG-001', stock: 342, price: 89.99, sales: 1245 },
  { id: 2, name: 'Enterprise Solution B', sku: 'ENT-104', stock: 56, price: 599.99, sales: 856 },
  { id: 3, name: 'Standard Widget C', sku: 'WDG-056', stock: 487, price: 49.99, sales: 763 },
  { id: 4, name: 'Pro License Pack', sku: 'LIC-287', stock: 985, price: 199.99, sales: 632 },
  { id: 5, name: 'Basic Widget D', sku: 'WDG-112', stock: 231, price: 29.99, sales: 584 },
];

// CRM Data
export const crmMetrics = {
  totalLeads: 2367,
  newLeads: 186,
  qualifiedLeads: 876,
  opportunities: 432,
  closedDeals: 98,
};

export const dealsForecast = [
  { stage: 'Prospecting', count: 157, value: 1450000 },
  { stage: 'Qualification', count: 132, value: 1280000 },
  { stage: 'Needs Analysis', count: 87, value: 890000 },
  { stage: 'Proposal', count: 64, value: 750000 },
  { stage: 'Negotiation', count: 38, value: 520000 },
  { stage: 'Closed Won', count: 98, value: 1245000 },
];

export const recentLeads = [
  { id: 1, name: 'John Smith', company: 'Acme Corp', email: 'john.smith@acmecorp.com', phone: '(555) 123-4567', status: 'New' },
  { id: 2, name: 'Sarah Johnson', company: 'Global Tech', email: 'sjohnson@globaltech.com', phone: '(555) 987-6543', status: 'Contacted' },
  { id: 3, name: 'Michael Brown', company: 'XYZ Solutions', email: 'mbrown@xyzsolutions.com', phone: '(555) 567-8901', status: 'Qualified' },
  { id: 4, name: 'Emily Davis', company: 'Future Industries', email: 'emily.d@futureindustries.com', phone: '(555) 234-5678', status: 'New' },
  { id: 5, name: 'David Wilson', company: 'Innovative Inc', email: 'dwilson@innovative.com', phone: '(555) 876-5432', status: 'Contacted' },
];

// Marketing Data
export const marketingMetrics = {
  campaignCount: 12,
  leads: 642,
  websiteVisits: 28467,
  conversion: 3.2,
  roi: 287,
};

export const channelPerformance = [
  { channel: 'Email', leads: 235, conversion: 4.2, cost: 3200 },
  { channel: 'Social Media', leads: 187, conversion: 2.8, cost: 5600 },
  { channel: 'Search', leads: 143, conversion: 3.5, cost: 4800 },
  { channel: 'Events', leads: 77, conversion: 5.1, cost: 9200 },
];

// Integrations
export const availableIntegrations = [
  { id: 'salesforce', name: 'Salesforce', category: 'CRM', connected: true, logo: '🔵' },
  { id: 'hubspot', name: 'HubSpot', category: 'CRM', connected: false, logo: '🧡' },
  { id: 'mailchimp', name: 'Mailchimp', category: 'Marketing', connected: true, logo: '💌' },
  { id: 'shopify', name: 'Shopify', category: 'E-Commerce', connected: false, logo: '🛒' },
  { id: 'quickbooks', name: 'QuickBooks', category: 'Accounting', connected: true, logo: '💰' },
  { id: 'slack', name: 'Slack', category: 'Communication', connected: true, logo: '💬' },
  { id: 'google_analytics', name: 'Google Analytics', category: 'Analytics', connected: false, logo: '📊' },
  { id: 'zendesk', name: 'Zendesk', category: 'Support', connected: false, logo: '🎯' },
];
