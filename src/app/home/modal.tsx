import Image from "next/image"
import { FC } from 'react'
import cofeeshop from "../../images/coffeeshop.jpg"

type ModalProps = {
  id: number;
  title: string;
  rating: string;
  price: string;
  amenities: string;
  isOpen: boolean;
  handleClose: any;
};


export const Modal: FC<ModalProps> = ({ id, title, rating, price, amenities, isOpen, handleClose }) => {
  return (
    <>
    {isOpen && (
    <div onClick={handleClose} className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto backdrop-blur-sm bg-white/10">
      <div className="w-[900px] h-[650px] bg-[#FAFBFB] rounded-[15px] shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-[70%]">
          <Image
            src={cofeeshop}
            alt='Coffee shop'
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-[15px] z-0"
          />
        </div>
        <div className="p-6">
          <h1 className="font-bold text-2xl flex justify-between">{title} <span>{rating}</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>{amenities}</span>
              <span className="text-green-500">{price}</span>
            </div>
            <span className="text-black/40">View on google maps</span>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}
