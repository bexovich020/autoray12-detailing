import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Check, Clock3, Instagram, MapPin, MessageCircle, Shield, Sparkles, Star, VolumeX, Waves } from "lucide-react";
import { Header, Reveal } from "@/components/interactions";
import { booking, business, reviews, services, works } from "@/lib/content";

function Stars() { return <span className="stars" aria-label="5 из 5">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" />)}</span>; }
function External({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) { return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>; }

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-media"><Image src="/images/studio.jpg" alt="Hyundai под геометрическим светом в детейлинг-студии Auto Ray 12" fill priority sizes="100vw" quality={90} /></div>
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <div className="hero-topline"><span><i /> ДЕТЕЙЛИНГ В АКТАУ</span><span className="hero-coordinates">43.651352° N / 51.180127° E</span></div>
          <h1 id="hero-title">ИСКУССТВО<br /><span>ДЕТАЛЕЙ.</span></h1>
          <div className="hero-description"><span className="small-line" /><p>Ваш автомобиль.<br />В новом свете.</p></div>
          <External href={booking()} className="hero-cta"><span>ЗАПИСАТЬСЯ<br />В СТУДИЮ</span><ArrowUpRight size={33} strokeWidth={1.3} aria-hidden="true" /><small>WHATSAPP</small></External>
          <div className="hero-bottom"><a href="#services" className="scroll-cue"><ArrowDown size={18} aria-hidden="true" /> Откройте AutoRay12</a><External href={business.reviews} className="hero-rating"><Stars /><span>5,0 <small>/ 2GIS</small></span></External><span className="hero-bottom-location">25-Й МИКРОРАЙОН, 48/3</span></div>
        </div>
      </section>

      <section className="services section-light" id="services" aria-labelledby="services-title">
        <div className="page-width">
          <Reveal className="section-heading"><div><p className="eyebrow"><span /> УСЛУГИ СТУДИИ</p><h2 id="services-title">КУЗОВ. САЛОН.<br /><span className="muted-light">ВАШ КОМФОРТ.</span></h2></div><p className="heading-note">От первого отражения<br />до ощущения за рулём.</p></Reveal>
          <div className="service-layout">
            <Reveal className="featured-service"><Image src="/images/ppf.jpg" alt="Toyota и защитная плёнка CLEARPRO в студии AutoRay12" fill sizes="(max-width: 760px) 100vw, 52vw" /><div className="panel-shade" /><span className="panel-tag"><Shield size={15} /> ЗАЩИТА КУЗОВА</span><div className="featured-service-bottom"><h3>НЕВИДИМАЯ<br />ЗАЩИТА. PPF.</h3><p>Бронирование и оклейка<br />защитной плёнкой.</p><External href={booking("Оклейка PPF")} className="round-link" ><ArrowUpRight aria-label="Записаться на оклейку PPF" /></External></div></Reveal>
            <div className="secondary-services">{services.map(service => <Reveal key={service.title}><External href={booking(service.title)} className="service-row"><div className="service-icon">{service.icon === "sparkles" ? <Sparkles /> : service.icon === "sound" ? <VolumeX /> : <Waves />}</div><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={25} aria-hidden="true" /></External></Reveal>)}</div>
          </div>
          <div className="service-extras"><span>А ТАКЖЕ</span>{["VIP-мойка", "Мойка ДВС", "Ремонт фар"].map(service => <External key={service} href={booking(service)}>{service}<ArrowUpRight size={16} aria-hidden="true" /></External>)}<small>Стоимость и время — при записи</small></div>
        </div>
      </section>

      <section className="philosophy" aria-labelledby="philosophy-title">
        <div className="page-width philosophy-grid">
          <Reveal className="philosophy-photo"><Image src="/images/work.jpg" alt="Оклейка кузова защитной плёнкой в AutoRay12" fill sizes="(max-width: 760px) 100vw, 38vw" /><span className="photo-caption">AUTORAY12 / В ПРОЦЕССЕ</span></Reveal>
          <Reveal className="philosophy-copy"><span className="outlined-twelve" aria-hidden="true">12</span><p className="eyebrow"><span /> ПОДХОД AUTORAY12</p><h2 id="philosophy-title">НЕ НА КОЛИЧЕСТВО.<br />НА <em>КАЧЕСТВО.</em></h2><p className="philosophy-description">Так студия говорит о своей работе. И так выглядят детали: свет на кузове, аккуратная оклейка, внимание к салону.</p><External href={business.instagram} className="text-link">Заглянуть в жизнь студии <ArrowUpRight size={19} aria-hidden="true" /></External><div className="philosophy-signature"><span>AUTO RAY</span><small>DETAILING IS IN THE DETAILS</small></div></Reveal>
        </div>
      </section>

      <section className="works" id="works" aria-labelledby="works-title">
        <div className="page-width">
          <Reveal className="section-heading"><div><p className="eyebrow"><span /> РАБОТЫ И ПРОЦЕСС</p><h2 id="works-title">БЕЗ ЛИШНИХ СЛОВ.<br /><span className="muted-dark">ПОСМОТРИТЕ.</span></h2></div><External href={business.instagram} className="text-link"><Instagram size={17} aria-hidden="true" /> Больше в Instagram <ArrowUpRight size={18} aria-hidden="true" /></External></Reveal>
          <div className="work-grid">{works.map((work, i) => <Reveal key={work.src} className={`work-item work-${i}`}><External href={work.href} className="work-image"><Image src={work.src} alt={work.alt} fill sizes={i === 0 || i === 3 ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 50vw, 32vw"} /><span className="work-open"><ArrowUpRight aria-label={`Открыть оригинал: ${work.title}`} size={23} /></span></External><div className="work-caption"><h3>{work.title}</h3><span>{work.category}</span></div></Reveal>)}</div>
          <p className="gallery-source">Реальные кадры из Instagram и 2GIS AutoRay12. Нажмите на фото, чтобы открыть источник.</p>
        </div>
      </section>

      <section className="reviews section-light" id="reviews" aria-labelledby="reviews-title">
        <div className="page-width review-layout">
          <Reveal className="review-summary"><p className="eyebrow"><span /> ГОЛОС КЛИЕНТОВ</p><h2 id="reviews-title">ДОВЕРИЕ<br />В ДЕТАЛЯХ.</h2><div className="rating-number">5<span>,0</span></div><Stars /><p>78 оценок · 26 отзывов в 2GIS</p><External href={business.reviews} className="text-link">Все отзывы <ArrowUpRight size={19} aria-hidden="true" /></External><small className="rating-date">По данным 2GIS на 12.10.2026</small></Reveal>
          <div className="review-list">{reviews.map(review => <Reveal key={review.name} className="review"><span className="review-source">ОТЗЫВ В 2GIS</span><blockquote>«{review.quote}»</blockquote><div className="review-person"><span>{review.name}<small>{review.date}</small></span><span className="review-source">{review.verified && <Check size={13} aria-hidden="true" />} 2GIS</span></div></Reveal>)}</div>
        </div>
      </section>

      <section className="booking" aria-labelledby="booking-title">
        <div className="page-width booking-grid"><Reveal><p className="eyebrow"><span /> СЛЕДУЮЩИЙ КАДР — ВАШ</p><h2 id="booking-title">ВРЕМЯ<br />ДЛЯ <span>ВАШЕГО АВТО.</span></h2></Reveal><Reveal className="booking-action"><ArrowDownRight size={70} strokeWidth={1} className="booking-arrow" aria-hidden="true" /><p>Расскажите, какой уход нужен автомобилю.<br />Обсудим услугу, стоимость и удобное время.</p><External href={booking()} className="button-gold"><MessageCircle size={20} aria-hidden="true" /> Написать в WhatsApp <ArrowUpRight size={22} aria-hidden="true" /></External></Reveal></div>
      </section>
    </main>

    <footer id="contacts" className="footer">
      <div className="page-width"><div className="contact-grid"><div><p className="eyebrow"><span /> ЖДЁМ В СТУДИИ</p><h2>АКТАУ<span className="location-dot">.</span></h2><External href={business.route} className="address-link">25-й микрорайон, 48/3 <ArrowUpRight size={24} aria-hidden="true" /></External><p className="footer-floor">1 этаж</p></div><div className="contact-details"><div><Clock3 size={18} aria-hidden="true" /><p>Ежедневно<small>10:00–20:00</small></p></div><External href={booking()}><MessageCircle size={18} aria-hidden="true" /><p>WhatsApp<small>{business.phone}</small></p><ArrowUpRight size={18} aria-hidden="true" /></External><External href={business.instagram}><Instagram size={18} aria-hidden="true" /><p>Instagram<small>@autoray12_detailing</small></p><ArrowUpRight size={18} aria-hidden="true" /></External></div><External href={business.route} className="map-panel"><div className="map-lines" aria-hidden="true" /><MapPin size={34} strokeWidth={1.5} aria-hidden="true" /><strong>AUTO RAY 12</strong><span>Построить маршрут в 2GIS <ArrowUpRight size={17} aria-hidden="true" /></span></External></div><div className="footer-bottom"><a href="#home" className="footer-wordmark">AUTO RAY<span>12</span></a><span>© 2026 AutoRay12 Detailing</span><small>Демо-концепция сайта</small><a href="#home" className="back-top" aria-label="Наверх"><ArrowUpRight size={22} /></a></div></div>
    </footer>
  </>;
}
