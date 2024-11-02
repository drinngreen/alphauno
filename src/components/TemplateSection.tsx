import { ArrowRight, Smartphone } from 'lucide-react';
import { useState } from 'react';

interface Template {
  title: string;
  description: string;
  image: string;
  category: string;
  preview: string;
  type: 'app' | 'web';
}

interface TemplateSectionProps {
  onViewAll?: () => void;
}

export default function TemplateSection({ onViewAll }: TemplateSectionProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const templates: Template[] = [
    {
      title: "Ristorante Moderno",
      description: "Menu digitale, prenotazioni online e galleria foto",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
      category: "Ristoranti",
      preview: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
      type: 'web'
    },
    {
      title: "App Caffetteria",
      description: "Ordini, punti fedeltà e menu digitale",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      category: "Bar",
      preview: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      type: 'app'
    },
    {
      title: "Impresa Edile",
      description: "Portfolio progetti e preventivi online",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60",
      category: "Costruzioni",
      preview: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60",
      type: 'web'
    },
    {
      title: "App Barbiere",
      description: "Prenotazioni e gestione code",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=60",
      category: "Bellezza",
      preview: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=60",
      type: 'app'
    },
    {
      title: "Salone Bellezza",
      description: "Gestione appuntamenti e prodotti",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60",
      category: "Bellezza",
      preview: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60",
      type: 'web'
    },
    {
      title: "App Palestra",
      description: "Prenotazione corsi e abbonamenti",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
      category: "Fitness",
      preview: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
      type: 'app'
    }
  ];

  return (
    <section id="templates" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Template Pronti all'Uso</h2>
          <p className="text-xl text-gray-300">
            Scegli tra i nostri template professionali e personalizzali per il tuo business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                {template.type === 'app' ? (
                  <div className="relative w-full h-48 bg-black flex items-center justify-center">
                    <div className="w-24 h-44 border-4 border-gray-700 rounded-3xl overflow-hidden relative">
                      <img 
                        src={template.image} 
                        alt={template.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-teal-400 text-sm font-medium">
                    {template.category}
                  </span>
                  {template.type === 'app' && (
                    <Smartphone size={16} className="text-teal-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {template.description}
                </p>
                <button className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors">
                  Anteprima
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {selectedTemplate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{selectedTemplate.title}</h3>
                  <button 
                    onClick={() => setSelectedTemplate(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                {selectedTemplate.type === 'app' ? (
                  <div className="flex justify-center">
                    <div className="w-72 h-[600px] border-8 border-gray-800 rounded-3xl overflow-hidden relative">
                      <img 
                        src={selectedTemplate.preview} 
                        alt={selectedTemplate.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedTemplate.preview} 
                    alt={selectedTemplate.title}
                    className="w-full rounded-lg"
                  />
                )}
              </div>
              <div className="p-6 border-t border-gray-800">
                <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors">
                  Usa Questo Template
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button 
            onClick={() => onViewAll?.()}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition-colors"
          >
            Vedi Tutti i Template
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}