"use client"
import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    price: 'Price',
    cheap: "Cheap",
    average: "Average",
    expensive: "Expensive",
    rating: 'Rating',
    poor: 'Poor',
    good: 'Good',
    amazing: 'Amazing',
    amenities: 'Amenities',
    wifi: 'Wifi',
    pastries: 'Pastries',
    goodSeating: 'Good Seating',
    coffeeAlt: 'Coffee Alternatives',
    milkAlt: 'Milk Alternatives',
    beautifulV: 'Beautiful View',
    favorites: 'Favorites',
    showFav: 'Show Favorites',
    switchEn: "Switch to English",
    switchFr: "Switch to French",
    coffeeShop: 'Coffee Shop',
    shopDesc: 'A cozy, welcoming coffee shop with aromatic brews and delightful pastries.',
    addToFav: 'Add to favorites',
    longDesc: "Exuding a cozy ambiance with the enticing aroma of freshly ground coffee beans, this coffee shop offers a delightful retreat for coffee connoisseurs and casual drinkers alike, where each cup is brewed with passion and served with a warm smile.",
    rtSystem: "Our coffee shop review website uses a unique, multifaceted rating system that captures the many elements that create a memorable coffee shop experience. Ratings are given on a scale from 1 to 5 for ambiance, which encompasses the overall atmosphere, music, and decor; the number of available amenities, including Wi-Fi, availability of power outlets, and outdoor seating; price, factoring in the cost of the most common items; and location, which considers accessibility, parking, and proximity to points of interest. In recognition of our appreciation for exceptional coffee craftsmanship, bonus points are awarded to establishments that make an outstanding cortado. This traditional Spanish espresso drink, when executed with precision and balance, is indicative of a higher level of expertise and care in coffee preparation, and we believe it deserves special consideration. Our comprehensive rating system ensures you get the best possible insights to guide your next caffeine fix.",
  },
  fr: {
    price: 'Prix',
    cheap: "Pas cher",
    average: "Moyen",
    expensive: "Cher",
    rating: 'Classement',
    poor: 'Mauvais',
    good: 'Bon',
    amazing: 'Incroyable',
    amenities: 'Agréments',
    wifi: 'Wifi',
    pastries: 'Pâtisseries',
    goodSeating: 'Espace de Bureau',
    coffeeAlt: 'Alternatives au café',
    milkAlt: 'Alternatives au lait',
    beautifulV: 'Belle vue',
    favorites: 'Favoris',
    showFav: 'Afficher les favoris',
    switchEn: "Passer à l'Anglais",
    switchFr: "Passer au Francais",
    coffeeShop: 'Café',
    shopDesc: "Un café accueillant et douillet avec des arômes délicieux et des pâtisseries délicieuses.",
    addToFav: 'Ajouter aux Favoris',
    longDesc: "Dégageant une ambiance chaleureuse avec l'arôme séduisant de grains de café fraîchement moulus, ce café offre un refuge délicieux pour les connaisseurs de café et les buveurs occasionnels, où chaque tasse est infusée avec passion et servie avec un sourire chaleureux.",
    rtSystem: "Notre site Web d'évaluation de cafés utilise un système de notation unique et multifacette qui capture les nombreux éléments qui créent une expérience mémorable dans un café. Les notes sont données sur une échelle de 1 à 5 pour l'ambiance, qui englobe l'atmosphère générale, la musique et le décor; le nombre d'équipements disponibles, incluant le Wi-Fi, la disponibilité de prises électriques et les places assises à l'extérieur; le prix, qui prend en compte le coût des articles les plus courants; et l'emplacement, qui considère l'accessibilité, le parking et la proximité de points d'intérêt. En reconnaissance de notre appréciation pour l'exceptionnel savoir-faire du café, des points bonus sont attribués aux établissements qui font un cortado exceptionnel. Cette boisson espresso traditionnelle espagnole, lorsqu'elle est réalisée avec précision et équilibre, indique un niveau supérieur d'expertise et de soin dans la préparation du café, et nous croyons qu'elle mérite une considération spéciale. Notre système de notation complet vous assure d'obtenir les meilleures informations possibles pour guider votre prochaine envie de caféine."
  },
};

const defaultLocale = 'en';

const LocaleContext = createContext([
  translations[defaultLocale],
  (locale: string) => {},
]);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  
  const switchLanguage = (newLocale: string) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
    } else {
      throw new Error(`Locale ${newLocale} not supported.`);
    }
  };

  return (
    <LocaleContext.Provider value={[translations[locale], switchLanguage]}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
