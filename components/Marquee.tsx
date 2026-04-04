'use client'
import { useLang } from '@/lib/LanguageContext'

const items = [
  { en:'Good Vibes Only 🌴',     fr:'Bonnes Vibrations 🌴',     de:'Nur gute Vibes 🌴'          },
  { en:'100% Mauritius Made 🌊', fr:'100% Fait à Maurice 🌊',   de:'100% Made in Mauritius 🌊'  },
  { en:'Wear Happiness ☀️',      fr:'Portez le Bonheur ☀️',     de:'Glück tragen ☀️'            },
  { en:'Choose Positivity 🌺',   fr:'Choisir la Positivité 🌺', de:'Positivität wählen 🌺'      },
  { en:'Island Calm 🏄',         fr:'Sérénité Insulaire 🏄',    de:'Inselruhe 🏄'               },
  { en:'Born in Paradise 🌅',    fr:'Né au Paradis 🌅',         de:'Im Paradies geboren 🌅'     },
]

const dotColors = ['bg-rose-lt','bg-blue-lt','bg-gold','bg-green-lt']

export default function Marquee() {
  const { lang } = useLang()
  const doubled = [...items, ...items]

  return (
    <div>
      <div className="h-1 grid grid-cols-4"><span className="bg-rose"/><span className="bg-blue"/><span className="bg-gold"/><span className="bg-green"/></div>
      <div className="bg-navy py-4 overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-7 font-display text-white whitespace-nowrap">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[i % 4]}`} />
              {item[lang]}
            </div>
          ))}
        </div>
      </div>
      <div className="h-1 grid grid-cols-4"><span className="bg-rose"/><span className="bg-blue"/><span className="bg-gold"/><span className="bg-green"/></div>
    </div>
  )
}