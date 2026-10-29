import React from 'react';
import { ContactForm } from '@/components/forms/ContactForm';

export const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </section>
  );
};