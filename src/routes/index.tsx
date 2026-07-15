import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle, MapPin, Phone, Star, Menu, X, CheckCircle2,
  Pill, ShieldCheck, Stethoscope, HeartPulse, Sparkles, Clock,
  Instagram, Facebook, ArrowRight, Navigation,
} from "lucide-react";

import logo from "@/assets/elifarma-logo.asset.json";
import fachada from "@/assets/fachada.asset.json";
import interior1 from "@/assets/interior1.asset.json";
import interior2 from "@/assets/interior2.asset.json";
import interior3 from "@/assets/interior3.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP_NUMBER = "51980794098";
const WHATSAPP_MSG = encodeURIComponent("Hola Elifarma, necesito ayuda con un medicamento o asesoría.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const MAPS_URL = "https://maps.app.goo.gl/PZd8Yj1E7iVvEPmp9";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.6 6.3a4.9 4.9 0 0 1-3-1.1 4.9 4.9 0 0 1-1.8-3H11.2v12.4a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V8.5a6 6 0 0 0-.8-.1 6 6 0 1 0 6 6V9.1a8 8 0 0 0 5 1.7V7.3a4.9 4.9 0 0 1-.4-.4z"/>
    </svg>
  );
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/70 backdrop-blur"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#inicio" className="flex items-center gap-2 shrink-0">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center shadow-md">
                <span className="text-white font-black text-lg">E</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-extrabold text-lg text-brand-dark">Elifarma</div>
                <div className="text-[10px] text-muted-foreground -mt-0.5">Cuidando Tu Salud</div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-whatsapp items-center gap-2 rounded-full px-4 lg:px-5 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden md:inline">Escríbenos por WhatsApp</span>
                <span className="md:hidden">WhatsApp</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted"
                aria-label="Menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="lg:hidden pb-4 flex flex-col gap-1 border-t border-border pt-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden mt-2 btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-24 lg:pt-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full bg-health/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-health/20 text-brand-dark px-4 py-1.5 text-xs font-semibold mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Farmacia de confianza
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.05]">
                Tu salud es <span className="text-brand">nuestra prioridad</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Atención farmacéutica confiable, medicamentos de calidad y asesoría profesional cerca de ti.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white transition-all"
                >
                  <Navigation className="h-5 w-5" />
                  Cómo llegar
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, text: "Atención rápida" },
                  { icon: ShieldCheck, text: "Productos certificados" },
                  { icon: MapPin, text: "Ubicación accesible" },
                ].map((it) => (
                  <div key={it.text} className="flex items-center gap-2.5">
                    <div className="h-9 w-9 shrink-0 rounded-full bg-health/25 grid place-items-center">
                      <it.icon className="h-4.5 w-4.5 text-brand-dark" style={{ height: 18, width: 18 }} />
                    </div>
                    <span className="text-sm font-medium">{it.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={fachada.url}
                  alt="Fachada de Farmacia Elifarma"
                  className="w-full h-[420px] sm:h-[520px] object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
                <div className="h-12 w-12 rounded-xl bg-health grid place-items-center">
                  <HeartPulse className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Cuidando</div>
                  <div className="font-bold text-brand-dark">Tu Salud</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="py-16 lg:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Clientes que confían en nosotros
            </h2>
            <p className="mt-3 text-muted-foreground">
              Miles de vecinos eligen Elifarma por nuestra atención y calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "María G.", text: "Excelente atención y buenos precios. Siempre me asesoran con paciencia." },
              { name: "Carlos R.", text: "Siempre encuentro lo que necesito. Muy profesionales y rápidos." },
              { name: "Lucía P.", text: "La mejor farmacia del sector, atienden con calidez y confianza." },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed">"{r.text}"</p>
                <div className="mt-4 text-sm font-semibold text-brand-dark">— {r.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["Atención personalizada", "Confianza local", "Calidad garantizada"].map((t) => (
              <div key={t} className="flex items-center gap-2 justify-center bg-white rounded-full px-4 py-2.5 border border-border shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-health shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand-dark px-4 py-1.5 text-xs font-semibold mb-4">
              Nuestros servicios
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Todo lo que necesitas para tu bienestar
            </h2>
            <p className="mt-3 text-muted-foreground">
              Servicios farmacéuticos completos con estándares de calidad y seguridad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Pill, title: "Dispensación de medicamentos", desc: "Medicamentos seguros y verificados para tu tranquilidad y bienestar." },
              { icon: ShieldCheck, title: "Farmacovigilancia profesional", desc: "Seguimiento y control experto para el uso correcto y seguro de tus medicamentos." },
              { icon: HeartPulse, title: "Productos farmacéuticos certificados", desc: "Solo marcas y productos con certificación de calidad garantizada." },
              { icon: Stethoscope, title: "Dispositivos médicos confiables", desc: "Equipos y dispositivos médicos de las mejores marcas para tu hogar." },
              { icon: Sparkles, title: "Cuidado personal", desc: "Amplia variedad de productos para tu higiene, cuidado y bienestar diario." },
              { icon: MessageCircle, title: "Asesoría farmacéutica", desc: "Consulta con nuestros expertos sin costo, cerca o vía WhatsApp." },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl p-6 border border-border hover:border-brand/40 hover:shadow-xl transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center shadow-md group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 lg:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Conoce nuestra farmacia
            </h2>
            <p className="mt-3 text-muted-foreground">
              Un espacio moderno, limpio y organizado, pensado para tu comodidad.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div className="lg:row-span-2 lg:col-span-2 rounded-2xl overflow-hidden shadow-md group">
              <img src={fachada.url} alt="Fachada Elifarma" className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto group-hover:scale-105 transition-transform duration-500" />
            </div>
            {[interior1, interior2, interior3].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md group">
                <img src={img.url} alt={`Interior Elifarma ${i + 1}`} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden shadow-md bg-gradient-brand grid place-items-center p-6 text-center">
              <div>
                <HeartPulse className="h-8 w-8 text-white mx-auto" />
                <p className="mt-2 text-white font-bold">Atención cálida y profesional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-health/25 text-brand-dark px-4 py-1.5 text-xs font-semibold mb-4">
              Nosotros
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Comprometidos con tu bienestar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl p-8 bg-gradient-brand text-white overflow-hidden">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
              <HeartPulse className="h-10 w-10 opacity-90" />
              <h3 className="mt-4 text-2xl font-extrabold">Misión</h3>
              <p className="mt-3 leading-relaxed text-white/90">
                En Farmacia Elifarma, nuestra misión es satisfacer las necesidades de nuestros pacientes ofreciendo servicios de almacenamiento, dispensación y farmacovigilancia de productos farmacéuticos, dispositivos médicos y productos sanitarios, garantizando calidad, seguridad y confianza en cada atención.
              </p>
            </div>
            <div className="relative rounded-3xl p-8 bg-white border-2 border-brand/15 overflow-hidden">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-health/20" />
              <Sparkles className="h-10 w-10 text-health" />
              <h3 className="mt-4 text-2xl font-extrabold text-brand-dark">Visión</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Ser una farmacia líder y especializada en brindar servicios de calidad en almacenamiento, dispensación y farmacovigilancia, contribuyendo al bienestar de la comunidad y destacando por nuestra atención profesional, compromiso y mejora continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-16 lg:py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand-dark px-4 py-1.5 text-xs font-semibold mb-4">
                <MapPin className="h-3.5 w-3.5" /> Ubicación
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
                Visítanos fácilmente, estamos cerca de ti
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Farmacia Elifarma, ubicada al costado de Inkamay Nicolás de Piérola.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-border">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 grid place-items-center shrink-0">
                    <MapPin className="h-5 w-5 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">Dirección</div>
                    <div className="text-sm text-muted-foreground">Al costado de Inkamay, Nicolás de Piérola</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-border">
                  <div className="h-10 w-10 rounded-xl bg-health/25 grid place-items-center shrink-0">
                    <Phone className="h-5 w-5 text-brand-dark" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">Contacto directo</div>
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm text-brand hover:underline">+51 980 794 098</a>
                  </div>
                </div>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-brand text-white hover:bg-brand-dark shadow-lg hover:shadow-xl transition-all"
              >
                <Navigation className="h-5 w-5" />
                Abrir en Google Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[420px]">
              <iframe
                title="Ubicación Elifarma"
                src="https://www.google.com/maps?q=Farmacia+Elifarma+Nicolas+de+Pierola&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FUERTE */}
      <section id="contacto" className="py-16 lg:py-24 relative overflow-hidden bg-gradient-brand">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold mb-6">
            <MessageCircle className="h-3.5 w-3.5" /> Respuesta rápida
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            ¿Necesitas un medicamento o asesoría?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Escríbenos ahora y te ayudamos rápidamente. Estamos aquí para cuidar de tu salud.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3 rounded-full px-8 py-4 font-bold text-lg shadow-2xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <MessageCircle className="h-6 w-6" />
              Contactar por WhatsApp ahora
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
            >
              <Phone className="h-5 w-5" /> +51 980 794 098
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white/90 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-11 w-11 rounded-xl bg-white grid place-items-center">
                  <span className="text-brand-dark font-black text-lg">E</span>
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl text-white">Elifarma</div>
                  <div className="text-xs text-white/70">Cuidando Tu Salud</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70 max-w-xs">
                Farmacia de confianza comprometida con la salud y bienestar de nuestra comunidad.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Navegación</h4>
              <ul className="space-y-2 text-sm">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-white/70 hover:text-white transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Síguenos</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/elifarmafarmacia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/share/1EoetjEAeh/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@farmaciaelifarma" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors">
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 rounded-full bg-whatsapp hover:brightness-95 grid place-items-center transition-all">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-white/70">+51 980 794 098</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <div>© {new Date().getFullYear()} Elifarma — Cuidando Tu Salud. Todos los derechos reservados.</div>
            <div>Hecho con ❤ para tu bienestar</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 sm:h-16 sm:w-16 rounded-full btn-whatsapp grid place-items-center animate-float-pulse"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
