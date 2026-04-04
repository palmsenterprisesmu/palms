'use client'
import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'

export default function Newsletter() {
  const { lang } = useLang()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: POST to Mailchimp/Klaviyo API route
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden" style={{background:'linear-gradient(135deg,#1C2B4A 0%,#1E3A6E 50%,#0F2D45 100%)'}}>
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 20% 40%,rgba(232,80,91,.15),transparent 50%), radial-gradient(ellipse at 80% 60%,rgba(78,175,124,.12),transparent 50%)'}} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.72rem] font-black tracking-[0.18em] uppercase text-gold mb-3">
              {{ en:'Good Vibes Club', fr:'Club Bonnes Vibrations', de:'Good Vibes Club' }[lang]}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white leading-snug mb-4">
              {{ en:'10% off your first order 🎉', fr:'10% de réduction sur votre première commande 🎉', de:'10% Rabatt auf deine erste Bestellung 🎉' }[lang]}
            </h2>
            <p className="text-white/75 font-semibold leading-relaxed">
              {{ en:'Join the good vibes club. Get exclusive offers, new drops, and a little bit of Mauritian sunshine in your inbox.', fr:'Rejoignez le club des bonnes vibrations. Offres exclusives, nouveautés et un peu de soleil mauricien dans votre boîte mail.', de:'Tritt dem Good Vibes Club bei. Exklusive Angebote, neue Drops und ein bisschen mauritischen Sonnenschein in deinem Posteingang.' }[lang]}
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="text-center text-white font-black text-xl py-10">
                🎉 {{ en:'Welcome to the club!', fr:'Bienvenue dans le club !', de:'Willkommen im Club!' }[lang]}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" placeholder={{ en:'Your name 🌴', fr:'Votre prénom 🌴', de:'Dein Name 🌴' }[lang]}
                  className="px-5 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/45 font-semibold outline-none focus:border-white/70 focus:bg-white/15 transition-all backdrop-blur-sm" />
                <input type="email" required placeholder={{ en:'Your email address ✉️', fr:'Votre adresse email ✉️', de:'Deine E-Mail-Adresse ✉️' }[lang]}
                  className="px-5 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/45 font-semibold outline-none focus:border-white/70 focus:bg-white/15 transition-all backdrop-blur-sm" />
                <button type="submit"
                  className="px-7 py-4 rounded-full bg-gold text-navy font-black text-sm hover:bg-yellow-300 hover:scale-[1.02] transition-all shadow-lg shadow-gold/30">
                  {{ en:'Yes, I want good vibes! 🌊', fr:'Oui, je veux les bonnes vibrations ! 🌊', de:'Ja, ich will gute Vibes! 🌊' }[lang]}
                </button>
                <p className="text-[0.72rem] text-white/40 font-semibold text-center">
                  {{ en:'No spam. Promise. Good vibes only. 🤙', fr:'Pas de spam. Promis. Uniquement des bonnes vibrations. 🤙', de:'Kein Spam. Versprochen. Nur gute Vibes. 🤙' }[lang]}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}