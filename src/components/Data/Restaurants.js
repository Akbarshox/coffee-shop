import affresco from '../../assets/restaurants/affresco.jpg';
import ajwa from '../../assets/restaurants/ajwa.png';
import americanPizza from '../../assets/restaurants/americanPizza.jpg';
import angelspizza from '../../assets/restaurants/angelspizza.jpg';
import apex from '../../assets/restaurants/apex.jpg';
import bavariaPlaza from '../../assets/restaurants/bavariaPlaza.jpg';
import bbq from '../../assets/restaurants/bbq.png';
import bonjuk from '../../assets/restaurants/bonjuk.jpg';
import borshev from '../../assets/restaurants/borshev.jpg';
import caffelitto from '../../assets/restaurants/caffelitto.jpg';
import chefpizza from '../../assets/restaurants/chefpizza.jpg';
import cinammon from '../../assets/restaurants/cinammon.jpg';
import donerci from '../../assets/restaurants/donerci.jpg';
import evos from '../../assets/restaurants/evos.jpg';
import halalFood from '../../assets/restaurants/halalFood.jpg';
import jumanji from '../../assets/restaurants/jumanji.png';
import kfc from '../../assets/restaurants/kfc.jpg';
import kofteci from '../../assets/restaurants/kofteci.jpg';
import locmaco from '../../assets/restaurants/locmaco.jpg';
import mahalla from '../../assets/restaurants/mahalla.JPG';
import maxway from '../../assets/restaurants/maxway.jpg';
import moscowPizza from '../../assets/restaurants/moscowPizza.JPG';
import oshpaz from '../../assets/restaurants/oshpaz.jpg';
import osmanli from '../../assets/restaurants/osmanli.jpg';
import ozbegim from '../../assets/restaurants/ozbegim.jpg';
import pubkebab from '../../assets/restaurants/pubkebab.jpg';
import soy from '../../assets/restaurants/soy.jpg';
import sunpresso from '../../assets/restaurants/sunpresso.png';
import sushi from '../../assets/restaurants/sushi.jpg';
import uzbeksomsa from '../../assets/restaurants/uzbeksomsa.JPG';
import xachapuri from '../../assets/restaurants/xachapuri.JPG';

export const Restaurants = [
   {
      "id": 1,
      "logo": require('../../assets/restaurantLogo/halal.jpg'),
      "name": "Halal Pizza",
      "title": "Пиццерия",
      "minPrice": 0,
      "image": halalFood,
      "delivery": 8000,
      "categoryId": [
         {
            "id": 1
         }
      ],
      "description": "Истинная итальянская пицца!\nЕсли Вам нужны одноразовые приборы, просим Вас указать необходимое количество"
   },
   {
      "id": 2,
      "logo": require('../../assets/restaurantLogo/affresco.jpg'),
      "name": "Affresco",
      "title": "Европейская, Новинки",
      "minPrice": 70000,
      "image": affresco,
      "delivery": " 1 200",
      "categoryId": [
         {
            "id": 2
         }
      ],
      "description": "один из лидеров по онлайн продаж электроники  среди розничных сетей Ташкента.\nДома и на работе, в кафе и самолёте – покупайте электронику в интернет-магазине.азине.\n\nДоставка осуществляется в течение 3 дней с момента поступление заказа!"
   },
   {
      "id": 3,
      "logo": require('../../assets/restaurantLogo/oshpaz.jpg'),
      "name": "Oshpaz.uz (Rakat Osh)",
      "title": "Национальная",
      "minPrice": 50000,
      "image": oshpaz,
      "delivery": "2 600",
      "categoryId": [
         {
            "id": 3
         }
      ],
      "description": "Oshpaz - это самый настоящий узбекский плов, приготовленный лучшими руками по лучшим рецептам из лучших продуктов."
   },
   {
      "id": 4,
      "logo": require('../../assets/restaurantLogo/sunpresso.jpg'),
      "name": "Sunpresso",
      "title": "Кофейня",
      "minPrice": 70000,
      "image": sunpresso,
      "delivery": "8 800",
      "categoryId": [
         {
            "id": 4
         }
      ],
      "description": "Hand roasted coffee."
   },
   {
      "id": 5,
      "logo": require('../../assets/restaurantLogo/mahalla.jpg'),
      "name": "Mahalla",
      "title": "Национальная | Новинки",
      "minPrice": 65000,
      "image": mahalla,
      "delivery": "Бесплатно",
      "categoryId": [
         {
            "id": 3
         }
      ],
      "description": "Если Вам нужны одноразовые приборы, просим Вас указать необходимое количество"
   },
   {
      "id": 6,
      "logo": require('../../assets/restaurantLogo/angelz.jpg'),
      "name": "Angel's Pizza",
      "title": "Fast Food | Европейская | Пиццерия",
      "minPrice": 70000,
      "image": angelspizza,
      "delivery": "Бесплатно",
      "categoryId": [
         {
            "id": 2
         },
         {
            "id": 4
         },
         {
            "id": 1
         }
      ],
      "description": "Angel’s Pizza от легендарного Angel’s Food возвращается с особым рецептом и с гордым лозунгом: «Попробуй найти лучше!» Since 2001"
   },
   {
      "id": 7,
      "logo": require('../../assets/restaurantLogo/ozbegim.jpg'),
      "name": "Узбегим №1",
      "title": "Национальная",
      "minPrice": 70000,
      "image": ozbegim,
      "delivery": 2900,
      "categoryId": [
         {
            "id": 1
         },
         {
            "id": 4
         }
      ],
      "description": "Кафе с большим выбором блюд, узбекской национальной кухни!"
   },
   {
      "id": 8,
      "logo": require('../../assets/restaurantLogo/cafelitto.png'),
      "name": "Caffelito Coffee",
      "title": "Кофейня",
      "minPrice": 0,
      "image": caffelitto,
      "delivery": "8 800",
      "categoryId": [
         {
            "id": 5
         }
      ],
      "description": "Традиция японской кухни. Гармония свежих продуктов и ярких идей лучших поваров современности!"
   },
   {
      "id": 9,
      "logo":  require('../../assets/restaurantLogo/lokmaco.jpg'),
      "name": "The Lokmaco",
      "title": "Кондитерская",
      "minPrice": 70000,
      "image": locmaco,
      "delivery": "9 000",
      "categoryId": [
         {
            "id": 6
         },
         {
            "id": 4
         },
         {
            "id": 7
         },
         {
            "id": 8
         }
      ],
      "description": "Кафе с большим выбором интересных блюд и кондитерских изделий."
   },
   {
      "id": 10,
      "logo": require('../../assets/restaurantLogo/bavaria.jpg'),
      "name": "Bavaria Plaza",
      "title": "Европейская, Барбекю",
      "minPrice": 0,
      "image": bavariaPlaza,
      "delivery": "12 500",
      "categoryId": [
         {
            "id": 5
         }
      ],
      "description": ""
   },
   {
      "id": 11,
      "logo": require('../../assets/restaurantLogo/moscow.JPEG'),
      "name": "Московская Пицца",
      "title": "Европейская, Пиццерия, Новинки",
      "minPrice": 70000,
      "image": moscowPizza,
      "delivery": "Бесплатно",
      "categoryId": [
         {
            "id": 5
         },
         {
            "id": 4
         }
      ],
      "description": "Меню ресторана «Jumanji» представляет собой переплетение кулинарных традиций различных кухонь мира. Благодаря этому здесь можно каждый раз устраивать себе дни разных стран или целых регионов: Средиземноморья, Индокитая, Восточной Европы и Центральной Азии. Именно так мы представляем себе понятие «фьюжн-кухня»."
   },
   {
      "id": 12,
      "logo": require('../../assets/restaurantLogo/chaykof.png'),
      "name": "Oshpaz.uz (Rakat Osh)",
      "title": "Национальная, Coca-Cola комбо",
      "minPrice": 70000,
      "image": oshpaz,
      "delivery": "9 200",
      "categoryId": [
         {
            "id": 3
         },
         {
            "id": 9
         }
      ],
      "description": "Вкусные и сочные шашлыки."
   },
   {
      "id": 13,
      "logo": require('../../assets/restaurantLogo/donerci.jpg'),
      "name": "Donerci Baba",
      "title": "Европейская, Новинки, Coca-Cola комбо",
      "minPrice": 70000,
      "image": donerci,
      "delivery": "5000",
      "categoryId": [
         {
            "id": 3
         }
      ],
      "description": "Не указано"
   },
   {
      "id": 14,
      "logo": require('../../assets/restaurantLogo/xochu.jpg'),
      "name": "Хочу суши",
      "title": "Кофейня | Европейская | Кондитерская | Мороженое | Новинки",
      "minPrice": 70000,
      "image": sushi,
      "delivery": "6000",
      "categoryId": [
         {
            "id": 6
         },
         {
            "id": 4
         },
         {
            "id": 7
         },
         {
            "id": 8
         }
      ],
      "description": "Кафе с большим выбором интересных блюд и кондитерских изделий."
   },
   {
      "id": 15,
      "logo": require('../../assets/restaurantLogo/jumanji.png'),
      "name": "Jumanji",
      "title": "Национальная | Новинки",
      "minPrice": 70000,
      "image": jumanji,
      "delivery": "7 400",
      "categoryId": [
         {
            "id": 3
         }
      ],
      "description": "Описание отсутствует"
   },
   {
      "id": 16,
      "logo": "https://express24.uz/upload/resize_cache/iblock/671/180_180_0/6718f75a313e158edac69c534866fea1.jpg",
      "name": "ЧЕБУ Choy\n",
      "title": "Fast Food | Новинки",
      "minPrice": 50000,
      "image": "https://express24.uz/upload/resize_cache/iblock/cdd/720_330_0/cdd23bca4d48715ae1a39bb97bd3ac0a.jpg",
      "delivery": "1 9000",
      "categoryId": [
         {
            "id": 3
         }
      ],
      "description": "ЧЕБУ Choy - это быстрая и вкусная еда."
   },
   {
      "id": 17,
      "logo": "https://express24.uz/upload/resize_cache/iblock/cbd/360_400_0/cbd6bcc561614c782940fbc89dd36c23.jpg",
      "name": "Be.Kitchen\n",
      "title": "Европейская",
      "minPrice": 70000,
      "image": "https://express24.uz/upload/resize_cache/iblock/6d9/720_330_0/6d94fc49818de72f1dbaf23773077779.jpg",
      "delivery": "5000",
      "categoryId": [
         {
            "id": 4
         }
      ],
      "description": "Be.Kitchen: будь со вкусом - попробуй эмоции на вкус!\nЕсли Вам нужны одноразовые приборы, просим Вас указать необходимое количество."
   },
   {
      "id": 18,
      "logo": "https://express24.uz/upload/resize_cache/iblock/e68/180_180_0/e68acbb324473aaad0504d3519d2a4a0.jpg",
      "name": "Salvia Семейный ресторан\n",
      "title": "Европейская | Национальная",
      "minPrice": 3000,
      "image": "https://express24.uz/upload/resize_cache/iblock/681/720_330_0/68145a2e9468cdc432cfa32212b91bfc.jpg",
      "delivery": " 7 500",
      "categoryId": [
         {
            "id": 4
         },
         {
            "id": 3
         }
      ],
      "description": "Семейный ресторан, с кухней смешанных направлений."
   },
   {
      "id": 19,
      "logo": "https://express24.uz/upload/resize_cache/iblock/a4a/180_180_0/a4a2f738c056ed1a969ef1e9fa6279a3.png",
      "name": "Angel's Drive\n",
      "title": "Fast Food | Европейская",
      "minPrice": 50000,
      "image": "https://express24.uz/upload/resize_cache/iblock/c6f/720_330_0/c6fc506844a039ba43d901aace54e41a.jpg",
      "delivery": "5000",
      "categoryId": [
         {
            "id": 1
         },
         {
            "id": 4
         }
      ],
      "description": ""
   },
   {
      "id": 20,
      "logo": "https://express24.uz/upload/resize_cache/iblock/aa8/180_180_0/aa8d6e40ecd87bbba416db96129ef137.jpg",
      "name": "Дикарём - душевное место\n",
      "title": "Европейская | Барбекю",
      "minPrice": 70000,
      "image": "https://express24.uz/upload/resize_cache/iblock/693/720_330_0/693207bd9103b9057473faad5844a1cb.jpg",
      "delivery": "4 900",
      "categoryId": [
         {
            "id": 4
         },
         {
            "id": 9
         }
      ],
      "description": ""
   },
   {
      "id": 21,
      "logo": "https://express24.uz/upload/resize_cache/iblock/311/180_180_0/31117323247ef21536588cbd1d83b155.jpg",
      "name": "Belle Maman\n",
      "title": "Европейская",
      "minPrice": 70000,
      "image": "https://express24.uz/upload/resize_cache/iblock/19c/720_330_0/19ca83e5b87c19349541457fe4f0dc92.jpg",
      "delivery": "7000",
      "categoryId": [
         {
            "id": 4
         }
      ],
      "description": ""
   },
   {
      "id": 22,
      "logo": "https://express24.uz/upload/resize_cache/iblock/552/180_180_0/5527265cf46d7302dd7849ad9fd625aa.png",
      "name": "Multi Mafé\n",
      "title": "Кофейня | Европейская | Пиццерия | Кондитерская | Барбекю | Новинки",
      "minPrice": 70000,
      "image": "https://express24.uz/upload/resize_cache/iblock/a26/720_330_0/a268e535a4d04b8eb169d25c81598f12.jpg",
      "delivery": "9 500",
      "categoryId": [
         {
            "id": 6
         },
         {
            "id": 4
         },
         {
            "id": 1
         },
         {
            "id": 2
         },
         {
            "id": 9
         }
      ],
      "description": "Multi Mafé - это аппетитные закуски, свежие салаты, горячие блюда с манящим ароматом, сочные стейки и мясо на мангале, традиционная паста, различные виды пиццы, и кондитерские изделия на любой вкус."
   },
   {
      "id": 23,
      "logo": "https://express24.uz/upload/resize_cache/iblock/333/180_180_0/333514c767b964cd08f016efdaeef749.jpg",
      "name": "Spazio",
      "title": "Европейская | Пиццерия | Новинки",
      "minPrice": 70000,
      "image": "https://express24.uz/upload/resize_cache/iblock/974/720_330_0/97405bb35ead3e697790c019ee13a362.jpg",
      "delivery": "3 100",
      "categoryId": [
         {
            "id": 4
         },
         {
            "id": 1
         }
      ],
      "description": ""
   },
   {
      "id": 24,
      "logo": "https://express24.uz/upload/resize_cache/iblock/883/180_180_0/883ab632cd131fe031ad61581c5a3774.PNG",
      "name": "Broccoli",
      "title": "Европейская | Здоровье",
      "minPrice": 0,
      "image": "https://express24.uz/upload/resize_cache/iblock/299/720_330_0/2992f18184973030baa5350152181435.JPG",
      "delivery": "11 700",
      "categoryId": [
         {
            "id": 4
         },
         {
            "id": 11
         }
      ],
      "description": ""
   },
   {
      "id": 25,
      "logo": "https://express24.uz/upload/resize_cache/iblock/671/60_60_0/6718f75a313e158edac69c534866fea1.jpg",
      "name": "ЧЕБУ Choy\n",
      "title": "Fast Food | Новинки",
      "minPrice": 50000,
      "image": "https://express24.uz/upload/resize_cache/iblock/6aa/720_330_0/6aa58dc4b4c0b472999d7d016bf501e5.png",
      "delivery": "19 000",
      "categoryId": [
         {
            "id": 11
         }
      ],
      "description": "ЧЕБУ Choy - это быстрая и вкусная еда."
   },
   {
      "id": 26,
      "logo": "https://express24.uz/upload/resize_cache/iblock/697/180_180_0/697c22b2aa0664314d752ae84766fb98.png",
      "name": "Street 77",
      "title": "Пиццерия",
      "minPrice": 70000,
      "image": "https://express24.uz/upload/resize_cache/iblock/5f0/720_330_0/5f06670e64f5ef5311709b40cde84d98.jpg",
      "delivery": "5000",
      "categoryId": [
         {
            "id": 1
         }
      ],
      "description": "Истинная итальянская пицца!\nЕсли Вам нужны одноразовые приборы, просим Вас указать необходимое количество"
   }
]