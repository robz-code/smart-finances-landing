import React, { useState } from 'react';
import {
  Sparkles,
  Lock
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { PhoneMockup } from './components/PhoneMockup';

export default function App() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Section 1 - Hero Header */}
      <section className="relative bg-gradient-to-br from-white via-[#EFF6FF] to-[#F0FDFA] py-32">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#DBEAFE] text-[#2563EB] rounded-full text-sm font-semibold">
                ✨ Próximo lanzamiento
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#1F2937] leading-tight">
                Controla tu dinero sin complicarte la vida.
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed max-w-xl">
                La app más simple para registrar gastos, crear presupuestos y entender a dónde se va tu dinero. 
                Únete a la lista de espera y obtén acceso anticipado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#2563EB]/30 transition-all hover:shadow-xl hover:shadow-[#2563EB]/40"
                  onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Unirme a la lista de espera
                </Button>
              </div>
              <p className="text-sm text-[#6B7280] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#06B6D4]" />
                Beneficios exclusivos por registrarte.
              </p>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full opacity-20 blur-3xl"></div>
              <PhoneMockup
                imageUrl="./src/assets/HomePage.png"
                alt="Smart Finances App Interface"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Section 8 - Waiting List Form */}
      <section id="waitlist-form" className="py-32 bg-gradient-to-br from-[#2563EB] to-[#1E40AF]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Tu dinero merece claridad. Únete hoy.
            </h2>
            <p className="text-xl text-[#DBEAFE] mb-12">
              Regístrate ahora y obtén acceso anticipado cuando lancemos.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-left">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1F2937] mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                    />
                  </div>
                  <div className="text-left">
                    <label htmlFor="feedback" className="block text-sm font-semibold text-[#1F2937] mb-2">
                      ¿Qué problema quieres resolver con Smart Finances? (Opcional)
                    </label>
                    <Textarea 
                      id="feedback"
                      placeholder="Comparte tus expectativas..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={4}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-[#1D4ED8] hover:to-[#0891B2] text-white px-8 py-6 text-xl rounded-xl shadow-lg transition-all hover:shadow-2xl"
                  >
                    Unirme a la lista de espera 🚀
                  </Button>
                  {submitted && (
                    <div className="bg-[#F0FDF4] border-2 border-[#10B981] text-[#047857] px-6 py-4 rounded-xl">
                      ¡Gracias! Te contactaremos pronto con tu acceso anticipado.
                    </div>
                  )}
                  <p className="text-sm text-[#6B7280] flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    Sin spam. Solo noticias importantes.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
