import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description:
        "Наши обогреватели потребляют на 30% меньше электроэнергии по сравнению с аналогами",
    },
    {
      icon: "Home",
      title: "Безопасность",
      description:
        "Все модели оснащены системами защиты от перегрева и опрокидывания",
    },
    {
      icon: "Clock",
      title: "Быстрый нагрев",
      description:
        "Комфортная температура в помещении уже через 5-10 минут после включения",
    },
    {
      icon: "Volume2",
      title: "Бесшумная работа",
      description:
        "Инфракрасные и конвекционные модели работают абсолютно бесшумно",
    },
    {
      icon: "Settings",
      title: "Простота управления",
      description:
        "Интуитивные панели управления и пульты дистанционного управления",
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description:
        "Не сжигают кислород, не пересушивают воздух, безопасны для здоровья",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Почему выбирают наши обогреватели
          </h2>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Мы предлагаем только качественные решения для обогрева с
            проверенными характеристиками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Icon
                    name={benefit.icon as any}
                    size={24}
                    className="text-orange-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 font-montserrat">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 font-open-sans leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
