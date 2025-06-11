import React from "react";

type FeatureCardProps = {
  title: string;
  desc: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc }) => {
  return (
    <div className="bg-white shadow rounded-lg p-8 border border-neutral-200">
      <h3 className="text-xl font-semibold mb-2 text-green-600">{title}</h3>
      <p className="text-neutral-700">{desc}</p>
    </div>
  );
};

export default FeatureCard;
