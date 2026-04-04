'use client'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'

export default function Hero() {
  const { lang } = useLang()

  const title = { en: <>Choose<br/><span className="text-rose relative">Happiness<span className="absolute -bottom-1 left-0 right-0 h-1 bg-gold rounded-sm" /></span><br/>Every Day</>, fr: <>Choisissez<br/><span className="text-rose">le Bonheur</span><br/>Chaque Jour</>, de: <>Wähle<br/><span className="text-rose">das Glück</span><br/>Jeden Tag</> }
  const sub = { en:"Positive wear and gifts designed for good vibes and island calm. T-shirts, hoodies, caps, tote bags — wear the feeling. 🌴", fr:"Des vêtements et cadeaux positifs conçus pour les bonnes vibrations et la sérénité insulaire. Portez le sentiment. 🌴", de:"Positive Mode und Geschenke für gute Stimmung und Inselruhe. T-Shirts, Hoodies, Caps, Tote Bags — trag das Gefühl. 🌴" }
  const cta = { en:'Shop the Collection ✨', fr:'Voir la Collection ✨', de:'Zur Kollektion ✨' }
  const badge1 = { en:'Island Made', fr:'Fait Ici', de:'Auf der Insel' }
  const badge2 = { en:'Good Vibes', fr:'Bonnes Vibrations', de:'Gute Vibes' }

  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[560px] h-[560px] rounded-full bg-rose opacity-10 blur-[80px] -top-44 -right-20 animate-pulse" />
        <div className="absolute w-[420px] h-[420px] rounded-full bg-blue opacity-10 blur-[80px] -bottom-32 -left-24" />
        <div className="absolute w-[280px] h-[280px] rounded-full bg-green opacity-10 blur-[80px] top-1/3 right-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 pb-20">

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-pale border border-blue/25 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
              <span className="text-[0.75rem] font-black tracking-widest uppercase text-blue">
                {{ en:'🌴 Positive Wear · Est. 2025', fr:'🌴 Mode Positive · Fondé 2025', de:'🌴 Positive Mode · Gegr. 2025' }[lang]}
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl leading-tight text-navy mb-5">
              {title[lang]}
            </h1>

            <p className="text-lg leading-relaxed text-navy-soft font-semibold max-w-md mb-8">{sub[lang]}</p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#shop" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-rose text-white font-black text-sm hover:bg-rose-lt hover:-translate-y-0.5 transition-all shadow-lg shadow-rose/30">
                {cta[lang]}
              </a>
              <a href="https://www.instagram.com/palmsmauritius" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-slate hover:text-rose transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                @palmsmauritius
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-navy/10 flex-wrap">
              <div className="text-center">
                <span className="font-display text-2xl text-rose block">🌴</span>
                <span className="text-[0.72rem] font-bold uppercase tracking-widest text-slate">Mauritius</span>
              </div>
              <div className="w-px h-10 bg-navy/10" />
              <div className="text-center">
                <span className="font-display text-2xl text-blue block">100%</span>
                <span className="text-[0.72rem] font-bold uppercase tracking-widest text-slate">{badge1[lang]}</span>
              </div>
              <div className="w-px h-10 bg-navy/10" />
              <div className="text-center">
                <span className="font-display text-2xl text-green block">☀️</span>
                <span className="text-[0.72rem] font-bold uppercase tracking-widest text-slate">{badge2[lang]}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative max-w-[500px] mx-auto lg:mx-0 w-full">
            <div className="relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80"
                alt="Person wearing a Palms Mauritius t-shirt" fill className="object-cover" sizes="500px" priority />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose via-blue to-green" />
            </div>
            {[
              { className:'absolute top-6 -left-8 border-l-4 border-rose', icon:'☀️', label:{ en:'Good Vibes Only', fr:'Bonnes Vibrations', de:'Nur gute Vibes' } },
              { className:'absolute bottom-12 -right-6 border-l-4 border-blue', icon:'🌊', label:{ en:'Made in Mauritius', fr:'Fait à Maurice', de:'Made in Mauritius' } },
              { className:'absolute top-1/2 -right-5 border-l-4 border-green', icon:'🌴', label:{ en:'Wear Happiness', fr:'Porter le Bonheur', de:'Glück tragen' } },
            ].map((card, i) => (
              <div key={i} className={`${card.className} bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2 text-sm font-bold text-navy whitespace-nowrap`}>
                <span className="text-xl">{card.icon}</span>
                {card.label[lang]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}