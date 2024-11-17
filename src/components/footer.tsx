import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">© 2024 Perfume Boutique. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}