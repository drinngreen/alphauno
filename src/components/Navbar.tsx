import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  name: string;
  href: string;
}

interface NavbarProps {
  onNavigate: (page: 'home' | 'templates') => void;
}

const menuItems: MenuItem[] = [
  { name: 'Soluzioni', href: '#solutions' },
  { name: 'Servizi', href: '#services' },
  { name: 'Prezzi', href: '#pricing' },
  { name: 'Template', href: '#templates' },
  { name: 'Contatti', href: '#contact' },
];

const LOGO_PATH = '/assets/images/zoliqua-logo.svg';

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#templates') {
      onNavigate('templates');
    } else {
      onNavigate('home');
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-teal-400 text-2xl font-bold flex items-center"
              onClick={(e) => handleNavigation(e, '/')}
            >
              <img 
                src={LOGO_PATH}
                alt="Zoliqua"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition-colors"
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors">
              Inizia Ora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-teal-400"
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-teal-400"
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors">
              Inizia Ora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}