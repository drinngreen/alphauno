import { useState } from 'react';
import { Search, Smartphone, Globe, Filter, X } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type: 'app' | 'web';
  features: string[];
  demoUrl?: string;
}

export default function TemplatesPage() {
  const [filter, setFilter] = useState<'all' | 'app' | 'web'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const templates: Template[] = [
    {
      id: 'food-delivery',
      title: "FoodExpress",
      description: "App completa per delivery di cibo con tracking in tempo reale",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
      category: "Food & Beverage",
      type: 'app',
      features: [
        "Tracking ordini in tempo reale",
        "Sistema di pagamento integrato",
        "Gestione menu dinamico",
        "Sistema di recensioni",
        "Dashboard ristoratore"
      ]
    },
    {
      id: 'fitness-tracker',
      title: "FitPro",
      description: "App per il fitness con programmi personalizzati",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
      category: "Fitness",
      type: 'app',
      features: [
        "Tracciamento allenamenti",
        "Programmi personalizzati",
        "Integrazione calendario",
        "Statistiche avanzate",
        "Community fitness"
      ]
    },
    {
      id: 'salon-booking',
      title: "BeautyBook",
      description: "Sistema di prenotazione per saloni di bellezza",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=60",
      category: "Bellezza",
      type: 'app',
      features: [
        "Prenotazioni online",
        "Gestione appuntamenti",
        "Notifiche automatiche",
        "Catalogo servizi",
        "Sistema fedeltà"
      ]
    },
    {
      id: 'restaurant-web',
      title: "Gusto Italiano",
      description: "Sito web per ristoranti con prenotazioni online",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=60",
      category: "Ristoranti",
      type: 'web',
      features: [
        "Menu interattivo",
        "Sistema prenotazioni",
        "Gallery foto HD",
        "Blog ricette",
        "Eventi speciali"
      ]
    },
    {
      id: 'hotel-booking',
      title: "LuxStay",
      description: "Piattaforma di prenotazione per hotel e B&B",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
      category: "Hospitality",
      type: 'web',
      features: [
        "Booking engine",
        "Virtual tour camere",
        "Sistema recensioni",
        "Gestione disponibilità",
        "Multi-lingua"
      ]
    },
    {
      id: 'ecommerce-fashion',
      title: "FashionStore",
      description: "E-commerce completo per fashion brand",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60",
      category: "E-commerce",
      type: 'web',
      features: [
        "Catalogo prodotti",
        "Carrello avanzato",
        "Wishlist",
        "Filtri dinamici",
        "Integration PayPal/Stripe"
      ]
    }
  ];

  const categories = Array.from(new Set(templates.map(t => t.category)));

  const filteredTemplates = templates.filter(template => {
    const matchesFilter = filter === 'all' || template.type === filter;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || template.category === selectedCategory;
    return matchesFilter && matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-900/20 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Template Gallery</h1>
          <p className="text-xl text-gray-300">
            Esplora la nostra collezione di template professionali per app e siti web
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 bg-black/90 backdrop-blur-sm border-y border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cerca template..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  filter === 'all' ? 'bg-teal-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Filter size={16} />
                Tutti
              </button>
              <button
                onClick={() => setFilter('app')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  filter === 'app' ? 'bg-teal-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Smartphone size={16} />
                App
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  filter === 'web' ? 'bg-teal-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Globe size={16} />
                Web
              </button>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300"
            >
              <option value="">Tutte le categorie</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                {template.type === 'app' ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="w-32 h-56 border-8 border-gray-800 rounded-3xl overflow-hidden">
                      <img
                        src={template.image}
                        alt={template.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-teal-400 text-sm font-medium">
                    {template.category}
                  </span>
                  {template.type === 'app' ? (
                    <Smartphone size={16} className="text-teal-400" />
                  ) : (
                    <Globe size={16} className="text-teal-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <p className="text-gray-400 mb-4">{template.description}</p>
                <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                  Anteprima
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Template Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold">{selectedTemplate.title}</h3>
                <p className="text-gray-400">{selectedTemplate.category}</p>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  {selectedTemplate.type === 'app' ? (
                    <div className="flex justify-center">
                      <div className="w-72 h-[600px] border-8 border-gray-800 rounded-3xl overflow-hidden">
                        <img
                          src={selectedTemplate.image}
                          alt={selectedTemplate.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedTemplate.image}
                      alt={selectedTemplate.title}
                      className="w-full rounded-lg"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Caratteristiche</h4>
                  <ul className="space-y-3">
                    {selectedTemplate.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {selectedTemplate.demoUrl && (
                      <a
                        href={selectedTemplate.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        Vedi Demo Live
                      </a>
                    )}
                    <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors">
                      Richiedi Informazioni
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}