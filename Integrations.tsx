import Card from '../components/Card';
import { availableIntegrations } from '../data/mockData';

export default function Integrations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Integrations
        </h1>
        <p className="text-gray-500">Connect with your CRM, marketing tools, and other business systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Active Integrations</h3>
            <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
              4 Connected
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            {availableIntegrations
              .filter(integration => integration.connected)
              .map(integration => (
                <div key={integration.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{integration.logo}</div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900">{integration.name}</h4>
                      <p className="text-sm text-gray-500">{integration.category}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200">
                    Disconnect
                  </button>
                </div>
              ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Available Integrations</h3>
            <button className="text-sm font-medium px-3 py-1 text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
              Browse All
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            {availableIntegrations
              .filter(integration => !integration.connected)
              .map(integration => (
                <div key={integration.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{integration.logo}</div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900">{integration.name}</h4>
                      <p className="text-sm text-gray-500">{integration.category}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
                    Connect
                  </button>
                </div>
              ))}
          </div>
        </Card>
      </div>

      <Card title="Popular Integration Scenarios">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <div className="text-2xl mr-2">🔄</div>
              <h4 className="text-lg font-medium">CRM Sync</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">Automatically sync contacts, leads and opportunities with your CRM system.</p>
            <button className="px-4 py-2 w-full text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
              Set Up CRM Sync
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <div className="text-2xl mr-2">📊</div>
              <h4 className="text-lg font-medium">Marketing Analytics</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">Connect your marketing tools to track campaign performance and ROI in one place.</p>
            <button className="px-4 py-2 w-full text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
              Configure Analytics
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <div className="text-2xl mr-2">💰</div>
              <h4 className="text-lg font-medium">Financial Automation</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">Connect accounting software to automate financial reporting and reconciliation.</p>
            <button className="px-4 py-2 w-full text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
              Set Up Finance Sync
            </button>
          </div>
        </div>
      </Card>

      <Card title="API Access" description="Access your data programmatically using our API">
        <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto mb-4">
          <code>
            curl -X GET https://api.fusionerp.com/v1/data \<br />
            &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
            &nbsp;&nbsp;-H "Content-Type: application/json"
          </code>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200">
            Generate API Key
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
            View Documentation
          </button>
        </div>
      </Card>
    </div>
  );
}
