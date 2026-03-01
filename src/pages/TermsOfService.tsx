import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-white via-[#EFF6FF] to-[#F0FDFA] py-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold text-[#1F2937] leading-tight mb-4">
            Términos de Servicio
          </h1>
          <p className="text-lg text-[#6B7280] mb-2">
            Última actualización: 28 de febrero de 2025
          </p>
          <p className="text-[#6B7280]">
            Por favor, lee cuidadosamente estos términos antes de usar Smart Finances.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Table of Contents */}
            <section className="bg-gradient-to-br from-[#EFF6FF] to-[#F0FDFA] p-8 rounded-2xl border-2 border-[#DBEAFE] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#2563EB] to-[#06B6D4] rounded-full"></div>
                <h2 className="text-2xl font-semibold text-[#1F2937]">Contenido</h2>
              </div>
              <ol className="list-decimal list-inside text-[#6B7280] space-y-3">
                <li><a href="#section-1" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Aceptación de términos</a></li>
                <li><a href="#section-2" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Descripción del servicio</a></li>
                <li><a href="#section-3" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Requisitos de uso</a></li>
                <li><a href="#section-4" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Registro de cuenta</a></li>
                <li><a href="#section-5" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Restricciones de uso</a></li>
                <li><a href="#section-6" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Propiedad intelectual</a></li>
                <li><a href="#section-7" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Limitación de responsabilidad</a></li>
                <li><a href="#section-8" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Modificaciones del servicio</a></li>
                <li><a href="#section-9" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Terminación de cuenta</a></li>
                <li><a href="#section-10" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Cambios a estos términos</a></li>
                <li><a href="#section-11" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Contacto</a></li>
              </ol>
            </section>

            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">1.</span>
                <span>Aceptación de términos</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Al acceder y utilizar Smart Finances ("el Servicio"), aceptas que has leído, comprendido y aceptas estar vinculado por estos Términos de Servicio ("Términos"). Si no aceptas estos Términos, no debes usar esta aplicación.
                </p>
                <p>
                  Smart Finances se reserva el derecho de modificar estos Términos en cualquier momento. Tu uso continuado del Servicio después de cualquier cambio constituye tu aceptación de los nuevos Términos.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">2.</span>
                <span>Descripción del servicio</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Smart Finances es una aplicación móvil diseñada para ayudarte a registrar gastos, crear presupuestos y administrar tu dinero personal. Nuestro objetivo es proporcionarte una herramienta simple y eficaz para mejorar tu educación financiera.
                </p>
                <p>
                  El Servicio se proporciona "tal como está" y "según disponibilidad". No garantizamos que el Servicio será ininterrumpido, libre de errores o disponible en todo momento.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">3.</span>
                <span>Requisitos de uso</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Para usar Smart Finances, debes:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Tener al menos 18 años de edad o ser un menor emancipado</li>
                    <li>Residir en México o América Latina (jurisdicción permitida)</li>
                    <li>Poseer un dispositivo compatible (iOS o Android)</li>
                    <li>Mantener una conexión activa a Internet</li>
                    <li>Aceptar todos los términos y políticas de Smart Finances</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">4.</span>
                <span>Registro de cuenta</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Para usar muchas características de Smart Finances, deberás registrarte y crear una cuenta. Eres responsable de proporcionar información precisa y completa durante el registro.
                </p>
                <p>
                  Eres completamente responsable de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Mantener la confidencialidad de tu contraseña</li>
                  <li>Toda actividad que ocurra bajo tu cuenta</li>
                  <li>Notificar a Smart Finances de cualquier uso no autorizado de tu cuenta</li>
                </ul>
                <p className="mt-4">
                  No debes usar la cuenta de otra persona sin permiso. Smart Finances no será responsable de ninguna pérdida que resulte del uso no autorizado de tu contraseña.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">5.</span>
                <span>Restricciones de uso</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Al usar Smart Finances, te comprometes a no:
                </p>
                <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Usar la aplicación para actividades ilegales o que violen leyes locales, estatales o internacionales</li>
                    <li>Intentar acceder sin autorización a sistemas o datos de Smart Finances</li>
                    <li>Descompilar, desensamblar, o intentar derivar el código fuente</li>
                    <li>Usar el Servicio para transmitir malware, spam o contenido dañino</li>
                    <li>Intentar sobrecargar o dañar la infraestructura de Smart Finances (ataque DoS)</li>
                    <li>Falsificar información de identidad o registro</li>
                    <li>Hostigar, abusar o discriminar a otros usuarios</li>
                    <li>Usar la aplicación para recopilar datos de otros usuarios sin consentimiento</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">6.</span>
                <span>Propiedad intelectual</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Todo el contenido de Smart Finances, incluyendo pero no limitado a código, gráficos, logos, nombres, marcas registradas y material de marketing, son propiedad de Smart Finances o de nuestros proveedores de contenido licenciado.
                </p>
                <p>
                  No se te otorga ninguna licencia o derecho a este contenido excepto para tu uso personal y no comercial del Servicio. Reproducir, distribuir, modificar o transmitir este contenido sin permiso previo está prohibido.
                </p>
                <p>
                  El contenido que tú aportas a Smart Finances (transacciones, presupuestos, notas) sigue siendo de tu propiedad. Al usar Smart Finances, otorgas a la aplicación una licencia limitada para usar tu contenido para proporcionar y mejorar el Servicio.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">7.</span>
                <span>Limitación de responsabilidad</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  En la máxima medida permitida por la ley, Smart Finances no será responsable por:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Daños indirectos, incidentales, especiales, consecuentes o punitivos</li>
                  <li>Pérdida de datos, ganancia, reputación o negocio</li>
                  <li>Interrupción del Servicio o errores de la aplicación</li>
                  <li>Acceso no autorizado a tus datos por terceros</li>
                  <li>Decisiones financieras basadas en información proporcionada por Smart Finances</li>
                </ul>
                <p className="mt-4">
                  <strong>Importante:</strong> Smart Finances es una herramienta educativa y NO es un asesor financiero profesional. Las decisiones financieras deben ser tomadas en consulta con profesionales capacitados.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">8.</span>
                <span>Modificaciones del servicio</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Smart Finances se reserva el derecho de modificar, suspender o discontinuar el Servicio (o cualquier parte del mismo) con o sin previo aviso. No seremos responsables ante ti o ante terceros por cualquier modificación, suspensión o discontinuación del Servicio.
                </p>
                <p>
                  Podemos realizar mantenimiento de la aplicación que puede resultar en tiempos de inactividad. Haremos esfuerzos razonables para minimizar estas interrupciones.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">9.</span>
                <span>Terminación de cuenta</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Puedes solicitar la eliminación de tu cuenta en cualquier momento contactando a nuestro equipo de soporte. Nos esforzaremos por procesar tu solicitud dentro de 30 días.
                </p>
                <p>
                  Smart Finances también puede terminar o suspender tu cuenta sin previo aviso si:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Violas estos Términos de Servicio</li>
                  <li>Usas la aplicación para actividades ilegales</li>
                  <li>Abusas del Servicio o de otros usuarios</li>
                  <li>Proporcionas información falsa o fraudulenta</li>
                </ul>
                <p className="mt-4">
                  Después de la terminación, tu derecho a usar Smart Finances cesará inmediatamente. Los datos asociados con tu cuenta serán eliminados o anonimizados de acuerdo con nuestra Política de Privacidad.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-8">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">10.</span>
                <span>Cambios a estos términos</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Smart Finances puede actualizar estos Términos de Servicio en cualquier momento. Cuando hacemos cambios sustanciales, notificaremos a los usuarios a través de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Una notificación en la aplicación</li>
                  <li>Correo electrónico al correo registrado en tu cuenta</li>
                  <li>Un aviso destacado en nuestra página de inicio</li>
                </ul>
                <p className="mt-4">
                  Tu uso continuado del Servicio después de cualquier cambio constituye tu aceptación de los nuevos Términos. Te recomendamos que revises regularmente esta página para estar informado de los cambios.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-8 pb-16">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                <span className="text-[#2563EB]">11.</span>
                <span>Contacto</span>
              </h2>
              <div className="text-[#6B7280] space-y-4">
                <p>
                  Si tienes preguntas sobre estos Términos de Servicio o sobre Smart Finances en general, puedes contactarnos a través de:
                </p>
                <div className="bg-gradient-to-br from-[#EFF6FF] to-[#F0FDFA] rounded-xl p-6 border border-[#DBEAFE]">
                  <p><strong className="text-[#1F2937]">Email:</strong> legal@smartfinances.com</p>
                  <p className="mt-2"><strong className="text-[#1F2937]">Soporte:</strong> support@smartfinances.com</p>
                  <p className="mt-4 text-sm">
                    Responderemos a tus consultas dentro de 5-7 días hábiles.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1F2937] to-[#111827] text-white py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center text-sm text-[#D1D5DB]">
          <p>
            © 2025 Smart Finances. Todos los derechos reservados. |
            <a href="/" className="text-[#60A5FA] hover:text-white ml-2 transition-colors">Volver al inicio</a>
            {' | '}
            <a href="/privacy" className="text-[#60A5FA] hover:text-white ml-2 transition-colors">Política de Privacidad</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
