import { ChartBar, DollarSign, Percent, TrendingUp, Users } from 'lucide-react';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { 
  marketingMetrics, 
  channelPerformance 
} from '../data/mockData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  LineChart,
  Line
} from 'recharts';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const campaignPerformance = [
  { month: 'Jan', website: 5634, email: 3254, social: 4301 },
  { month: 'Feb', website: 6107, email: 3821, social: 4502 },
  { month: 'Mar', website: 7432, email: 4253, social: 5230 },
  { month: 'Apr', website: 6890, email: 3901, social: 4905 },
  { month: 'May', website: 8432, email: 4701, social: 5845 },
  { month: 'Jun', website: 9123, email: 5230, social: 6478 }
];

export default function Marketing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Marketing Analytics
        </h1>
        <p className="text-gray-500">Track and optimize your marketing campaigns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard 
          title="Active Campaigns" 
          value={marketingMetrics.campaignCount} 
          icon={<ChartBar className="h-6 w-6" />}
        />
        <StatCard 
          title="Website Visits" 
          value={marketingMetrics.websiteVisits.toLocaleString()} 
          positive={true}
          icon={<TrendingUp className="h-6 w-6" />}
        />
        <StatCard 
          title="New Leads" 
          value={marketingMetrics.leads}
          positive={true}
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard 
          title="Conversion Rate" 
          value={`${marketingMetrics.conversion}%`}
          positive={true}
          icon={<Percent className="h-6 w-6" />}
        />
        <StatCard 
          title="Marketing ROI" 
          value={`${marketingMetrics.roi}%`}
          positive={true}
          icon={<DollarSign className="h-6 w-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Campaign Performance" className="h-full">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={campaignPerformance}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), 'Visits']} />
                <Legend />
                <Line type="monotone" dataKey="website" name="Website" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="email" name="Email" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="social" name="Social Media" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Channel Performance" className="h-full">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={channelPerformance}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" unit="%" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'conversion') return [`${value}%`, 'Conversion Rate'];
                  if (name === 'cost') return [formatCurrency(Number(value)), 'Cost'];
                  return [value, 'Leads'];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="leads" name="Leads" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="conversion" name="Conversion Rate" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card title="Marketing Campaign Overview">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Channel
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leads
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 1, name: 'Summer Promotion', channel: 'Email', status: 'Active', leads: 124, conversion: 4.8, cost: 1500, roi: 320 },
                { id: 2, name: 'Product Launch', channel: 'Social Media', status: 'Active', leads: 98, conversion: 3.2, cost: 2200, roi: 250 },
                { id: 3, name: 'Brand Awareness', channel: 'Display', status: 'Active', leads: 67, conversion: 2.1, cost: 1800, roi: 180 },
                { id: 4, name: 'Lead Generation', channel: 'Search', status: 'Active', leads: 143, conversion: 5.7, cost: 2500, roi: 410 },
                { id: 5, name: 'Retargeting', channel: 'Multiple', status: 'Active', leads: 210, conversion: 7.6, cost: 3200, roi: 520 },
              ].map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{campaign.channel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.leads}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.conversion}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(campaign.cost)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.roi}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
