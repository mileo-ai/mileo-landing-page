import mileoLogo from '@/assets/logo1.png';
import HeroSection from '@/app/components/HeroSection';
import IntegrationCircle from '@/app/components/IntegrationCircle';
import VisionSection from '@/app/components/VisionSection';
import InCallAssistance from '@/app/components/InCallAssistance';
import InstantFollowUp from '@/app/components/InstantFollowUp';
import CTASection from '@/app/components/StatsSection';

import { PopupButton } from '@typeform/embed-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={mileoLogo} alt="Mileo" className="h-16" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#integrations" className="text-slate-600 hover:text-slate-900 transition-colors">Integrations</a>
            <PopupButton 
              id="h23VYTSf" 
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Join Waitlist
            </PopupButton>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <VisionSection />
        <InCallAssistance />
        <InstantFollowUp />
        <IntegrationCircle />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={mileoLogo} alt="Mileo" className="h-12 brightness-0 invert" />
            </div>
            <div className="flex gap-8">
              <a href="/privacy_policy.html" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-sm">
            © 2026 Mileo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}