
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Navbar, Game, FoundIssue, Quotes } from '@/components/plinko';

export default function PlinkoPage() {
  return (
    <>
      <Head>
        <title>Plinko Game - LuckyCasino</title>
        <meta name="description" content="Play Plinko and watch the ball drop for big wins" />
      </Head>
      
      <Header />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Plinko Game</h1>
        <Game />
        <FoundIssue />
        <Quotes />
      </main>
      
      <Footer />
    </>
  );
}
