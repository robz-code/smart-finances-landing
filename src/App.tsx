import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingDown, 
  CreditCard, 
  Zap, 
  Target, 
  Users, 
  Shield,
  BarChart3,
  PenTool,
  Brain,
  Eye,
  Sparkles,
  Gift,
  Rocket,
  Mail,
  Lock,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { PainPointCard } from './components/PainPointCard';
import { BenefitCard } from './components/BenefitCard';
import { StepCard } from './components/StepCard';
import { TestimonialCard } from './components/TestimonialCard';
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
                imageUrl="https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaW5hbmNlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzMxNzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Smart Finances App Interface"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Pain Points */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-12">
          <h2 className="text-5xl font-semibold text-[#1F2937] text-center mb-16">
            ¿Te suena familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PainPointCard 
              icon={<TrendingDown className="w-8 h-8" />}
              text="Nunca sé cuánto gasto realmente."
            />
            <PainPointCard 
              icon={<PenTool className="w-8 h-8" />}
              text="Me da flojera registrar mis gastos."
            />
            <PainPointCard 
              icon={<CreditCard className="w-8 h-8" />}
              text="Mis tarjetas de crédito me confunden."
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Key Benefits */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-12">
          <h2 className="text-5xl font-semibold text-[#1F2937] text-center mb-6">
            Hecho para simplificar tu vida financiera.
          </h2>
          <p className="text-xl text-[#6B7280] text-center mb-16 max-w-3xl mx-auto">
            Diseñado para personas que quieren controlar su dinero sin complicaciones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <BenefitCard 
              icon={<Zap className="w-6 h-6" />}
              title="Registro en 3 toques"
              description="Añade gastos en segundos con nuestra interfaz ultra rápida. No más formularios complicados."
            />
            <BenefitCard 
              icon={<Target className="w-6 h-6" />}
              title="Presupuestos inteligentes"
              description="Crea límites de gastos por categoría y recibe alertas cuando te estés pasando."
            />
            <BenefitCard 
              icon={<Users className="w-6 h-6" />}
              title="Gastos compartidos fáciles"
              description="Divide cuentas con amigos o pareja sin complicaciones. Todo queda registrado."
            />
            <BenefitCard 
              icon={<Shield className="w-6 h-6" />}
              title="Tarjetas bajo control"
              description="Conecta tus tarjetas y visualiza todos tus gastos en un solo lugar."
            />
            <BenefitCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Gráficas claras"
              description="Entiende tus patrones de gasto con visualizaciones simples y hermosas."
            />
            <BenefitCard 
              icon={<Brain className="w-6 h-6" />}
              title="Insights inteligentes"
              description="Recibe recomendaciones personalizadas para mejorar tus finanzas."
            />
          </div>
        </div>
      </section>

      {/* Section 4 - How It Works */}
      <section className="py-32 bg-gradient-to-br from-[#F9FAFB] to-[#EFF6FF]">
        <div className="max-w-[1440px] mx-auto px-12">
          <h2 className="text-5xl font-semibold text-[#1F2937] text-center mb-6">
            Así funciona Smart Finances
          </h2>
          <p className="text-xl text-[#6B7280] text-center mb-20 max-w-3xl mx-auto">
            Tres pasos simples para tomar control total de tus finanzas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-10 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"></div>
            
            <StepCard 
              number={1}
              icon={<Wallet className="w-10 h-10" />}
              title="Registra tus gastos"
              description="Añade transacciones en segundos con nuestra interfaz intuitiva."
            />
            <StepCard 
              number={2}
              icon={<Target className="w-10 h-10" />}
              title="Crea tus presupuestos"
              description="Define límites por categoría y mantén el control de tu dinero."
            />
            <StepCard 
              number={3}
              icon={<Brain className="w-10 h-10" />}
              title="Recibe insights inteligentes"
              description="Descubre patrones y obtén consejos para mejorar tus finanzas."
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Product Mockups */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Phone 1 */}
            <div className="relative">
              <div className="absolute -top-8 left-8 bg-white rounded-xl shadow-lg px-6 py-3 border border-[#E5E7EB] z-20">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#06B6D4]" />
                  <span className="text-sm font-semibold text-[#1F2937]">Registro rápido con IA</span>
                </div>
              </div>
              <PhoneMockup 
                imageUrl="https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaW5hbmNlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzMxNzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Registro rápido"
              />
            </div>

            {/* Phone 2 - Center, larger */}
            <div className="relative lg:scale-110 lg:z-10">
              <div className="absolute -top-8 left-8 bg-white rounded-xl shadow-lg px-6 py-3 border border-[#E5E7EB] z-20">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#10B981]" />
                  <span className="text-sm font-semibold text-[#1F2937]">Presupuestos automáticos</span>
                </div>
              </div>
              <PhoneMockup 
                imageUrl="https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaW5hbmNlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzMxNzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Presupuestos automáticos"
              />
            </div>

            {/* Phone 3 */}
            <div className="relative">
              <div className="absolute -top-8 left-8 bg-white rounded-xl shadow-lg px-6 py-3 border border-[#E5E7EB] z-20">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-sm font-semibold text-[#1F2937]">Visualización clara</span>
                </div>
              </div>
              <PhoneMockup 
                imageUrl="https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaW5hbmNlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzMxNzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Visualización clara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Testimonial */}
      <section className="py-32 bg-[#EFF6FF]">
        <div className="max-w-[1440px] mx-auto px-12">
          <TestimonialCard 
            quote="Por fin una app de finanzas que no me da flojera usar."
            author="Usuario de pruebas"
          />
        </div>
      </section>

      {/* Section 7 - Early Access Benefits */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-12">
          <h2 className="text-5xl font-semibold text-[#1F2937] text-center mb-6">
            Únete antes que todos y obtén ventajas exclusivas
          </h2>
          <p className="text-xl text-[#6B7280] text-center mb-16 max-w-3xl mx-auto">
            Los primeros usuarios tendrán acceso a beneficios únicos que no estarán disponibles después del lanzamiento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#EFF6FF] to-white p-8 rounded-2xl border-2 border-[#2563EB]/20">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center text-white mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Acceso anticipado</h3>
              <p className="text-[#6B7280]">Sé de los primeros en usar Smart Finances antes del lanzamiento oficial.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F0FDFA] to-white p-8 rounded-2xl border-2 border-[#06B6D4]/20">
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4] flex items-center justify-center text-white mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Funciones beta</h3>
              <p className="text-[#6B7280]">Prueba nuevas funciones antes que nadie y ayúdanos a mejorarlas.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F0FDF4] to-white p-8 rounded-2xl border-2 border-[#10B981]/20">
              <div className="w-12 h-12 rounded-xl bg-[#10B981] flex items-center justify-center text-white mb-4">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Descuento premium</h3>
              <p className="text-[#6B7280]">Obtén 50% de descuento permanente en el plan premium.</p>
            </div>
            <div className="bg-gradient-to-br from-[#FEF2F2] to-white p-8 rounded-2xl border-2 border-[#EF4444]/20">
              <div className="w-12 h-12 rounded-xl bg-[#EF4444] flex items-center justify-center text-white mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Participa en mejoras</h3>
              <p className="text-[#6B7280]">Tu feedback ayudará a crear la app perfecta para ti.</p>
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

      {/* Section 9 - Footer */}
      <footer className="py-16 bg-[#1F2937]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Smart Finances</span>
              </div>
              <p className="text-[#9CA3AF]">
                La forma más simple de controlar tus finanzas personales.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <a href="mailto:hola@smartfinances.app" className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hola@smartfinances.app
              </a>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#374151] hover:bg-[#2563EB] flex items-center justify-center text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#374151] hover:bg-[#2563EB] flex items-center justify-center text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#374151] hover:bg-[#2563EB] flex items-center justify-center text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#374151] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9CA3AF] text-sm">
              © 2025 Smart Finances. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors">
                Términos
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-[#06B6D4] text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
