import React, { useState, useEffect } from "react";
import { FaTwitter, FaHeart, FaRetweet, FaComment, FaShare } from "react-icons/fa";

interface Tweet {
  id: string;
  text: string;
  author: {
    name: string;
    username: string;
    profile_image_url: string;
  };
  created_at: string;
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
}

const TwitterFeed: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock tweets for demonstration (since we can't actually fetch from Twitter API without proper setup)
  const mockTweets: Tweet[] = [
    {
      id: "1",
      text: "Excited to announce our new quantum-resistant encryption SDK! 🚀 #TerraCrypt #Security #Crypto",
      author: {
        name: "TerraCrypt",
        username: "terra_crypt",
        profile_image_url: "https://pbs.twimg.com/profile_images/1234567890/avatar.jpg"
      },
      created_at: "2024-01-15T10:30:00Z",
      public_metrics: {
        retweet_count: 45,
        reply_count: 12,
        like_count: 234,
        quote_count: 8
      }
    },
    {
      id: "2",
      text: "Our zero-trust architecture ensures maximum privacy for all users. No compromises. 🔐 #Privacy #ZeroTrust",
      author: {
        name: "TerraCrypt",
        username: "terra_crypt",
        profile_image_url: "https://pbs.twimg.com/profile_images/1234567890/avatar.jpg"
      },
      created_at: "2024-01-14T15:45:00Z",
      public_metrics: {
        retweet_count: 23,
        reply_count: 7,
        like_count: 156,
        quote_count: 3
      }
    },
    {
      id: "3",
      text: "The future of secure communication is here. $TERRA token powers our ecosystem. 💎 #TERRA #Blockchain",
      author: {
        name: "TerraCrypt",
        username: "terra_crypt",
        profile_image_url: "https://pbs.twimg.com/profile_images/1234567890/avatar.jpg"
      },
      created_at: "2024-01-13T09:20:00Z",
      public_metrics: {
        retweet_count: 67,
        reply_count: 18,
        like_count: 342,
        quote_count: 12
      }
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchTweets = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would fetch from Twitter API here
        // const response = await fetch('/api/twitter/terra_crypt');
        // const data = await response.json();
        
        // For now, use mock data
        setTimeout(() => {
          setTweets(mockTweets);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load tweets");
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "now";
    if (diffInHours < 24) return `${diffInHours}h`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d`;
    return date.toLocaleDateString();
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  if (loading) {
    return (
      <div className="p-2">
        <div className="flex items-center mb-3">
          <FaTwitter className="text-lg text-gold mr-2" />
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Latest Tweets</h3>
        </div>
        <div className="animate-pulse space-y-2">
          <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-2">
        <div className="flex items-center mb-3">
          <FaTwitter className="text-lg text-gold mr-2" />
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Latest Tweets</h3>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="flex items-center mb-3">
        <FaTwitter className="text-lg text-gold mr-2" />
        <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Latest Tweets</h3>
      </div>
      
      <div className="space-y-3">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="border-b border-neutral-200 dark:border-neutral-700 pb-3 last:border-b-0">
            <div className="flex items-start space-x-2">
              <img
                src={tweet.author.profile_image_url}
                alt={tweet.author.name}
                className="w-6 h-6 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="font-bold text-neutral-900 dark:text-white text-xs">
                    {tweet.author.name}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                    @{tweet.author.username}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                    · {formatDate(tweet.created_at)}
                  </span>
                </div>
                
                <p className="text-neutral-900 dark:text-white text-xs mb-2 leading-relaxed">
                  {tweet.text}
                </p>
                
                <div className="flex items-center space-x-4 text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center space-x-1">
                    <FaComment className="w-3 h-3" />
                    <span className="text-xs">{formatNumber(tweet.public_metrics.reply_count)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaRetweet className="w-3 h-3" />
                    <span className="text-xs">{formatNumber(tweet.public_metrics.retweet_count)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaHeart className="w-3 h-3" />
                    <span className="text-xs">{formatNumber(tweet.public_metrics.like_count)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShare className="w-3 h-3" />
                    <span className="text-xs">{formatNumber(tweet.public_metrics.quote_count)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-center">
        <a
          href="https://x.com/terra_crypt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gold hover:text-yellow-500 transition-colors text-xs"
        >
          <FaTwitter className="w-3 h-3 mr-1" />
          Follow @terra_crypt
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed; 