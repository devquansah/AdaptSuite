import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import Card from '../components/Card';
import { financialMetrics, revenueData, expenseCategories } from '../data/mockData';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const profitByMonth = revenueData.map(item => ({
  month: item.month,
  revenue: item.revenue,
  expenses: item.revenue * 0.65,
  profit: item.revenue * 0.35
}));

export default function Financials() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Financial Management
        </h1>
        <p className="text-gray-500">Track and analyze your company's financial performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="h-full">
          <div className="text-center pb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{formatCurrency(financialMetrics.revenue.current)}</p>
            <p className="text-sm text-gray-500 mt-1">Year to date</p>
          </div>
        </Card>
        <Card className="h-full">
          <div className="text-center pb-4">
            <h3 className="text-lg font-semibold text-gray-900">Expenses</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{formatCurrency(financialMetrics.expenses.current)}</p>
            <p className="text-sm text-gray-500 mt-1">Year to date</p>
          </div>
        </Card>
        <Card className="h-full">
          <div className="text-center pb-4">
            <h3 className="text-lg font-semibold text-gray-900">Profit</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(financialMetrics.profit.current)}</p>
            <p className="text-sm text-gray-500 mt-1">Year to date</p>
          </div>
        </Card>
      </div>

      <Card title="Revenue, Expense & Profit Analysis">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={profitByMonth}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value/1000}k`} />
              <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" />
              <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
              <Bar dataKey="profit" name="Profit" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Cash Flow Trend">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={profitByMonth}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
                <Legend />
                <Line type="monotone" dataKey="profit" name="Cash Flow" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Expense Categories">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={expenseCategories}
                margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => `$${value/1000}k`} />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Amount']} />
                <Bar dataKey="value" name="Amount" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
