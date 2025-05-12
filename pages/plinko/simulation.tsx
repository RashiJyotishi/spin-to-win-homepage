
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Navbar, Simulate, Simulation, Quotes } from '@/components/plinko';

export default function PlinkoSimulationPage() {
  return (
    <>
      <Head>
        <title>Plinko Simulation - LuckyCasino</title>
        <meta name="description" content="Run Plinko simulations to analyze outcomes" />
      </Head>
      
      <Header />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Plinko Simulation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Simulate />
          </div>
          <div className="lg:col-span-2">
            <Simulation />
          </div>
        </div>
        
        <Quotes />
      </main>
      
      <Footer />
    </>
  );
}
