import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Тепло и комфорт
            <span className="text-orange-500"> в каждый дом</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-open-sans">
            Профессиональные обогреватели для дома и офиса. Энергоэффективные
            решения с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
            >
              <Icon name="Flame" size={20} />
              Посмотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4"
            >
              <Icon name="Phone" size={20} />
              Получить консультацию
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Icon name="Shield" size={32} className="text-orange-500 mb-2" />
              <span className="font-semibold text-gray-800">
                Гарантия 3 года
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Truck" size={32} className="text-orange-500 mb-2" />
              <span className="font-semibold text-gray-800">
                Бесплатная доставка
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Wrench" size={32} className="text-orange-500 mb-2" />
              <span className="font-semibold text-gray-800">
                Установка и сервис
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
