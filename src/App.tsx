import { useState, useEffect, Suspense } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  FileText, 
  ChevronDown,
  MapPin,
  Award,
  Clock
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import Notary3D from './components/Notary3D';
import Section from './components/Section';

const salaryData = [
  { name: 'Москва', value: 150000, color: '#A53327' },
  { name: 'Санкт-Петербург', value: 110000, color: '#719B87' },
  { name: 'Екатеринбург', value: 85000, color: '#966D7E' },
  { name: 'Казань', value: 80000, color: '#B2C3A1' },
  { name: 'Новосибирск', value: 75000, color: '#FA9749' },
  { name: 'Регионы (ср.)', value: 60000, color: '#A53327' },
];

const statsData = [
  { label: 'Действующих нотариусов', value: '8,000+', icon: Users },
  { label: 'Нотариальных округов', value: '2,500+', icon: MapPin },
  { label: 'Ежегодных действий', value: '50 млн+', icon: FileText },
  { label: 'Уровень доверия', value: '92%', icon: ShieldCheck },
];

import universityLogo from './university-logo.svg';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen paper-texture relative">
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="fixed top-20 right-[10%] w-64 h-64 rounded-full bg-notary-sage opacity-10 blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="fixed bottom-40 left-[5%] w-96 h-96 rounded-full bg-notary-rose opacity-10 blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="leaf-pattern w-full h-full" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-notary-red text-notary-parchment text-sm font-medium mb-6 tracking-widest uppercase">
            Профессия с историей
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-notary-red leading-tight mb-8">
            Искусство <br /> <span className="text-notary-orange italic">Доверия</span>
          </h1>
          <p className="text-xl md:text-2xl text-notary-red/80 max-w-2xl mx-auto font-light leading-relaxed">
            Исследуйте мир нотариата — фундамента правовой стабильности и гаранта законности в современном обществе.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-[60vh] z-0">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-notary-red/20">Загрузка 3D...</div>}>
            <Notary3D />
          </Suspense>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
          onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8 text-notary-red" />
        </motion.div>
      </header>

      {/* 1. Intro: Кто такой нотариус? */}
      <Section id="intro" title="Кто такой нотариус?">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-notary-red font-semibold">Нотариус</strong> — это особый субъект права, уполномоченный государством совершать нотариальные действия от имени Российской Федерации.
            </p>
            <p>
              Это не просто юрист, а беспристрастный свидетель, который обеспечивает юридическую чистоту сделок, защищает права граждан и предотвращает судебные споры еще на этапе их зарождения.
            </p>
            <div className="p-6 bg-notary-sage/20 border-l-4 border-notary-sage rounded-r-xl italic">
              "Нотариус — это судья в мирное время, чья печать превращает частное соглашение в неоспоримый закон."
            </div>
          </div>
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://picsum.photos/seed/notary-law/800/800" 
                alt="Notary at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-notary-orange rounded-full flex items-center justify-center text-white shadow-xl">
              <Scale size={48} />
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Directions: Направления деятельности */}
      <Section id="directions" title="Направления деятельности" className="bg-notary-teal/5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Сделки с недвижимостью', desc: 'Купля-продажа, дарение, залог квартир и домов.', icon: MapPin },
            { title: 'Наследственное право', desc: 'Оформление завещаний, ведение наследственных дел.', icon: Award },
            { title: 'Корпоративные дела', desc: 'Удостоверение решений собраний, сделки с долями ООО.', icon: Briefcase },
            { title: 'Семейное право', desc: 'Брачные договоры, соглашения об алиментах.', icon: Users },
            { title: 'Доверенности', desc: 'Удостоверение полномочий на представление интересов.', icon: FileText },
            { title: 'Обеспечение доказательств', desc: 'Фиксация информации в интернете, осмотр сайтов.', icon: ShieldCheck },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-notary-teal/10 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-notary-teal/10 rounded-xl flex items-center justify-center text-notary-teal mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-serif text-notary-red mb-3">{item.title}</h3>
              <p className="text-notary-red/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Education: Необходимое образование */}
      <Section id="education" title="Путь к профессии">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-notary-orange/30 hidden md:block" />
          <div className="space-y-12">
            {[
              { step: '01', title: 'Высшее образование', desc: 'Диплом юриста широкого профиля в аккредитованном вузе.', icon: GraduationCap },
              { step: '02', title: 'Стажировка', desc: 'Год практики у опытного нотариуса для изучения всех нюансов.', icon: Clock },
              { step: '03', title: 'Квалификационный экзамен', desc: 'Сложнейшее испытание на знание всех отраслей права.', icon: BookOpen },
              { step: '04', title: 'Лицензия и назначение', desc: 'Получение статуса и победа в конкурсе на вакантное место.', icon: ShieldCheck },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-6xl font-serif text-notary-orange/20 mb-2">{item.step}</span>
                    <h3 className="text-2xl font-serif text-notary-red mb-2">{item.title}</h3>
                    <p className="text-notary-red/70 max-w-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-notary-orange flex items-center justify-center text-white shadow-lg">
                  <item.icon size={28} />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4 & 5. Skills & Qualities */}
      <Section id="skills" title="Компетенции и качества" className="bg-notary-rose/5">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['Навыки (Hard & Soft)', 'Личные качества'].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full transition-all font-medium ${
                activeTab === i 
                ? 'bg-notary-red text-notary-parchment shadow-lg' 
                : 'bg-white text-notary-red hover:bg-notary-red/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {activeTab === 0 ? (
              <>
                <div className="p-8 bg-white rounded-3xl shadow-sm">
                  <h4 className="text-xl font-serif text-notary-teal mb-6 flex items-center gap-2">
                    <Scale size={20} /> Профессиональные навыки
                  </h4>
                  <ul className="space-y-4">
                    {['Глубокое знание ГК, СК, ЖК РФ', 'Навыки юридического письма', 'Работа с ЕИС нотариата', 'Анализ документов на подлинность'].map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-notary-red/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-notary-teal" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-sm">
                  <h4 className="text-xl font-serif text-notary-orange mb-6 flex items-center gap-2">
                    <Users size={20} /> Гибкие навыки
                  </h4>
                  <ul className="space-y-4">
                    {['Конфликтология и медиация', 'Стрессоустойчивость', 'Деловая коммуникация', 'Тайм-менеджмент'].map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-notary-red/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-notary-orange" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Честность', color: 'bg-notary-red' },
                  { title: 'Беспристрастность', color: 'bg-notary-teal' },
                  { title: 'Аккуратность', color: 'bg-notary-orange' },
                  { title: 'Ответственность', color: 'bg-notary-rose' },
                ].map((q, i) => (
                  <div key={i} className="p-10 text-center bg-white rounded-3xl shadow-sm border-b-4 border-transparent hover:border-current transition-all" style={{ color: q.color.replace('bg-', 'var(--color-') }}>
                    <div className={`w-16 h-16 ${q.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white`}>
                      <ShieldCheck size={32} />
                    </div>
                    <span className="text-xl font-serif font-medium">{q.title}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* 6. Employment: Сферы работы */}
      <Section id="employment" title="Где работает нотариус?">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-auto">
            <img 
              src="https://picsum.photos/seed/office-classic/1200/800" 
              alt="State office" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-notary-red/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-serif text-white mb-2">Государственные конторы</h3>
              <p className="text-white/80">Работа в штате Министерства юстиции. Стабильность и строгое следование регламентам.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-auto">
            <img 
              src="https://picsum.photos/seed/office-modern/1200/800" 
              alt="Private practice" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-notary-teal/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-serif text-white mb-2">Частная практика</h3>
              <p className="text-white/80">Самозанятость в рамках квот. Собственный офис, команда и полная ответственность.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Salary: Средняя заработная плата */}
      <Section id="salary" title="Доходы в профессии" className="bg-notary-sage/10">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <p className="mb-12 text-lg text-notary-red/70 max-w-3xl">
            Доход нотариуса складывается из тарифов за совершение действий и платы за услуги правового и технического характера. В Москве и крупных городах доходы традиционно выше.
          </p>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} layout="vertical" margin={{ left: 40, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E6CCAE" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  stroke="#A53327" 
                  fontSize={14} 
                  tickLine={false} 
                  axisLine={false}
                  width={120}
                />
                <Tooltip 
                  cursor={{ fill: '#E6CCAE', opacity: 0.2 }}
                  contentStyle={{ 
                    backgroundColor: '#FFF', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
                  }}
                  formatter={(value) => [`${value.toLocaleString()} ₽`, 'Средний доход']}
                />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={30}>
                  {salaryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      {/* 8. Statistics: Статистика */}
      <Section id="stats" title="Цифры и факты">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-notary-orange/10 rounded-full flex items-center justify-center text-notary-orange mx-auto mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-serif text-notary-red mb-2">{stat.value}</div>
              <div className="text-sm text-notary-red/80 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 9. Legal Base: Нормативно-правовые акты */}
      <Section 
        id="legal" 
        title="Правовой фундамент" 
        className="text-notary-parchment" 
        bgColor="#A53327"
        dark={true}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { title: 'Основы законодательства РФ о нотариате', year: '1993', desc: 'Главный закон, определяющий статус и правила работы.' },
              { title: 'Гражданский кодекс РФ', year: 'Ч. 1-4', desc: 'Регулирует сделки, наследство и обязательства.' },
              { title: 'Семейный кодекс РФ', year: '1995', desc: 'Основа для брачных договоров и алиментных соглашений.' },
              { title: 'Приказы Минюста РФ', year: 'Регулярно', desc: 'Регламенты совершения конкретных действий.' },
            ].map((law, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group cursor-pointer"
              >
                <div className="text-notary-orange font-serif text-xl pt-1 font-bold">{law.year}</div>
                <div>
                  <h4 className="text-xl font-serif mb-2 group-hover:text-notary-orange transition-colors text-white">{law.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed font-medium">{law.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="hidden md:block relative">
            <div className="absolute inset-0 border-2 border-white/20 rounded-3xl rotate-3" />
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-2" />
            <div className="relative p-12 flex flex-col items-center justify-center text-center h-full">
              <Scale size={80} className="text-notary-orange mb-8" />
              <h3 className="text-3xl font-serif mb-4 text-white">Lex est quod notamus</h3>
              <p className="italic text-white/90 font-medium">"Закон есть то, что мы записываем"</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white/50 backdrop-blur-sm border-t border-notary-red/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center mb-4">
            <img 
              src={universityLogo} 
              alt="Логотип МГУ им. Н.П. Огарёва" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-notary-red/90 text-lg md:text-xl leading-relaxed font-medium">
              Созданный проект является студенческой работой Ерофеевой Евангелины Евгеньевны, 
              студентки 3 курса, специальности "Право и организация социального обеспечения", 311А группы
            </p>
          </div>

          <div className="flex gap-10 text-notary-orange">
            <ShieldCheck size={40} />
            <Scale size={40} />
            <Award size={40} />
          </div>
        </div>
      </footer>
    </div>
  );
}

