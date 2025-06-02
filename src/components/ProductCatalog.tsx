import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ProductCatalog = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number, productName: string) => {
    setCartItems((prev) => [...prev, productId]);
    alert(`${productName} добавлен в корзину!`);
  };

  const products = [
    {
      id: 1,
      name: "Инфракрасный обогреватель ИК-1500",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      price: "12 990",
      oldPrice: "15 990",
      power: "1500 Вт",
      area: "до 20 м²",
      features: ["Бесшумный", "Экономичный", "IP54"],
      isHit: true,
    },
    {
      id: 2,
      name: "Конвектор электрический КЭ-2000",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      price: "8 990",
      power: "2000 Вт",
      area: "до 25 м²",
      features: ["Термостат", "Защита от перегрева", "Настенный"],
      isHit: false,
    },
    {
      id: 3,
      name: "Масляный радиатор МР-2500",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "6 990",
      power: "2500 Вт",
      area: "до 30 м²",
      features: ["11 секций", "Колеса", "Таймер"],
      isHit: false,
    },
    {
      id: 4,
      name: "Тепловентилятор ТВ-3000",
      image:
        "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=300&fit=crop",
      price: "4 990",
      power: "3000 Вт",
      area: "до 35 м²",
      features: ["Быстрый нагрев", "Поворотный", "Пульт ДУ"],
      isHit: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Каталог обогревателей
          </h2>
          <p className="text-lg text-gray-600 font-open-sans">
            Выберите подходящий обогреватель для вашего помещения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              {product.isHit && (
                <Badge className="absolute top-4 left-4 z-10 bg-red-500">
                  ХИТ
                </Badge>
              )}

              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>

              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 font-montserrat">
                  {product.name}
                </CardTitle>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Мощность:</span>
                    <span className="font-semibold">{product.power}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Площадь:</span>
                    <span className="font-semibold">{product.area}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">
                      {product.price} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {product.oldPrice} ₽
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => addToCart(product.id, product.name)}
                >
                  <Icon name="ShoppingCart" size={16} />В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
