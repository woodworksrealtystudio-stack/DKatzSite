'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. We will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', practice: '', message: '' });
  };

  return (
    <main className="bg-parchment">
      <Header />
      <section className="pt-32 pb-24 px-gutter">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="font-serif text-display text-navy mb-4">Get In Touch</h1>
            <p className="text-lg text-slate/75">
              Schedule a free consultation to discuss your legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-lg text-navy mb-2">Location</h3>
              <p className="text-slate/75">Atlanta, Georgia</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-navy mb-2">Phone</h3>
              <a href="tel:+1-404-555-0123" className="text-gold hover:text-gold-light transition-colors">
                (404) 555-0123
              </a>
            </div>
            <div>
              <h3 className="font-serif text-lg text-navy mb-2">Availability</h3>
              <p className="text-slate/75">Serving Georgia and nationwide</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-stone/20 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-stone/30 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white text-slate"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone/30 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white text-slate"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone/30 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white text-slate"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="practice" className="block text-sm font-medium text-navy mb-2">
                Practice Area
              </label>
              <select
                id="practice"
                name="practice"
                value={formData.practice}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone/30 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white text-slate"
              >
                <option value="">Select a practice area</option>
                <option value="criminal-defense">Criminal Defense</option>
                <option value="business-privacy">Business & Privacy Law</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-stone/30 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white text-slate resize-none"
                placeholder="Tell us about your legal needs..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold text-navy rounded-lg font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
              >
                Schedule Consultation
              </button>
            </div>

            <p className="text-xs text-slate/50 text-center">
              All communications are confidential. We'll get back to you within 24 hours.
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
