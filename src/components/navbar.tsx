import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-pink-500 p-4">
          <ul className="flex space-x-4 justify-center">

        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/product">Product</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;