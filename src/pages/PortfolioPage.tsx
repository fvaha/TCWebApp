import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Portfolio {
  slug: string;
  name: string;
  type: string;
  description: string;
  photos: string[];
}

export default function PortfolioPage() {
  const { slug } = useParams<{ slug: string }>();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  useEffect(() => {
    fetch(`/api/portfolio.php?slug=${slug}`)
      .then((res) => res.json())
      .then(setPortfolio);
  }, [slug]);

  if (!portfolio) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex items-center gap-4">
        <span className="h-8 w-8 text-gold">🗂</span>
        <h1 className="text-3xl font-bold text-gold">{portfolio.name}</h1>
      </div>
      <div className="mt-2 text-sm text-gold uppercase font-semibold">
        {portfolio.type}
      </div>
      <p className="mt-4 text-neutral-700 dark:text-neutral-200">
        {portfolio.description}
      </p>
      {portfolio.photos && portfolio.photos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {portfolio.photos.map((url, idx) => (
            <img
              key={url + idx}
              src={url}
              alt={portfolio.name + " photo " + (idx + 1)}
              className="rounded shadow border border-gold object-cover w-full h-64"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
}
