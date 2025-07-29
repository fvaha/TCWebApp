import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Portfolio {
  slug: string;
  name: string;
  type: string;
  description: string;
  thumbnail?: string;
}

export default function PortfoliosGrid() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolios.php")
      .then((res) => res.json())
      .then(setPortfolios)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="full-bleed w-full bg-white dark:bg-black transition-colors">
      <section
        id="portfolios"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-2 md:py-24 xl:grid-cols-3"
      >
        {portfolios.map((portfolio) => (
          <Link
            key={portfolio.slug}
            to={`/portfolio/${portfolio.slug}`}
            className="relative flex flex-col rounded-xl border border-gold bg-white p-6 shadow transition dark:bg-neutral-950 hover:shadow-lg"
          >
            {portfolio.thumbnail && (
              <div className="mb-4 pointer-events-none w-full h-40 flex justify-center items-center">
                <img
                  src={portfolio.thumbnail}
                  alt={portfolio.name}
                  className="rounded-lg object-cover max-h-40 max-w-full border border-gold shadow"
                  draggable={false}
                />
              </div>
            )}
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 text-gold">🗂</span>
              <h2 className="text-xl font-bold text-gold">{portfolio.name}</h2>
            </div>
            <div className="mt-1 text-sm text-gold uppercase font-semibold">{portfolio.type}</div>
            <p className="mt-2 font-light text-neutral-700 dark:text-neutral-200">
              {portfolio.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
