import { ReactNode } from 'react';
import Card from './Card';

type StatCardProps = {
  title: string;
  value: string | number;
  change?: string | number;
  positive?: boolean;
  icon?: ReactNode;
  link?: string;
};

export default function StatCard({ title, value, change, positive = true, icon, link }: StatCardProps) {
  return (
    <Card className="h-full">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-1">{value}</h3>
          {change && (
            <div className="flex items-center mt-1">
              <span className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
                {positive ? '+' : ''}{change}
              </span>
              <span className="text-xs text-gray-500 ml-1">vs last period</span>
            </div>
          )}
        </div>
        {icon && <div className="text-blue-500">{icon}</div>}
      </div>
      {link && (
        <div className="mt-4">
          <a href={link} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View details &rarr;
          </a>
        </div>
      )}
    </Card>
  );
}
