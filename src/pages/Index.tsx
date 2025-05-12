
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import FeaturedGames from '../components/FeaturedGames';
import PopularNow from '../components/PopularNow';
import RecentWinners from '../components/RecentWinners';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <PopularNow />
        <FeaturedGames />
        <RecentWinners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
