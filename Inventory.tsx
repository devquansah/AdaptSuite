import { Activity, Squircle, Package, ShoppingCart } from 'lucide-react';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { inventoryMetrics, topSellingProducts } from '../data/mockData';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Inventory Management
        </h1>
        <p className="text-gray-500">Track and manage your product inventory.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Products" 
          value={inventoryMetrics.totalItems} 
          icon={<Package className="h-6 w-6" />}
        />
        <StatCard 
          title="Low Stock Items" 
          value={inventoryMetrics.lowStock} 
          positive={false}
          icon={<Squircle className="h-6 w-6" />}
        />
        <StatCard 
          title="Out of Stock" 
          value={inventoryMetrics.outOfStock}
          positive={false}
          icon={<ShoppingCart className="h-6 w-6" />}
        />
        <StatCard 
          title="Reorder Required" 
          value={inventoryMetrics.reorderRequired}
          positive={false}
          icon={<Activity className="h-6 w-6" />}
        />
      </div>

      <Card title="Inventory List" description="Manage your product inventory.">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Add Product
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...topSellingProducts, 
                { id: 6, name: 'Premium Service Plan', sku: 'SVC-001', stock: 87, price: 299.99, sales: 432 },
                { id: 7, name: 'Advanced Widget E', sku: 'WDG-345', stock: 12, price: 79.99, sales: 302 },
                { id: 8, name: 'Enterprise Bundle', sku: 'BDL-054', stock: 0, price: 999.99, sales: 154 },
                { id: 9, name: 'Support Package', sku: 'SUP-111', stock: 543, price: 149.99, sales: 289 },
                { id: 10, name: 'Legacy Widget F', sku: 'WDG-010', stock: 32, price: 39.99, sales: 128 },
              ].map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.sku}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatCurrency(product.price)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${product.stock === 0 
                        ? 'bg-red-100 text-red-800' 
                        : product.stock < 50 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'}`}>
                      {product.stock === 0 
                        ? 'Out of Stock' 
                        : product.stock < 50 
                          ? 'Low Stock' 
                          : 'In Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Showing 1 to 10 of {inventoryMetrics.totalItems} entries
          </div>
          <div className="flex">
            <button className="border border-gray-300 rounded-l-md px-3 py-1 text-sm hover:bg-gray-50">Previous</button>
            <button className="bg-blue-600 text-white px-3 py-1 text-sm">1</button>
            <button className="border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">2</button>
            <button className="border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">3</button>
            <button className="border border-gray-300 rounded-r-md px-3 py-1 text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
