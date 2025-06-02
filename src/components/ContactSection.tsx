import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-300 font-open-sans">
            Готовы помочь выбрать идеальный обогреватель для вашего дома
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-montserrat">
              Наши контакты
            </h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="font-semibold">+7 (495) 123-45-67</p>
                  <p className="text-gray-400 text-sm">
                    Звонки принимаем с 9:00 до 21:00
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="Mail" size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="font-semibold">info@teplo-dom.ru</p>
                  <p className="text-gray-400 text-sm">
                    Ответим в течение часа
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-orange-500 mr-3"
                />
                <div>
                  <p className="font-semibold">
                    г. Москва, ул. Тепловая, д. 15
                  </p>
                  <p className="text-gray-400 text-sm">Шоу-рум и склад</p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="Clock" size={20} className="text-orange-500 mr-3" />
                <div>
                  <p className="font-semibold">
                    Пн-Пт: 9:00-19:00, Сб: 10:00-16:00
                  </p>
                  <p className="text-gray-400 text-sm">
                    Воскресенье - выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white font-montserrat">
                Быстрая консультация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Площадь помещения и пожелания"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                />
              </div>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={handleSubmit}
              >
                <Icon name="Send" size={16} />
                Получить консультацию
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
