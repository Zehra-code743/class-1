import Head from 'next/head';

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Our Products</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="border rounded-lg p-4 shadow-lg">
          <img src="./perfume.png" alt="Product 1" className="w-full rounded w-full h-[200px]" />
          <h2 className="text-xl mt-2">Perfume 1</h2>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <img src="/perfume2.png" alt="Product 2" className="w-full rounded  w-full h-[200px]" />
          <h2 className="text-xl mt-2">Perfume 2</h2>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <img src="./product3.png" alt="Product 3" className="w-full rounded  w-full h-[200px]" />
          <h2 className="text-xl mt-2">Perfume 3</h2>
        </div>
      </div>
    </div>
  );
}