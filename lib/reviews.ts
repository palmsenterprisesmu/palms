export type Review = {
  en: string; fr: string; de: string
  name: string
  locEn: string; locFr: string; locDe: string
  avatar: string
  stars: number
}

export const reviews: Review[] = [
  { en:"Got the 'Choose Happiness' tee for a friend visiting Mauritius and she absolutely loved it. The quality is amazing and the positive message is just so on-brand for the island!",
    fr:"J'ai offert le t-shirt à une amie qui visitait Maurice et elle a adoré. La qualité est incroyable et le message positif est parfait pour l'ambiance insulaire !",
    de:"Ich habe das T-Shirt für eine Freundin auf Mauritius gekauft und sie liebte es absolut. Die Qualität ist erstaunlich und die positive Botschaft passt perfekt!",
    name:'Sophie L.', locEn:'Visited from France', locFr:'Visiteuse de France', locDe:'Besucherin aus Frankreich',
    avatar:'https://i.pravatar.cc/80?img=5', stars:5 },
  { en:"Bought the Beach Tote and the hoodie. Both are top quality and I wear them constantly. Love that it's genuinely made in Mauritius — means a lot to support local.",
    fr:"J'ai acheté le tote bag et le hoodie. Les deux sont de grande qualité. J'adore que ce soit vraiment fait à Maurice.",
    de:"Ich habe die Strandtasche und den Hoodie gekauft. Beide in absoluter Topqualität. Toll, dass es wirklich auf Mauritius hergestellt wird!",
    name:'Raj M.', locEn:'Port Louis, Mauritius', locFr:'Port Louis, Maurice', locDe:'Port Louis, Mauritius',
    avatar:'https://i.pravatar.cc/80?img=12', stars:5 },
  { en:"Ordered the sticker pack as a last-minute gift and it was a total hit. Bright, fun, and full of good energy. Will definitely be ordering more.",
    fr:"Commandé le pack de stickers en cadeau de dernière minute et c'était un carton. Coloré, fun et plein de bonne énergie !",
    de:"Das Sticker-Pack als Last-Minute-Geschenk bestellt — voller Erfolg. Bunt, lustig und voller guter Energie. Bestelle definitiv mehr!",
    name:'Emma T.', locEn:'Rose Hill, Mauritius', locFr:'Rose Hill, Maurice', locDe:'Rose Hill, Mauritius',
    avatar:'https://i.pravatar.cc/80?img=9', stars:5 },
]