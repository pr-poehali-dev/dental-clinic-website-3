import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-foreground">DentaMed</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('doctors')} className="text-foreground hover:text-primary transition-colors">Врачи</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
                Записаться
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Меню"
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-foreground" />
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors py-2">Главная</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors py-2">Услуги</button>
                <button onClick={() => scrollToSection('doctors')} className="text-left text-foreground hover:text-primary transition-colors py-2">Врачи</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-foreground hover:text-primary transition-colors py-2">Портфолио</button>
                <button onClick={() => scrollToSection('reviews')} className="text-left text-foreground hover:text-primary transition-colors py-2">Отзывы</button>
                <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors py-2">Контакты</button>
                <Button onClick={() => scrollToSection('contacts')} className="w-full mt-2">
                  Записаться
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient bg-[length:200%_200%]"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Современная<br />
                  <span className="text-primary">стоматология</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Имплантология и восстановление зубов с использованием передовых технологий
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                    Записаться на прием
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                    Наши услуги
                  </Button>
                </div>
                <div className="flex gap-8 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">15+</div>
                    <div className="text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">5000+</div>
                    <div className="text-muted-foreground">пациентов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <div className="text-muted-foreground">успеха</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/69e411e9-2239-4597-b80c-4902829c3ba3/files/d3da0d35-0473-4934-b114-4813bf244c8f.jpg"
                  alt="Современная стоматология"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground">Комплексный подход к здоровью ваших зубов</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Zap',
                  title: 'Имплантация зубов',
                  description: 'Современные импланты премиум-класса с пожизненной гарантией',
                  features: ['Немецкие импланты', 'Без боли', 'Быстрое приживление']
                },
                {
                  icon: 'Sparkles',
                  title: 'Восстановление зубов',
                  description: 'Эстетическая реставрация любой сложности',
                  features: ['3D-моделирование', 'Керамические вкладки', 'Виниры']
                },
                {
                  icon: 'Shield',
                  title: 'Протезирование',
                  description: 'Современные коронки и мостовидные протезы',
                  features: ['Циркониевые коронки', 'CAD/CAM технологии', 'Идеальная эстетика']
                },
                {
                  icon: 'Heart',
                  title: 'Лечение зубов',
                  description: 'Безболезненное лечение кариеса и пульпита',
                  features: ['Микроскоп', 'Современная анестезия', 'Гарантия качества']
                },
                {
                  icon: 'Star',
                  title: 'Отбеливание',
                  description: 'Профессиональное отбеливание ZOOM 4',
                  features: ['До 8 тонов', 'Безопасно', 'Быстрый результат']
                },
                {
                  icon: 'Users',
                  title: 'Детская стоматология',
                  description: 'Забота о зубах с раннего возраста',
                  features: ['Игровая форма', 'Без страха', 'Профилактика']
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" className="text-primary" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="doctors" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши специалисты</h2>
              <p className="text-xl text-muted-foreground">Врачи с международным опытом</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Алексей Петров',
                  role: 'Главный врач, имплантолог',
                  experience: '18 лет опыта',
                  education: 'МГМСУ, стажировка в Германии',
                  specialization: 'Имплантация, костная пластика'
                },
                {
                  name: 'Мария Иванова',
                  role: 'Стоматолог-ортопед',
                  experience: '12 лет опыта',
                  education: 'СПбГМУ, сертификация Nobel Biocare',
                  specialization: 'Протезирование, виниры'
                },
                {
                  name: 'Дмитрий Соколов',
                  role: 'Хирург-имплантолог',
                  experience: '15 лет опыта',
                  education: 'РУДН, курсы в Швейцарии',
                  specialization: 'Сложная имплантация, синус-лифтинг'
                }
              ].map((doctor, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold">{doctor.name}</h3>
                    <p className="text-primary font-semibold">{doctor.role}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <Icon name="Award" size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{doctor.experience}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Icon name="GraduationCap" size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{doctor.education}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Icon name="Stethoscope" size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{doctor.specialization}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
              <p className="text-xl text-muted-foreground">Примеры наших успешных случаев</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Полная имплантация верхней челюсти',
                  description: 'Восстановление всех зубов на имплантах All-on-6',
                  image: 'https://cdn.poehali.dev/projects/69e411e9-2239-4597-b80c-4902829c3ba3/files/5b6280e0-d953-4e15-8a10-663ede7afb5e.jpg',
                  duration: '6 месяцев'
                },
                {
                  title: 'Имплантация с костной пластикой',
                  description: 'Сложный случай с недостатком костной ткани',
                  image: 'https://cdn.poehali.dev/projects/69e411e9-2239-4597-b80c-4902829c3ba3/files/7c2fda3c-ad1a-49ad-bf2e-ed2644fed213.jpg',
                  duration: '8 месяцев'
                },
                {
                  title: 'Эстетическая реставрация передних зубов',
                  description: 'Виниры E-max на 6 зубов в зоне улыбки',
                  image: 'https://cdn.poehali.dev/projects/69e411e9-2239-4597-b80c-4902829c3ba3/files/5b6280e0-d953-4e15-8a10-663ede7afb5e.jpg',
                  duration: '2 недели'
                },
                {
                  title: 'Комплексная реабилитация',
                  description: 'Имплантация + протезирование циркониевыми коронками',
                  image: 'https://cdn.poehali.dev/projects/69e411e9-2239-4597-b80c-4902829c3ba3/files/7c2fda3c-ad1a-49ad-bf2e-ed2644fed213.jpg',
                  duration: '5 месяцев'
                }
              ].map((work, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {work.duration}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">{work.title}</h3>
                    <p className="text-muted-foreground">{work.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы пациентов</h2>
              <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Елена Смирнова',
                  text: 'Делала имплантацию у доктора Петрова. Всё прошло безболезненно и быстро. Результатом очень довольна! Спасибо всей команде клиники.',
                  rating: 5,
                  date: 'Октябрь 2024'
                },
                {
                  name: 'Игорь Васильев',
                  text: 'Очень современная клиника с новейшим оборудованием. Врачи профессионалы своего дела. Рекомендую всем, кто ищет качественную стоматологию.',
                  rating: 5,
                  date: 'Сентябрь 2024'
                },
                {
                  name: 'Анна Козлова',
                  text: 'Восстанавливала зубы керамическими винирами. Результат превзошел все ожидания! Улыбка теперь как у голливудской звезды.',
                  rating: 5,
                  date: 'Ноябрь 2024'
                }
              ].map((review, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed">{review.text}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">Запишитесь на бесплатную консультацию</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Адрес</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@dentamed.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Режим работы</h3>
                        <p className="text-muted-foreground">Пн-Сб: 9:00 - 21:00<br />Вс: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <Input placeholder="Ваше имя" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" type="tel" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" className="h-12" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" className="min-h-32" />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">DentaMed</span>
              </div>
              <p className="text-white/70">Современная стоматология для вашего здоровья</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Имплантация</li>
                <li>Протезирование</li>
                <li>Лечение зубов</li>
                <li>Отбеливание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Клиника</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Врачи</li>
                <li>Отзывы</li>
                <li>Цены</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@dentamed.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 DentaMed. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}