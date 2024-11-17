import Head from 'next/head';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col w-1/2 space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Your Message" className="border p-2 rounded"  />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
}