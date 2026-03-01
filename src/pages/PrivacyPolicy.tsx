import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-white via-[#EFF6FF] to-[#F0FDFA] py-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-bold text-[#1F2937] leading-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-[#6B7280] mb-2">
            Última actualización: 28 de febrero de 2025
          </p>
          <p className="text-[#6B7280]">
            Tu privacidad es importante para nosotros. Aquí te explicamos cómo protegemos tus datos.
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
              <li><a href="#section-1" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Responsable del tratamiento</a></li>
              <li><a href="#section-2" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Datos que recopilamos</a></li>
              <li><a href="#section-3" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Inicio de sesión con Facebook, Google y Apple</a></li>
              <li><a href="#section-4" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Cómo usamos tus datos</a></li>
              <li><a href="#section-5" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Compartir datos con terceros</a></li>
              <li><a href="#section-6" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Retención de datos</a></li>
              <li><a href="#section-7" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Tus derechos (LFPDPPP)</a></li>
              <li><a href="#section-8" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Seguridad</a></li>
              <li><a href="#section-9" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Menores de edad</a></li>
              <li><a href="#section-10" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Cambios a esta política</a></li>
              <li><a href="#section-11" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors">Contacto</a></li>
            </ol>
          </section>

          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">1.</span>
              <span>Responsable del tratamiento</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Smart Finances ("nosotros", "la aplicación") es el responsable del tratamiento de tus datos personales, en términos de la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y demás normativa aplicable en México y América Latina.
              </p>
              <p>
                Al crear una cuenta o utilizar la aplicación, aceptas los términos de esta Política de Privacidad.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">2.</span>
              <span>Datos que recopilamos</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                  Datos que tú nos proporcionas
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nombre y apellidos</li>
                  <li>Correo electrónico</li>
                  <li>Contraseña (almacenada de forma cifrada mediante Supabase Auth)</li>
                  <li>Información financiera ingresada manualmente: transacciones, presupuestos y tarjetas de crédito</li>
                </ul>
              </div>

              <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#06B6D4] rounded-full"></span>
                  Datos recopilados automáticamente
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Identificador único de dispositivo</li>
                  <li>Sistema operativo y versión de la aplicación</li>
                  <li>Registros de uso y errores (logs) para mejorar el servicio</li>
                  <li>Fecha y hora de acceso</li>
                </ul>
              </div>

              <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
                  Datos de terceros
                </h3>
                <p>
                  Si eliges iniciar sesión con Facebook, Google o Apple, recibimos el subconjunto de datos descrito en la sección 3 de esta política.
                </p>
              </div>
              <div className="bg-[#FEF2F2] border-l-4 border-[#EF4444] p-4 rounded">
                <p className="font-semibold text-[#991B1B] mb-2">Importante:</p>
                <p className="text-[#7F1D1D]">No recopilamos números de tarjetas de crédito/débito completos ni credenciales bancarias. La información financiera que registras es únicamente la que tú ingresas manualmente en la app.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">3.</span>
              <span>Inicio de sesión con Facebook, Google y Apple</span>
            </h2>
            <div className="text-[#6B7280] space-y-6">
              <p>
                Smart Finances ofrece tres métodos de autenticación de terceros. En todos los casos, usamos los datos recibidos únicamente para crear y gestionar tu cuenta; no los compartimos con otras partes ni los usamos para fines publicitarios.
              </p>

              <div className="border border-[#E5E7EB] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Facebook Login (Meta Platforms, Inc.)</h3>
                <p className="mb-3">Al iniciar sesión con Facebook, Meta nos comparte únicamente:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                  <li>Tu nombre completo tal como aparece en Facebook</li>
                  <li>Tu dirección de correo electrónico asociada a tu cuenta</li>
                  <li>Tu foto de perfil pública</li>
                  <li>Tu ID de usuario de Facebook (identificador único anonimizado)</li>
                </ul>
                <p className="mb-3"><strong>No</strong> accedemos a tu lista de amigos, publicaciones, mensajes ni a ningún otro dato más allá de lo listado. Puedes revocar el acceso desde <strong>Configuración → Aplicaciones y sitios web</strong> en tu cuenta de Facebook.</p>
                <p className="text-sm"><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Más información: Política de Privacidad de Meta</a></p>
              </div>

              <div className="border border-[#E5E7EB] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Inicio de sesión con Google (Google LLC)</h3>
                <p className="mb-3">Al iniciar sesión con Google, recibimos únicamente:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                  <li>Tu nombre completo registrado en tu cuenta de Google</li>
                  <li>Tu dirección de correo electrónico de Google</li>
                  <li>Tu foto de perfil pública</li>
                  <li>Tu ID de usuario de Google (identificador único anonimizado)</li>
                </ul>
                <p className="mb-3"><strong>No</strong> accedemos a tu correo, calendario, contactos ni a ningún otro servicio de Google. Puedes revocar el acceso desde <strong>Mi cuenta de Google → Seguridad → Aplicaciones de terceros con acceso a la cuenta</strong>.</p>
                <p className="text-sm"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Más información: Política de Privacidad de Google</a></p>
              </div>

              <div className="border border-[#E5E7EB] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Iniciar sesión con Apple (Apple Inc.)</h3>
                <p className="mb-3">Al iniciar sesión con Apple, recibimos únicamente:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                  <li>Un identificador único de usuario proporcionado por Apple</li>
                  <li>Tu nombre (solo en el primer inicio de sesión; puedes optar por no compartirlo)</li>
                  <li>Tu dirección de correo electrónico real o una dirección generada por Apple para proteger tu privacidad (<em>Hide My Email</em>)</li>
                </ul>
                <p className="mb-3"><strong>No</strong> recibimos ningún otro dato de tu cuenta de Apple. Apple no comparte tu contraseña ni información de pago con nosotros. Puedes revocar el acceso desde <strong>Configuración → [tu nombre] → Contraseña y seguridad → Aplicaciones que usan tu ID de Apple</strong> en tu iPhone o iPad.</p>
                <p className="text-sm"><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Más información: Política de Privacidad de Apple</a></p>
              </div>

              <div className="bg-[#EFF6FF] border-l-4 border-[#2563EB] p-4 rounded">
                <p className="font-semibold text-[#1E40AF] mb-2">En todos los casos:</p>
                <p className="text-[#1E40AF]">los datos obtenidos vía autenticación de terceros se utilizan exclusivamente para identificarte dentro de Smart Finances. No los combinamos con datos de otros proveedores ni los usamos para mostrarte publicidad.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">4.</span>
              <span>Cómo usamos tus datos</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                  Finalidades primarias (necesarias para el servicio)
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Crear y autenticar tu cuenta de usuario</li>
                  <li>Registrar, organizar y mostrar tus transacciones y presupuestos</li>
                  <li>Enviar alertas y recordatorios sobre fechas de corte y pago de tarjetas</li>
                  <li>Generar reportes e insights sobre tus finanzas personales</li>
                  <li>Brindar soporte técnico y atención al usuario</li>
                </ul>
              </div>

              <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#E5E7EB]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#06B6D4] rounded-full"></span>
                  Finalidades secundarias (con tu consentimiento)
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Enviarte comunicaciones sobre nuevas funciones y mejoras</li>
                  <li>Análisis agregado y anónimo para mejorar la experiencia del producto</li>
                </ul>
              </div>
              <p>
                Puedes retirar tu consentimiento para las finalidades secundarias en cualquier momento desde los ajustes de la aplicación.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">5.</span>
              <span>Compartir datos con terceros</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                No vendemos, alquilamos ni comercializamos tus datos personales. Únicamente los compartimos con los siguientes proveedores de servicios, bajo acuerdos de confidencialidad:
              </p>
              <div className="space-y-3">
                <div className="border border-[#E5E7EB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Supabase</h3>
                  <p>Proveedor de base de datos y autenticación. Almacena tu perfil, credenciales de acceso (cifradas) y datos financieros de la aplicación. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">Política de privacidad de Supabase</a></p>
                </div>
                <div className="border border-[#E5E7EB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Meta, Google y Apple (autenticación)</h3>
                  <p>Utilizados para autenticación opcional. Ver sección 3.</p>
                </div>
                <div className="border border-[#E5E7EB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Proveedores de notificaciones push</h3>
                  <p>Usamos los servicios de notificaciones de Apple (APNs) y Google (FCM) para enviarte alertas de la app, sin revelarles datos financieros.</p>
                </div>
                <div className="border border-[#E5E7EB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Divulgación legal</h3>
                  <p>Podemos divulgar tus datos cuando sea requerido por ley, orden judicial o autoridad competente en México o en el país donde operes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">6.</span>
              <span>Retención de datos</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Conservamos tus datos mientras tu cuenta esté activa. Si solicitas la eliminación de tu cuenta:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Tus datos personales y financieros serán eliminados en un plazo máximo de <strong>30 días hábiles</strong></li>
                <li>Datos anonimizados y agregados pueden conservarse indefinidamente para análisis estadístico</li>
                <li>Datos que debamos conservar por obligaciones legales o fiscales se guardarán por el tiempo que la ley exija</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">7.</span>
              <span>Tus derechos (LFPDPPP)</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Acceso:</strong> conocer qué datos tuyos tenemos</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
                <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos para ciertos fines</li>
                <li><strong>Portabilidad:</strong> recibir tus datos en un formato legible y estructurado</li>
                <li><strong>Revocación del consentimiento:</strong> para finalidades secundarias en cualquier momento</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, contáctanos en la sección 11. Responderemos en un plazo máximo de <strong>20 días hábiles</strong>.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">8.</span>
              <span>Seguridad</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Implementamos medidas técnicas y organizativas para proteger tus datos:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Cifrado en tránsito mediante HTTPS/TLS</li>
                <li>Contraseñas almacenadas con hashing seguro (gestionado por Supabase Auth)</li>
                <li>Acceso restringido a datos de producción por parte del equipo de desarrollo</li>
                <li>Monitoreo de accesos y eventos de seguridad</li>
              </ul>
              <p>
                Ningún sistema es 100% seguro. En caso de una brecha de seguridad que afecte tus datos, te notificaremos conforme a los plazos legales aplicables.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">9.</span>
              <span>Menores de edad</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Smart Finances no está dirigida a personas menores de 18 años. No recopilamos intencionalmente datos de menores. Si eres padre/madre o tutor y crees que tu hijo(a) ha creado una cuenta, contáctanos para eliminar la información de forma inmediata.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">10.</span>
              <span>Cambios a esta política</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. Cuando hagamos cambios materiales, te notificaremos mediante:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Una notificación dentro de la aplicación</li>
                <li>Un correo electrónico a la dirección registrada en tu cuenta</li>
              </ul>
              <p>
                El uso continuado de la aplicación tras la notificación constituye tu aceptación de los cambios.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-8">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <span className="text-[#2563EB]">11.</span>
              <span>Contacto</span>
            </h2>
            <div className="text-[#6B7280] space-y-4">
              <p>
                Si tienes preguntas, solicitudes de derechos ARCO u otras inquietudes sobre esta política, puedes contactarnos:
              </p>
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-6">
                <p className="font-semibold text-[#1F2937] mb-2">Smart Finances · Privacidad</p>
                <p className="mb-2">Correo electrónico: <a href="mailto:privacy@smartfinances.app" className="text-[#2563EB] hover:underline">privacy@smartfinances.app</a></p>
                <p>Tiempo de respuesta: hasta 20 días hábiles</p>
              </div>
              <p className="text-sm italic">
                Al comunicarte con nosotros, por favor indica tu nombre completo, la cuenta asociada y el derecho que deseas ejercer.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t-2 border-[#E5E7EB]">
          <div className="bg-gradient-to-r from-[#EFF6FF] to-[#F0FDFA] rounded-xl p-8 border border-[#DBEAFE]">
            <p className="text-sm text-[#6B7280] text-center">
              <span className="block font-semibold text-[#1F2937] mb-2">© 2025 Smart Finances. Todos los derechos reservados.</span>
              Esta política cumple con la LFPDPPP (México) y los requisitos de privacidad de Meta Platforms para el uso de Facebook Login.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
