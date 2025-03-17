
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-lg font-bold px-4">1009 เอ็นเตอร์ไพรซ์</a>
        </Link>
        <div>
          <Link href="/about">
            <a className="px-4 hover:underline">เกี่ยวกับเรา</a>
          </Link>
          <Link href="/services">
            <a className="px-4 hover:underline">บริการ</a>
          </Link>
          <Link href="/contact">
            <a className="px-4 hover:underline">ติดต่อเรา</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
