
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <Head>
        <title>ติดต่อเรา | 1009 เอ็นเตอร์ไพรซ์</title>
      </Head>
      <h1 className="text-4xl font-bold">ติดต่อเรา</h1>
      <p className="mt-4 text-lg">📍 ที่ตั้ง: เชียงราย, ประเทศไทย</p>
      <p className="mt-2">📞 โทร: 081-234-5678</p>
      <p className="mt-2">✉️ อีเมล: contact@1009enterprise.com</p>

      <div className="mt-8 w-1/2">
        <h2 className="text-2xl font-semibold">ส่งข้อความถึงเรา</h2>
        {submitted ? (
          <p className="text-green-600 mt-4">✅ ขอบคุณที่ติดต่อเรา! เราจะตอบกลับโดยเร็วที่สุด</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="ชื่อของคุณ"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมลของคุณ"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="ข้อความของคุณ"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              ส่งข้อความ
            </button>
          </form>
        )}
      </div>

      {/* ฝัง Google Maps */}
      <div className="mt-8 w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7486405485717!2d99.82666061528852!3d19.908219486600604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d709faa22a9a67%3A0x5a8ff8f4867d4e7!2sChiang%20Rai!5e0!3m2!1sen!2sth!4v1644343832145!5m2!1sen!2sth"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
