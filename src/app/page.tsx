import Head from 'next/head';
import Navbar from "@/components/navbar" 
import Footer from "@/components/footer"


const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Head>
        <title>Perfume Boutique</title>
      </Head>
     
      <main className="flex-grow flex flex-col items-center justify-center text-center ">
        <h1 className="text-4xl font-bold mb-4 animate-bounce">Welcome to Perfume Boutique</h1>
        <p className="text-lg mb-8">Discover your signature scent.</p>
        <img
  src="/images 4.png"
  alt="Perfume "
  className="w-full max-w-lg rounded-lg shadow-lg"
  
/>

      </main>
   
    </div>
  );
};
export default Home;