
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import FeaturedGames from '@/components/FeaturedGames';
import PopularNow from '@/components/PopularNow';
import RecentWinners from '@/components/RecentWinners';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LuckyCasino - Online Casino Games</title>
        <meta name="description" content="Play exclusive casino games including Plinko, Limbo, Dice and more" />
      </Head>
      
      <Header />
      
      <main>
        <HeroBanner />
        <FeaturedGames />
        <PopularNow />
        <RecentWinners />
      </main>
      
      <Footer />
    </>
  );
}
