import { useEffect, useState } from 'react';
import { 
  BarChart, 
  Bar, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Squircle, Box, DollarSign, TrendingUp, Users } from 'lucide-react';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { 
  financialMetrics, 
  revenueData, 
  expenseCategories,
  inventoryMetrics,
  topSellingProducts,
  crmMetrics
} from '../data/mockData';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const calculatePercentChange = (current: number, previous: number) => {
  return ((current - previous) / previous * 100).toFixed(1);
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d'];

export default function Dashboard() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {greeting}, Admin
        </h1>
        <p className="text-gray-500">Here's what's happening with your business today.</p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value={formatCurrency(financialMetrics.revenue.current)} 
          change={`${calculatePercentChange(financialMetrics.revenue.current, financialMetrics.revenue.previous)}%`}
          positive={financialMetrics.revenue.current > financialMetrics.revenue.previous}
          icon={<DollarSign className="h-6 w-6" />}
        />
        <StatCard 
          title="Inventory Items" 
          value={inventoryMetrics.totalItems} 
          change={inventoryMetrics.lowStock} 
          positive={false}
          icon={<Box className="h-6 w-6" />}
        />
        <StatCard 
          title="CRM Leads" 
          value={crmMetrics.totalLeads} 
          change={crmMetrics.newLeads}
          positive={true}
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard 
          title="Marketing ROI" 
          value={`${financialMetrics.profit.current / financialMetrics.expenses.current * 100}%`} 
          change={`${calculatePercentChange(financialMetrics.profit.current, financialMetrics.profit.previous)}%`}
          positive={financialMetrics.profit.current > financialMetrics.profit.previous}
          icon={<TrendingUp className="h-6 w-6" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Trend (2023)" className="h-full">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis 
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip formatter={(value) => [`${formatCurrency(Number(value))}`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="rgba(59, 130, 246, 0.2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Expense Breakdown" className="h-full">
          <div className="h-80 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Amount']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Alerts and Notifications */}
      <Card title="Action Items" className="bg-gray-50 border-l-4 border-l-amber-500">
        <div className="divide-y divide-gray-100">
          <div className="flex items-start py-3">
            <div className="flex-shrink-0 mr-3">
              <Squircle className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Low Stock Alert</h4>
              <p className="text-sm text-gray-600">
                {inventoryMetrics.lowStock} items are running low on stock and need attention.
              </p>
              <a href="/inventory" className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-1 inline-block">
                View inventory
              </a>
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="flex-shrink-0 mr-3">
              <Squircle className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">New Leads Require Action</h4>
              <p className="text-sm text-gray-600">
                {crmMetrics.newLeads} new leads have been added and need to be qualified.
              </p>
              <a href="/crm" className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-1 inline-block">
                View leads
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Activity Table */}
      <Card title="Top Selling Products">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topSellingProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.sku}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${product.stock < 100 ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                      {product.stock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{formatCurrency(product.price)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.sales}</div>
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
