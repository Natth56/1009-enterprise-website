
import Head from 'next/head';

import Navbar from '../components/Navbar';

export default function Services() {
  return (
    <Navbar />

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <Head>
        <title>บริการของเรา | 1009 เอ็นเตอร์ไพรซ์</title>
      </Head>
      <h1 className="text-4xl font-bold">บริการของเรา</h1>
      <ul className="mt-6 text-lg">
        <li>📌 บริการบัญชีและการทำบัญชี</li>
        <li>📌 การยื่นภาษีและวางแผนภาษี</li>
        <li>📌 ที่ปรึกษาทางธุรกิจและการเงิน</li>
      </ul>
    </div>
  );
}
