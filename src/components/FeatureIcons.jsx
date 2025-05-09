import { Trophy, ShieldCheck, Truck, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-8 h-8 text-amber-800" />,
    title: 'High Quality',
    description: 'crafted from top materials',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-800" />,
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    icon: <Truck className="w-8 h-8 text-amber-800" />,
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    icon: <Headphones className="w-8 h-8 text-amber-800" />,
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
];

export default function FeatureIcons() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-start gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 min-w-[200px]">
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-amber-800">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
