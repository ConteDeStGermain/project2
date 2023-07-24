import Image from "next/image"
import { FC } from 'react'
import cofeeshop from "../../images/coffeeshop.jpg"
import { useLocale } from "../contexts/LocaleContext";

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
  const [translations] = useLocale();
  return (
    <>
    {isOpen && (
    <div  onClick={(e) => {e.stopPropagation(); handleClose();}} className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto backdrop-blur-sm bg-white/10" aria-labelledby={`modal-heading-${id}`} role="dialog" aria-modal="true">
      <div className="w-[900px] h-[650px] bg-[#FAFBFB] rounded-[15px] shadow-lg">
        <div className="relative w-full h-[70%]">
          <Image
            src={cofeeshop}
            alt={`${title} coffee shop exterior`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-[15px] z-0"
          />
        </div>
        <div className="p-6">
          <h1 id={`modal-heading-${id}`} className="font-bold text-2xl flex justify-between">{title} <span aria-label={`Rated ${rating}`}>{rating}</span></h1>
          {/*@ts-ignore*/}
          <p>{translations.longDesc}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span aria-label={`Amenities: ${amenities}`}>{amenities}</span>
              <span className="text-green-500" aria-label={`Price range: ${price}`}>{price}</span>
            </div>
            <a onClick={(e) => e.stopPropagation()} rel="noopener noreferrer"  target="_blank" href="https://www.google.com/maps/place/Little+Victories+Coffee+Roasters+-+Elgin/@45.4232453,-75.6980091,17z/data=!3m1!4b1!4m6!3m5!1s0x4cce05001e1826db:0x6610cbf50439658c!8m2!3d45.4232453!4d-75.6954342!16s%2Fg%2F11rc77yrqd?entry=ttu">
              <span className="text-black/40">View on google maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}
