export const business = {
  name: "AutoRay12 Detailing",
  instagram: "https://www.instagram.com/autoray12_detailing/",
  map: "https://2gis.kz/aktau/firm/70000001033868969",
  reviews: "https://2gis.kz/aktau/firm/70000001033868969/tab/reviews",
  route: "https://2gis.kz/aktau/directions/points/%7C51.180127%2C43.651352%3B70000001033868969",
  whatsapp: "https://wa.me/77756613361",
  phone: "+7 775 661 33 61",
  address: "Актау, 25-й микрорайон, 48/3",
  hours: "Ежедневно · 10:00–20:00",
};
export function booking(service?: string) {
  return `${business.whatsapp}?text=${encodeURIComponent(service ? `Здравствуйте! Хочу записаться на услугу «${service}». Подскажите стоимость и свободное время.` : "Здравствуйте! Хочу записаться в AutoRay12. Подскажите свободное время.")}`;
}
export const services = [
  { title: "Полировка", description: "Блеск кузова. Внимание к каждой поверхности.", icon: "sparkles" },
  { title: "Химчистка", description: "Уход за салоном — от сидений до мелочей.", icon: "clean" },
  { title: "Шумоизоляция", description: "Комфорт, который чувствуешь в каждой поездке.", icon: "sound" },
];
export const works = [
  { src: "/images/lexus.jpg", alt: "Чёрный Lexus в студии Auto Ray 12", title: "Свет. Кузов. Детали.", category: "В студии", href: "https://2gis.kz/aktau/gallery/firm/70000001033868969" },
  { src: "/images/work.jpg", alt: "Мастер AutoRay12 наносит защитную плёнку на дверь автомобиля", title: "Защита в процессе", category: "Оклейка PPF", href: "https://www.instagram.com/autoray12_detailing/reel/DbNrsRxt1E6/" },
  { src: "/images/ram.jpg", alt: "Dodge RAM RHO после оклейки PPF, публикация AutoRay12", title: "Dodge RAM RHO", category: "Оклейка PPF", href: "https://www.instagram.com/autoray12_detailing/reel/DV0_L9QjD3c/" },
  { src: "/images/accord.jpg", alt: "Чёрный Honda Accord на фотографии из карточки Auto Ray 12", title: "Внимание к отражениям", category: "Из архива студии", href: "https://2gis.kz/aktau/gallery/firm/70000001033868969" },
];
export const reviews = [
  { name: "Amin Gaziz", date: "24 августа 2025", quote: "Все на высшем уровне🤩 Работают на качество", verified: true },
  { name: "Нурдаулет Шертим", date: "13 ноября 2025", quote: "Тез жасап береді әрі сапалы", verified: true },
  { name: "Георгий 011", date: "8 января 2023", quote: "Профессионалы своего дела", verified: false },
];
