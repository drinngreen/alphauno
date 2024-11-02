import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    projectType: '',
    timeline: '',
    budget: '',
    industry: '',
    features: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Inizia il Tuo Progetto</h2>
          <p className="text-xl text-gray-300">
            Raccontaci del tuo progetto e ti aiuteremo a scegliere la soluzione perfetta
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo di Progetto
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-700 bg-gray-800 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
            >
              <option value="">Seleziona tipo di progetto</option>
              <option value="app">App Mobile</option>
              <option value="website">Sito Web</option>
              <option value="both">App & Sito Web</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tempistiche
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-700 bg-gray-800 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
            >
              <option value="">Seleziona tempistiche</option>
              <option value="1-3">1-3 mesi</option>
              <option value="3-6">3-6 mesi</option>
              <option value="6+">6+ mesi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-700 bg-gray-800 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
            >
              <option value="">Seleziona budget</option>
              <option value="0-1000">€0 - €1.000</option>
              <option value="1000-5000">€1.000 - €5.000</option>
              <option value="5000+">€5.000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Settore
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-700 bg-gray-800 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
            >
              <option value="">Seleziona settore</option>
              <option value="ecommerce">E-commerce</option>
              <option value="healthcare">Sanità</option>
              <option value="education">Istruzione</option>
              <option value="finance">Finanza</option>
              <option value="other">Altro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Funzionalità e Requisiti Aggiuntivi
            </label>
            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg border-gray-700 bg-gray-800 text-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
              placeholder="Raccontaci le funzionalità specifiche che desideri..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Invia Richiesta
          </button>
        </form>
      </div>
    </section>
  );
}