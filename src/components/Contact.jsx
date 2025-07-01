import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppLink = () => {
    const { name, email, phone, message } = formData;

    const text = `Hello Shobhith! 👋%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    return `https://wa.me/916366076182?text=${text}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto px-4 text-center" data-aos="flip-left">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">📬 Let's Talk</h2>
        <p className="mb-6 text-white-100">
          Whether it's a collaboration, project inquiry, or just to say hi — I’d love to hear from you!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(), "_blank");
          }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            📱 Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
