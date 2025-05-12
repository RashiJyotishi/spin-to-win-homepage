
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiceGame from '@/components/Dicegame/DiceGame';

export default function DiceGamePage() {
  return (
    <>
      <Head>
        <title>Dice Game - LuckyCasino</title>
        <meta name="description" content="Play our exciting Dice game and win big rewards" />
      </Head>
      
      <Header />
      
      <main>
        <DiceGame />
      </main>
      
      <Footer />
    </>
  );
}
