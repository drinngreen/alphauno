import { Check } from 'lucide-react';

interface Feature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  price: string;
  period?: string;
  features: Feature[];
  highlight?: boolean;
}

export default function ServiceCard({ title, price, period, features, highlight }: ServiceCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlight
          ? 'bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-xl'
          : 'bg-gray-800 text-white'
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && (
          <span className={`ml-2 ${highlight ? 'text-teal-100' : 'text-gray-400'}`}>
            {period}
          </span>
        )}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              size={20}
              className={`mr-3 mt-1 flex-shrink-0 ${
                highlight ? 'text-teal-100' : 'text-teal-400'
              }`}
            />
            <span className={highlight ? 'text-teal-50' : 'text-gray-300'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-6 rounded-lg transition-colors ${
          highlight
            ? 'bg-white text-teal-600 hover:bg-teal-50'
            : 'bg-teal-500 text-white hover:bg-teal-600'
        }`}
      >
        Inizia Ora
      </button>
    </div>
  );
}