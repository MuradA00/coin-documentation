const Documentation = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-black text-white/90 font-light">
      <h1 className="text-3xl font-normal text-center text-white mb-12">
        Игра &ldquo;Цена монеты&ldquo;
      </h1>
      
      <Section title="Обзор" icon="💰">
        <p className="mb-4 leading-relaxed">
          &#34;Цена монеты&#34; - это увлекательная игра, где игроки делают ставки на изменение цены виртуальной монеты. 
          Игра проходит в режиме реального времени, с автоматическими раундами каждые 10 секунд.
        </p>
      </Section>

      <Section title="Как играть" icon="🎮">
        <ol className="list-none pl-0 space-y-3">
          {[
            "Подключение: Игроки подключаются к игровому полю.",
            "Ставка: Каждый игрок делает ставку любого размера.",
            "Прогноз: Игроки выбирают направление изменения цены (UP или DOWN).",
            "Присоединение: Нажмите кнопку \"Join\" для подтверждения ставки."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-6 h-6 rounded-full border border-white/40 text-gray-400 text-center leading-5 mr-3 flex-shrink-0 font-normal">{index + 1}</span>
              <span className="leading-6">{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Механика игры" icon="⚙️">
        <ul className="list-none pl-0 space-y-3">
          {[
            "Запуск: Игра запускается автоматически каждые 10 секунд, независимо от количества игроков.",
            "Длительность: Каждый раунд длится 10 секунд (40 точек на графике).",
            "График цены:",
            "Определение победителя: Сравнивается первая и последняя (40-я) точка раунда."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full border border-white/40 mr-3 mt-2.5 flex-shrink-0"></span>
              <span className="leading-6">{item}</span>
            </li>
          ))}
        </ul>
        <ul className="list-none pl-8 mt-3 space-y-3">
          {[
            "Обновляется каждые 0.25 секунды.",
            "Новая точка: ±3% от предыдущей.",
            "Отображается даже между раундами."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full border border-white/40 mr-3 mt-3 flex-shrink-0"></span>
              <span className="leading-6">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Призовой фонд" icon="🏆">
        <ul className="list-none pl-0 space-y-3">
          {[
            "Банк: Сумма всех ставок (Σ BET)",
            "Распределение:"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full border border-white/40 mr-3 mt-2.5 flex-shrink-0"></span>
              <span className="leading-6">{item}</span>
            </li>
          ))}
        </ul>
        <div className="border border-[rgba(255,255,255,.25)] rounded-lg p-4 rounded-sm mt-3 font-mono text-sm">
          Выигрыш = (Банк / Количество победителей) * Ставка игрока
        </div>
      </Section>

      <Section title="Визуализация процесса" icon="📊">
        <pre className="border border-[rgba(255,255,255,.25)] rounded-lg p-4 rounded-sm overflow-x-auto text-sm leading-relaxed">
{`Начало
  ↓
Подключение игроков
  ↓
Размещение ставок
  ↓
Автоматический запуск игры
  ↓
Изменение цены (10 сек)
  ↓
Определение результата
  ↓
Распределение выигрыша
  ↓
Пауза (10 сек)
  ↓
(Возврат к "Автоматический запуск игры")`}
        </pre>
      </Section>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Section = ({ title, icon, children }) => (
  <div className="mb-6 border-b border-[rgba(255,255,255,.25)] pb-6">
    <h2 className="text-xl font-normal text-white mb-6 flex items-center">
      <span className="mr-3 text-2xl">{icon}</span>
      {title}
    </h2>
    {children}
  </div>
)

export default Documentation