
import Head from 'next/head';

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Navbar />

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Head>
        <title>1009 เอ็นเตอร์ไพรซ์ | บริการบัญชีครบวงจร</title>
      </Head>
      <h1 className="text-4xl font-bold">🚀 ยินดีต้อนรับสู่ 1009 เอ็นเตอร์ไพรซ์</h1>
      <p className="mt-4 text-lg">บริการบัญชี | ภาษี | ที่ปรึกษาทางธุรกิจ</p>
      <a href="/contact" className="mt-6 px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
        ติดต่อเรา
      </a>
    </div>
  );
}
