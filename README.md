# Welcome to trendyol_hepsiburada_comment_scrapper 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-14.15.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/npm-6.14.8-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/erdemkosk/express_boilerplate#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/erdemkosk/express_boilerplate/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/erdemkosk/express_boilerplate)](https://github.com/erdemkosk/express_boilerplate/blob/master/LICENSE)
[![Twitter: erdemkosk](https://img.shields.io/twitter/follow/erdemkosk.svg?style=social)](https://twitter.com/erdemkosk)

> Node js based express api template..

## Prerequisites

- node 14.15.0
- npm 6.14.8

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```
## Example response on iphone 11 
```sh
curl -X GET "http://192.168.1.4:4000/api/comment/?product=iphone%2011" -H "accept: application/json"
```
```sh
{
  "error": false,
  "results": {
    "hepsiburada": [
      {
        "contentType": 1,
        "createdAt": "2021-01-07T20:30:00.4289915+00:00",
        "customer": {
          "birthDate": "1990-10-15T16:20:00Z",
          "displayName": null,
          "gender": "Male",
          "isInfluencer": false,
          "name": "B******",
          "profilePictureUrl": null,
          "profilePrivacy": null,
          "surname": "P*******"
        },
        "displayCustomerName": false,
        "expertStatus": null,
        "featureStars": [
          {
            "featureId": "60_batarya",
            "star": 5
          },
          {
            "featureId": "60_ekran",
            "star": 5
          },
          {
            "featureId": "60_kamera",
            "star": 5
          },
          {
            "featureId": "60_islemci",
            "star": 5
          }
        ],
        "firm": null,
        "id": "ce092f91-2819-4848-a909-341d7ec4632c",
        "isPurchaseVerified": true,
        "keywords": [],
        "media": null,
        "mould": null,
        "order": {
          "cargoFirm": "HepsiJet",
          "merchantId": "e750130c-d0ff-469f-8767-66a63af8ea0c",
          "merchantName": "Hepsiburada",
          "merchantUrl": "hepsiburada",
          "shippingAddressCity": "Manisa",
          "shippingAddressCounty": "YUNUSEMRE"
        },
        "platform": 3,
        "product": {
          "brand": "Apple",
          "imageUrl": "https://productimages.hepsiburada.net/s/32/{size}/10356112326706.jpg",
          "name": "iPhone 11 128 GB",
          "sku": "HBV00000NSB67",
          "url": "https://www.hepsiburada.com/iphone-11-128-gb-p-HBV00000NSB67"
        },
        "reactions": {
          "clap": 882,
          "thumbsdown": 358
        },
        "reportCount": 4,
        "review": {
          "content": "Onca yıl sonra paraya kıyıp iphone aldım. Koyu xiaomicilerden birisiydim, şu kadar söyleyelim evet ara yüzü androidden sonra zor ama bu zamana kadar telefon değil araba takozu kullanmışım..."
        },
        "star": 5
      },
      {
        "contentType": 1,
        "createdAt": "2021-01-11T14:25:29.0490115+00:00",
        "customer": {
          "birthDate": "1990-11-05T00:00:00Z",
          "displayName": null,
          "gender": "Male",
          "isInfluencer": false,
          "name": "B*****",
          "profilePictureUrl": null,
          "profilePrivacy": null,
          "surname": "K********"
        },
        "displayCustomerName": false,
        "expertStatus": null,
        "featureStars": [
          {
            "featureId": "60_batarya",
            "star": 5
          },
          {
            "featureId": "60_ekran",
            "star": 5
          },
          {
            "featureId": "60_kamera",
            "star": 5
          },
          {
            "featureId": "60_islemci",
            "star": 5
          }
        ],
        "firm": null,
        "id": "bbeb8b4a-6a4d-4665-aeb1-385fca62bda8",
        "isPurchaseVerified": true,
        "keywords": [
          "batarya performansı"
        ],
        "media": null,
        "mould": null,
        "order": {
          "cargoFirm": "HepsiJet",
          "merchantId": "e750130c-d0ff-469f-8767-66a63af8ea0c",
          "merchantName": "Hepsiburada",
          "merchantUrl": "hepsiburada",
          "shippingAddressCity": "İSTANBUL",
          "shippingAddressCounty": "KARTAL"
        },
        "platform": 1,
        "product": {
          "brand": "Apple",
          "imageUrl": "https://productimages.hepsiburada.net/s/49/{size}/10986386554930.jpg",
          "name": "iPhone 11 128 GB",
          "sku": "HBV0000122JCR",
          "url": "https://www.hepsiburada.com/iphone-11-128-gb-p-HBV0000122JCR"
        },
        "reactions": {
          "clap": 332,
          "thumbsdown": 28
        },
        "reportCount": 1,
        "review": {
          "content": "Ürünü Hepsiburada üzerinden Aksesuarsız Kutu olarak satın aldım. Kimse değinmemiş ancak aksesuarsız kutuda type-c uçlu yeni nesil şarj kablosu geliyor. Üzerinde 20W adaptör satın alarak tam 1,5 saate telefonu sıfırda %100 şarj edebiliyor. Onun dısında bilgiğimiz iphone kalitesi bizi karşılıyor. En güzel tarafıda eski iphonunuzdan backup alarak yaklaşık 20 dk içerisinde tüm datalarınızı (Buna son arama geçmişi anımsatıcılar ve alarm lar dahil) yeni telefona aktardıgınızda hiç problem yasamadan kaldıgınız yerden yeni telefon üzerinden devam edebiliyorsunuz."
        },
        "star": 5
      }
    ],
    "trendyol": [
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-08-15",
        "userFullName": "Tuncay T.",
        "id": 122717133,
        "rate": 5,
        "commentTitle": "",
        "comment": "Sorunsuz kapalı kutu",
        "trusted": true,
        "lastModifiedDate": "15 Ağustos 2021",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-10-23",
        "userFullName": "A** ö**",
        "id": 131290140,
        "rate": 5,
        "commentTitle": "",
        "comment": "harika teşekkürler kolay gelsin",
        "trusted": true,
        "lastModifiedDate": "23 Ekim 2021",
        "sellerName": "Nasa İletişim",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-11-22",
        "userFullName": "E** s** Ö**",
        "id": 141865123,
        "rate": 5,
        "commentTitle": "",
        "comment": "Ben aldıktan bir gün sonra dolar ve fiyatı haliyle çok yükseldi a ma tam zamanında aldımm",
        "trusted": true,
        "lastModifiedDate": "22 Kasım 2021",
        "sellerName": "Starline",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-09-27",
        "userFullName": "Ünsal F.",
        "id": 129130110,
        "rate": 5,
        "commentTitle": "",
        "comment": "Eşim için aldım 3 haftadır kullanıyor ve gayet memnun korkarak almıştık ama eksik hiçbir şey bulamadık güvenerek alınabilecek bir ürün",
        "trusted": true,
        "lastModifiedDate": "27 Eylül 2021",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-10-01",
        "userFullName": "Cüneyt D.",
        "id": 130172723,
        "rate": 5,
        "commentTitle": "",
        "comment": "Ürün e arşiv fatura fotokopisi ile gayet iyi şişme balon paketleme ile kargolandı.Güvenli bir şekilde elime geçti.Teşekkür ederim…",
        "trusted": true,
        "lastModifiedDate": "1 Ekim 2021",
        "sellerName": "CepteTek",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-01-23",
        "userFullName": "Ö** A**",
        "id": 155575731,
        "rate": 5,
        "commentTitle": "",
        "comment": "Appel candır bende alacağım",
        "trusted": true,
        "lastModifiedDate": "23 Ocak 2022",
        "sellerName": "Mobifon",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-10-04",
        "userFullName": "Abdurrahman K.",
        "id": 130656433,
        "rate": 5,
        "commentTitle": "",
        "comment": "Gayet güzel paketleme ve zamanlama",
        "trusted": true,
        "lastModifiedDate": "4 Ekim 2021",
        "sellerName": "CepteTek",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-12-03",
        "userFullName": "Y** K**",
        "id": 144875567,
        "rate": 5,
        "commentTitle": "",
        "comment": "cihaz mükemmel çok güzel herkese tavsiye ederim.",
        "trusted": true,
        "lastModifiedDate": "3 Aralık 2021",
        "sellerName": "ALDIMGİTTİ",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-11-27",
        "userFullName": "A** S**",
        "id": 143301836,
        "rate": 5,
        "commentTitle": "",
        "comment": "Tşk ederim",
        "trusted": true,
        "lastModifiedDate": "27 Kasım 2021",
        "sellerName": "Starline",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-11-18",
        "userFullName": "F** D**",
        "id": 141210549,
        "rate": 5,
        "commentTitle": "",
        "comment": "Başarılı güzel ürün 👍🏻",
        "trusted": true,
        "lastModifiedDate": "18 Kasım 2021",
        "sellerName": "BİRTANE TELEKOM",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-11-14",
        "userFullName": "Y** Ö**",
        "id": 139822941,
        "rate": 5,
        "commentTitle": "",
        "comment": "Teşekkür ederim",
        "trusted": true,
        "lastModifiedDate": "14 Kasım 2021",
        "sellerName": "BALKAŞ İLETİŞİM",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-06-29",
        "userFullName": "Vicdan A.",
        "id": 190560410,
        "rate": 5,
        "commentTitle": "",
        "comment": "Original ürün tereddüt etmeden alabilirsiniz.kızıma mezuniyet hediyesi olarak aldım rengi çok güzel piyasadan daha ucuza başka yerden alamazsınız.Ben çok araştırdım.Herşey için teşekkür ederim",
        "trusted": true,
        "lastModifiedDate": "29 Haziran 2022",
        "sellerName": "BittiBitiyor",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-09-04",
        "userFullName": "A** c** U**",
        "id": 204340888,
        "rate": 5,
        "commentTitle": "",
        "comment": "Çok güzel çok memnunuz",
        "trusted": true,
        "lastModifiedDate": "4 Eylül 2022",
        "sellerName": "BittiBitiyor",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": true,
        "isInfluencer": false,
        "commentDateISOtype": "2021-12-04",
        "userFullName": "hatice t.",
        "id": 145121590,
        "rate": 5,
        "commentTitle": "",
        "comment": "Harika artik baska da Telefon kullaam",
        "trusted": true,
        "lastModifiedDate": "4 Aralık 2021",
        "sellerName": "ALDIMGİTTİ",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-10-24",
        "userFullName": "y** d**",
        "id": 135346486,
        "rate": 5,
        "commentTitle": "",
        "comment": "Severek kullanıyorum",
        "trusted": true,
        "lastModifiedDate": "24 Ekim 2021",
        "sellerName": "BittiBitiyor",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-09-12",
        "userFullName": "G** G**",
        "id": 126649208,
        "rate": 5,
        "commentTitle": "",
        "comment": "Ürünün rengi çok güzel, 5 yıldız hak ediyor",
        "trusted": true,
        "lastModifiedDate": "12 Eylül 2021",
        "sellerName": "MOBILEPOINT",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-11-18",
        "userFullName": "**** ****",
        "id": 141003179,
        "rate": 5,
        "commentTitle": "",
        "comment": "Çok eyiiii",
        "trusted": true,
        "lastModifiedDate": "18 Kasım 2021",
        "sellerName": "Kale Telekom",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-10-10",
        "userFullName": "K** T**",
        "id": 131895490,
        "rate": 5,
        "commentTitle": "",
        "comment": "Çok iyi Begendim",
        "trusted": true,
        "lastModifiedDate": "10 Ekim 2021",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-09-13",
        "userFullName": "Burak Ö.",
        "id": 126823868,
        "rate": 5,
        "commentTitle": "",
        "comment": "iPhone arkadaşlar fazla birşey demeye gerek yok zaten",
        "trusted": true,
        "lastModifiedDate": "13 Eylül 2021",
        "sellerName": "TekCep",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": true,
        "isInfluencer": false,
        "commentDateISOtype": "2021-02-24",
        "userFullName": "MERVE İ.",
        "id": 87260780,
        "rate": 5,
        "commentTitle": "",
        "comment": "Rengi mükemmel gerçekten keşke aksesuarlarıda tam olabilseydi ürün paketlemeside mükemmeldi teşekkürler",
        "trusted": true,
        "lastModifiedDate": "24 Şubat 2021",
        "sellerName": "TekCep",
        "reviewLikeCount": 1,
        "userLiked": false
      },
      {
        "isElite": true,
        "isInfluencer": false,
        "commentDateISOtype": "2021-04-17",
        "userFullName": "sevdiye a.",
        "id": 97490131,
        "rate": 5,
        "commentTitle": "",
        "comment": "İlk defa internetten telefon aldığım için açıkçası biraz tedirgin oldum ama ürün 24 saat içinde elime güzel paketlenmiş olarak sapa sağlam ulaşınca rahatladım,tek eksisi paketin içinde adaptörün(kulaklığı saymıyorum bile) olmaması tabi onu da ayrı Apple’nin kendi sitesinden almak zorunda kalıyorsunuz.Genel olarak şimdilik çok memnun,BittiBitiyor ve Trendyol’a çok teşekkürler😊",
        "trusted": true,
        "lastModifiedDate": "17 Nisan 2021",
        "sellerName": "BittiBitiyor",
        "reviewLikeCount": 13,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-07-08",
        "userFullName": "a** i**",
        "id": 191509158,
        "rate": 5,
        "commentTitle": "",
        "comment": "Faturam e postada neden görünmüyor",
        "trusted": true,
        "lastModifiedDate": "8 Temmuz 2022",
        "sellerName": "KimSatar",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-01-30",
        "userFullName": "S** C**",
        "id": 157135832,
        "rate": 5,
        "commentTitle": "",
        "comment": "Harika bir ürün teşekkür ederim",
        "trusted": true,
        "lastModifiedDate": "30 Ocak 2022",
        "sellerName": "Koycebine",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-01-26",
        "userFullName": "Kaan Y.",
        "id": 156179182,
        "rate": 5,
        "commentTitle": "",
        "comment": "Kaliteli herhangi bir şüpheniz olmasın gönül rahatlığıyla alabilirsiniz",
        "trusted": true,
        "lastModifiedDate": "26 Ocak 2022",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-01-21",
        "userFullName": "b** y**",
        "id": 155148900,
        "rate": 5,
        "commentTitle": "",
        "comment": "Mükemmel bir cihaz",
        "trusted": true,
        "lastModifiedDate": "21 Ocak 2022",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-11-09",
        "userFullName": "onur g.",
        "id": 138345562,
        "rate": 5,
        "commentTitle": "",
        "comment": "Tek kelime ile mükemmel 👍",
        "trusted": true,
        "lastModifiedDate": "9 Kasım 2021",
        "sellerName": "IŞIKCELL SANAL",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-03-03",
        "userFullName": "M** K** K**",
        "id": 165086980,
        "rate": 5,
        "commentTitle": "",
        "comment": "Telefonu oğluma aldım. Çok memnun. Teslimat hızlı ürün gayet güzel.",
        "trusted": true,
        "lastModifiedDate": "3 Mart 2022",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2022-07-11",
        "userFullName": "M** a**",
        "id": 192327301,
        "rate": 5,
        "commentTitle": "",
        "comment": "Urun indirimdeyken  almıştım iyi ki de almisim sağlam bir şekilde kaygılanıyor gönül rahatlığıyla alabilirsiniz",
        "trusted": true,
        "lastModifiedDate": "11 Temmuz 2022",
        "sellerName": "Ceptemax ",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-12-10",
        "userFullName": "**** ****",
        "id": 146351139,
        "rate": 5,
        "commentTitle": "",
        "comment": "hızlı kargo",
        "trusted": true,
        "lastModifiedDate": "10 Aralık 2021",
        "sellerName": "Cepekspress",
        "reviewLikeCount": 0,
        "userLiked": false
      },
      {
        "isElite": false,
        "isInfluencer": false,
        "commentDateISOtype": "2021-10-05",
        "userFullName": "Muzaffer C.",
        "id": 130946701,
        "rate": 5,
        "commentTitle": "",
        "comment": "çok iyi",
        "trusted": true,
        "lastModifiedDate": "5 Ekim 2021",
        "sellerName": "BittiBitiyor",
        "reviewLikeCount": 0,
        "userLiked": false
      }
    ]
  }
}
```


## Run tests

```sh
npm run test
```

## Author

👤 **Mustafa Erdem Köşk <erdemkosk@gmail.com>**

* Website: http://www.erdemkosk.com
* Twitter: [@erdemkosk](https://twitter.com/erdemkosk)
* Github: [@erdemkosk](https://github.com/erdemkosk)
* LinkedIn: [@erdemkosk](https://linkedin.com/in/erdemkosk)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/erdemkosk/express_boilerplate/issues). You can also take a look at the [contributing guide](https://github.com/erdemkosk/express_boilerplate/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Mustafa Erdem Köşk <erdemkosk@gmail.com>](https://github.com/erdemkosk).

This project is [MIT](https://github.com/erdemkosk/express_boilerplate/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
