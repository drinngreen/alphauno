import ServiceCard from './ServiceCard';

export default function PricingSection() {
  const services = {
    diy: [
      {
        title: 'App Builder',
        price: '€299',
        period: 'una tantum',
        features: [
          { text: 'Editor app no-code completo' },
          { text: 'Libreria componenti precostruiti' },
          { text: 'Pubblicazione su iOS e Android' },
        ],
      },
      {
        title: 'Website Builder',
        price: '€7.99',
        period: '/mese',
        features: [
          { text: 'Editor drag-and-drop' },
          { text: 'Template responsive' },
          { text: 'Dominio personalizzato' },
        ],
        highlight: true,
      },
      {
        title: 'Creatore AI',
        price: '€9.99',
        period: '/mese',
        features: [
          { text: 'Design suggeriti dall\'AI' },
          { text: 'Generazione contenuti' },
          { text: 'Ottimizzazione SEO' },
        ],
      },
    ],
    guided: [
      {
        title: 'Supporto Premium',
        price: '€399',
        period: 'una tantum',
        features: [
          { text: 'Guida esperta per app/web' },
          { text: 'Supporto prioritario' },
          { text: '3 sessioni di consulenza' },
        ],
      },
      {
        title: 'Assistenza Completa',
        price: '€599',
        period: 'una tantum',
        features: [
          { text: 'Assistenza passo-passo' },
          { text: 'Revisioni settimanali' },
          { text: 'Sviluppo funzioni custom' },
        ],
        highlight: true,
      },
    ],
    professional: [
      {
        title: 'Soluzioni Template',
        price: '€999',
        period: 'una tantum',
        features: [
          { text: 'Sviluppo app + sito web' },
          { text: 'Template premium' },
          { text: 'Supporto pubblicazione' },
        ],
      },
      {
        title: 'Soluzioni Enterprise',
        price: 'Su misura',
        features: [
          { text: 'Sviluppo personalizzato' },
          { text: 'Integrazioni su misura' },
          { text: 'Team dedicato' },
        ],
        highlight: true,
      },
    ],
  };

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Scegli il Tuo Piano Perfetto</h2>
          <p className="text-xl text-gray-300">
            Soluzioni flessibili per ogni fase del tuo percorso digitale
          </p>
        </div>

        <div className="space-y-16">
          {/* Soluzioni Fai da Te */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Soluzioni Fai da Te</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {services.diy.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Sviluppo Guidato */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Sviluppo Guidato
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.guided.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Servizi Professionali */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Servizi Professionali
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.professional.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}