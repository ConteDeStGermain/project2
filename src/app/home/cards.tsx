// @ts-nocheck
"use client"
import Image from "next/image"
import cofeeshop from "../../images/coffeeshop.jpg"
import { Modal } from "./modal"
import { useState, useContext } from "react"
import { CheckboxContext } from "../contexts/CheckboxContext";
import { useLocale } from "../contexts/LocaleContext"


const displayEmojis = (type: string, value: string | string[]): string => {
  const mapping = {
    price: {
      cheap: '$',
      average: '$$',
      expensive: '$$$',
    },
    rating: {
      poor: '⭐️',
      good: '⭐️⭐️',
      amazing: '⭐️⭐️⭐️',
    },
    amenities: {
      wifi: '🛰️',
      pastries: '🍪',
      goodseating: '💼',
      coffeealternatives: '🫖',
      milkalternatives: '🐮',
      beautifulview: '⛰️',
    },
  };

  if (Array.isArray(value)) {
    value = value.join(' ');
  }
  return value.split(' ').map(v => mapping[type][v] || '').join(' ');
}


export default function Cards() {
  const context = useContext(CheckboxContext);
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<any>([]);
  const [translations] = useLocale();

  if (!context) {
    throw new Error("Filters must be used within a CheckboxProvider");
  }
  const { checkboxState, handleInputChange } = context;

  const coffeeShops = [
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: translations.coffeeShop,
      imageUrl: cofeeshop,
      description: translations.shopDesc,
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
  ]

  const handleClose = () => {
    console.log('a')
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const addToFavorites = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    // TODO: Create a type for the coffee shops 
    setFavorites((prevFavorites) => [...prevFavorites, index]);
  };

  const filteredShops = coffeeShops.filter((shop) => {
    const priceChecked = checkboxState[shop.price];
    const ratingChecked = checkboxState[shop.rating];
    const amenitiesChecked = shop.amenities.some(amenity => checkboxState[amenity]);

    return priceChecked || ratingChecked || amenitiesChecked;
  });

  let shopsToDisplay;

  if (checkboxState.favorite) {
    shopsToDisplay = coffeeShops.filter((shop, index) => favorites.includes(index));
  } else {
    shopsToDisplay = Object.values(checkboxState).some(value => value) ? filteredShops : coffeeShops;
  }
  return (
    <div className="pl-10 flex flex-wrap justify-around">
      {shopsToDisplay.map((shop, index) => (
        <div key={index} className="w-[325px] h-fit rounded-[15px] border-2 transition duration-500 ease-in-out hover:shadow-lg mb-6" aria-label={`Card for ${shop.name} ${index}. Click to see more details`} onClick={handleOpen}>
          <div className="relative w-full h-60">
            <Image
              src={shop.imageUrl}
              alt={`${shop.name} coffee shop exterior`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-[15px] z-0"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold flex justify-between">{shop.name + ' ' + index} <span aria-label={`Rated ${shop.rating}`}>{displayEmojis('rating', shop.rating)}</span></h2>
            <p className="leading-tight">{shop.description}</p>
            <div className="flex justify-between items-center">
              <p>
                <span aria-label={`Amenities: ${shop.amenities.join(', ')}`}>{displayEmojis('amenities', shop.amenities)}</span>
                <span className="text-green-500" aria-label={`Price range: ${shop.price}`}> {displayEmojis('price', shop.price)}</span>
              </p>
              <button onClick={(e) => { e.stopPropagation(); addToFavorites(e, index); }} aria-label={`Add ${shop.name} to favorites`}>Add to favorites</button>
            </div>
          </div>
          <Modal key={100 + index} id={index} title={shop.name} rating={displayEmojis('rating', shop.rating)} price={displayEmojis('price', shop.price)} amenities={displayEmojis('amenities', shop.amenities)} isOpen={isOpen} handleClose={handleClose} />
        </div>
      ))}
    </div>
  )
}
