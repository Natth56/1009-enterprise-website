
import Head from 'next/head';

import Navbar from '../components/Navbar';

export default function About() {
  return (
    <Navbar />

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <Head>
        <title>เกี่ยวกับเรา | 1009 เอ็นเตอร์ไพรซ์</title>
      </Head>
      <h1 className="text-4xl font-bold">เกี่ยวกับเรา</h1>
      <p className="mt-4 text-lg max-w-3xl text-center">
        1009 เอ็นเตอร์ไพรซ์ ให้บริการด้านบัญชี ภาษี และที่ปรึกษาธุรกิจ
        เรามุ่งมั่นที่จะช่วยให้ธุรกิจของคุณเติบโตด้วยการวางแผนทางการเงินที่มีประสิทธิภาพ
      </p>
    </div>
  );
}
