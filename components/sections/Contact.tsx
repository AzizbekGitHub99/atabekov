'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Facebook, ExternalLink } from 'lucide-react'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('section-visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Contact() {
  const { t } = useLang()
  const titleRef = useScrollReveal()
  const formRef = useScrollReveal()
  const infoRef = useScrollReveal()

  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const mapUrl = 'https://maps.app.goo.gl/ApmyBHUtSWpKQmVo9'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', phone: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    { icon: MapPin, value: t.contact.address },
    { icon: Phone, value: t.contact.phone },
    { icon: Mail, value: t.contact.email },
    { icon: Clock, value: t.contact.workHours },
  ]

  return (
    <section
      id="contact"
      className="relative py-28 bg-bg-main dark:bg-bg-dark overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #C5A059, transparent)' }}
      />
      <div className="absolute top-1/3 right-0 w-60 h-60 rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #7A0016, transparent)' }}
      />
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={titleRef} className="section-hidden text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 bg-accent/8 mb-5">
            {t.contact.tag}
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-main dark:text-text-dark mb-4">
            {t.contact.title}{' '}
            <span className="gradient-text">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-text-muted dark:text-text-dark-muted max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Contact Info — 2 cols */}
          <div ref={infoRef} className="section-hidden-left lg:col-span-2 space-y-5">
            {/* Main info card */}
            <div className="rounded-3xl border border-border-light dark:border-border-dark bg-bg-card dark:bg-bg-card-dark p-7 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <MapPin size={22} className="text-primary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-text-main dark:text-text-dark mb-5">
                Atabekov Kolbasa Zavodi
              </h3>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, value }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <span className="text-sm text-text-muted dark:text-text-dark-muted leading-relaxed">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-map-link"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/15 hover:shadow-gold"
                aria-label={t.contact.mapLabel}
              >
                <MapPin size={16} />
                {t.contact.mapLabel}
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Social / extra */}
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent/8 dark:to-primary/8 p-6">
              <p className="text-sm font-semibold text-text-main dark:text-text-dark mb-4">
                {t.footer.social}
              </p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://t.me/atabekov_zavod"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-telegram"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl border border-border-light dark:border-border-dark text-text-muted hover:text-[#0088cc] hover:border-[#0088cc] hover:bg-[#0088cc]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.953z" />
                  </svg>
                  <span className="text-xs font-semibold">Telegram</span>
                </a>
                <a
                  href="https://instagram.com/atabekov_zavod"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-instagram"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl border border-border-light dark:border-border-dark text-text-muted hover:text-[#e1306c] hover:border-[#e1306c] hover:bg-[#e1306c]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <Instagram size={20} />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>
                <a
                  href="https://facebook.com/atabekov_zavod"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-facebook"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl border border-border-light dark:border-border-dark text-text-muted hover:text-[#1877f2] hover:border-[#1877f2] hover:bg-[#1877f2]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <Facebook size={20} />
                  <span className="text-xs font-semibold">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form — 3 cols */}
          <div ref={formRef} className="section-hidden-right lg:col-span-3">
            <div className="rounded-3xl border border-border-light dark:border-border-dark bg-bg-card dark:bg-bg-card-dark p-7 sm:p-10 shadow-sm">

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-scaleIn">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-text-main dark:text-text-dark mb-2">
                    Xabar yuborildi!
                  </h3>
                  <p className="text-text-muted dark:text-text-dark-muted text-sm">
                    Tez orada siz bilan bog&apos;lanamiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-text-dark-muted mb-2">
                        Ism
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="premium-input"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-text-dark-muted mb-2">
                        Telefon
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="premium-input"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-text-dark-muted mb-2">
                      Xabar
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="premium-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Yuborilmoqda...
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        {t.contact.sendBtn}
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-text-muted dark:text-text-dark-muted">
                    Ma&apos;lumotlaringiz maxfiy saqlanadi ✓
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
