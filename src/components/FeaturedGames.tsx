
import React from 'react';
import GameCard from './GameCard';

const FeaturedGames: React.FC = () => {
  const games = [
    {
      title: "Plinko",
      description: "Watch the ball cascade through pins for exciting multipliers",
      imageUrl: "/placeholder.svg" // We'll use placeholder as backup
    },
    {
      title: "Limbo",
      description: "Test your luck to see how high the multiplier will climb",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Dice",
      description: "Roll the dice and predict the outcome for instant wins",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Games</h2>
        <a href="#" className="text-casino-purple hover:text-casino-purple/80 text-sm font-medium">View All Games →</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <GameCard 
            key={game.title}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGames;
