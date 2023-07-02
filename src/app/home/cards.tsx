"use client"
import Image from "next/image"
import cofeeshop from "../../images/coffeeshop.jpg"
import { Modal } from "./modal"
import { useState, useContext } from "react"
import { CheckboxContext } from "../CheckboxContext";


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
  // @ts-ignore
  return value.split(' ').map(v => mapping[type][v] || '').join(' ');
}


export default function Cards() {
  const context = useContext(CheckboxContext);
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<any>([]);

  if (!context) {
    throw new Error("Filters must be used within a CheckboxProvider");
  }
  const { checkboxState, handleInputChange } = context;


  const coffeeShops = [
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
    {
      name: "Coffee Shop ",
      imageUrl: cofeeshop,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      rating: "good",
      price: 'average',
      amenities: ['wifi', 'goodseating', 'milkalternatives', 'pastries']
    },
  ]

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const addToFavorites = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    // TODO: Create a type for the coffee shops
    // @ts-ignore 
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
    <div className="pl-10  flex flex-wrap justify-around">
      {shopsToDisplay.map((shop, index) => (
        <>
        <div key={index}>
          <div onClick={handleOpen} className="w-[325px] h-fit rounded-[15px] border-2 transition duration-500 ease-in-out hover:shadow-lg mb-6">
            <div className="relative w-full h-60">
              <Image
                src={shop.imageUrl}
                alt={shop.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-[15px] z-0"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold flex justify-between">{shop.name + ' ' + index} <span>{displayEmojis('rating', shop.rating)}</span></h2>
              <p className="leading-tight">{shop.description}</p>
              <div className="flex justify-between items-center">
                <p>{displayEmojis('amenities', shop.amenities)}
                  <span className="text-green-500"> {displayEmojis('price', shop.price)}</span>
                </p>
                <button onClick={(e) => addToFavorites(e, index)}>Add to favorites</button>
              </div>
            </div>
          </div>
          <Modal key={100 + index} id={index} title={shop.name} rating={displayEmojis('rating', shop.rating)} price={displayEmojis('price', shop.price)} amenities={displayEmojis('amenities', shop.amenities)} isOpen={isOpen} handleClose={handleClose} />
          </div>
        </>
      ))
      }

    </div>
  )
}
