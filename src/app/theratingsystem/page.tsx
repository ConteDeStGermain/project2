"use client"
import Image from "next/image"
import cortado from "../../images/cortado.jpg"
import insideShop from "../../images/insideshop.jpg"
import toast from "../../images/toast.jpg"

export default function TheRtSystem() {
  return (
    <div className="h-[80vh] w-full flex pr-12 pl-12" aria-label="The RT System Page">
    <div className="flex-1 flex items-center justify-center" aria-label="Text section">
      <div className="w-2/4">
      <h1 className="sr-only">Information about the RT System</h1>
      <p>Our coffee shop review website uses a unique, multifaceted rating system that captures the many elements that create a memorable coffee shop experience. Ratings are given on a scale from 1 to 5 for ambiance, which encompasses the overall atmosphere, music, and decor; the number of available amenities, including Wi-Fi, availability of power outlets, and outdoor seating; price, factoring in the cost of the most common items; and location, which considers accessibility, parking, and proximity to points of interest. In recognition of our appreciation for exceptional coffee craftsmanship, bonus points are awarded to establishments that make an outstanding cortado. This traditional Spanish espresso drink, when executed with precision and balance, is indicative of a higher level of expertise and care in coffee preparation, and we believe it deserves special consideration. Our comprehensive rating system ensures you get the best possible insights to guide your next caffeine fix.</p>
      </div>
    </div>
    <div className="flex-1 mt-12" aria-label="Images section">
      <Image 
        width={350}
        height={250}
        src={insideShop}
        alt="Interior view of a coffee shop"
        className="relative left-44 rounded-[15px]"
      />
      <Image 
        width={200}
        height={300}
        src={cortado}
        alt="A cup of cortado coffee"
        className="relative left-96 -top-20 shadow-lg rounded-[15px]"
      />
      <Image 
        width={225}
        height={280}
        src={toast}
        alt="A piece of toasted bread"
        className="relative left-28 -top-64 shadow-lg rounded-[15px]"
      />
    </div>
  </div>
  )
}
