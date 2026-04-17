export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter" style={{color: '#C9A84C'}}>
            МОСКОВСКИЕ БЕЙДЖИ
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Продукция
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Заказать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              БЕЙ
              <br />
              ДЖИ
            </h1>
            <p className="text-xl max-w-xl">
              Профессиональное изготовление бейджей в Москве. Быстро, точно, с доставкой. Пластик, металл, ПВХ — любые тиражи от 1 штуки.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Рассчитать стоимость
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-9xl font-bold tracking-tighter">ID</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ПРОДУКЦИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">01</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">Пластик</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Пластиковые бейджи</h3>
              <p className="text-neutral-400">Классические бейджи из ПВХ с полноцветной печатью. Горизонтальные и вертикальные форматы, ламинация.</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">02</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">Металл</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Металлические бейджи</h3>
              <p className="text-neutral-400">Престижные бейджи из алюминия или стали. Гравировка, анодирование, магнитные или булавочные крепления.</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">03</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-2 group-hover:text-white transition-colors">Карман</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Карманные бейджи</h3>
              <p className="text-neutral-400">Бейджи-холдеры с карманом для сменной вкладки. Идеально для конференций, выставок и event-мероприятий.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-black">МСК</div>
                    <div className="text-sm uppercase tracking-widest text-neutral-500 mt-2">Производство</div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Московские Бейджи — производство, которое работает для вашего бизнеса. Изготавливаем бейджи любых форматов быстро и качественно.
              </p>
              <p className="mb-6">
                Собственное производство в Москве позволяет контролировать каждый этап: от вёрстки макета до упаковки готового заказа. Срочные заказы — от 1 дня. Крупные тиражи — по специальным ценам.
              </p>
              <p className="mb-6">
                Работаем с корпоративными клиентами, event-агентствами, розничными магазинами и частными лицами. Доставка по Москве и всей России.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Преимущества</h3>
                  <ul className="space-y-2">
                    <li>Срок от 1 дня</li>
                    <li>Тираж от 1 шт.</li>
                    <li>Своё производство</li>
                    <li>Доставка по России</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Виды бейджей</h3>
                  <ul className="space-y-2">
                    <li>Пластиковые</li>
                    <li>Металлические</li>
                    <li>Карманные холдеры</li>
                    <li>На заказ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ЗАКАЗАТЬ</h2>
              <p className="text-xl mb-8">Оставьте заявку — рассчитаем стоимость и сроки в течение 15 минут.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@moskovskie-bedzhi.ru" className="hover:underline">
                    info@moskovskie-bedzhi.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Что нужно сделать
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Тип бейджа, тираж, сроки..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-sm font-bold tracking-tighter">МОСКОВСКИЕ БЕЙДЖИ</span>
          <span className="text-sm text-neutral-500">© 2026 — Производство бейджей в Москве</span>
        </div>
      </footer>
    </main>
  );
}