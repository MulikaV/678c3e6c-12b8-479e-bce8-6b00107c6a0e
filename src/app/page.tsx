"use client"
import { Carousel } from '@/components/carousels/Carousel';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import PricingBento from '@/components/bento/PricingBento';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import { ArrowButton } from '@/components/buttons/ArrowButton';
import Image from 'next/image';
const mockGallery = [
  { title: 'Property 1', image: '/images/placeholder1.avif' },
  { title: 'Property 2', image: '/images/placeholder2.avif' },
  { title: 'Property 3', image: '/images/placeholder3.avif' },
  { title: 'Property 4', image: '/images/placeholder4.avif' },
  { title: 'Property 5', image: '/images/placeholder5.avif' },
];
const mockPricing = [
  { badge: 'Basic', price: '$200,000', features: ['1 Bed', '1 Bath'] },
  { badge: 'Standard', price: '$300,000', features: ['2 Beds', '1 Bath'] },
  { badge: 'Premium', price: '$450,000', features: ['3 Beds', '2 Baths'] },
];
const mockFAQ = [
  { title: 'What is the process to buy a home?', content: 'The buying process involves multiple steps including application, visiting properties, and closing.' },
  { title: 'How do I schedule a tour?', content: 'You can schedule a tour through our website or contact us directly.' },
  { title: 'What documents are required?', content: 'Standard documents include ID, income verification, and financial statements.' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section id="hero" className="bg-[#fff6e6] p-8 flex flex-col items-center">
        <SimpleHero title="Welcome to Playful Homes" description="Find your dream home with a fun, modern approach to real estate" primaryButtonText="Schedule a tour" secondaryButtonText="Learn More" />
      </section>
      <section id="about-us" className="bg-gradient-to-b from-white to-[#f0f9ff] p-8">
        <MinimalAbout description="At Playful Homes, we value transparency, ease, and fun in the home buying process." />
      </section>
      <section id="gallery-slider" className="bg-soft-noise p-8">
        <Carousel>{mockGallery.map((item) => (
          <div key={item.title} className="relative">
            <Image src={item.image} alt={item.title} className="rounded-lg" layout="responsive" />
            <h3 className="absolute bottom-4 left-2 text-white bg-black bg-opacity-50 rounded px-2">{item.title}</h3>
          </div>
        ))}</Carousel>
      </section>
      <section id="pricing" className="bg-[#f7fbff] p-8">
        <PricingBento items={mockPricing} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" />
      </section>
      <section id="faq" className="bg-[url('/images/very_light_grid.png')] p-8">
        <BentoFAQ items={mockFAQ} />
      </section>
      <section id="cta" className="bg-[#eafff5] p-8">
        <h2 className="text-2xl font-bold text-center">Get in Touch!</h2>
        <form className="flex flex-col items-center gap-4">
          <input type="text" placeholder="Name" required className="p-2 border rounded" />
          <input type="email" placeholder="Email" required className="p-2 border rounded" />
          <button type="submit" className="bg-primary text-white rounded p-2">Submit</button>
        </form>
        <p className="text-sm">We respect your privacy. By submitting this form, you agree to receive occasional emails from us.</p>
      </section>
    </div>
  );
}