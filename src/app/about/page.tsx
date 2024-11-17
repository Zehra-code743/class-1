"use client"
import Head from 'next/head';
 function aboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 lg:bg-gray-50 ">
      <Head>
        <title>About Us</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-8">We offer a curated selection of the finest perfumes.</p>
      <img src="./image5.png" alt="About" className="w-1/2 rounded-lg shadow-lg" />
    </div>
  );
}
export default aboutPage;