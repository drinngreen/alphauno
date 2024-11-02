import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Trasforma la Tua Visione Digitale in Realtà
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Crea app e siti web a modo tuo - fai da te, con l'AI, o affidati ai nostri esperti
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition-colors">
              Inizia Ora
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-teal-500/20 hover:bg-teal-500/10 transition-colors">
              Consulenza Gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}