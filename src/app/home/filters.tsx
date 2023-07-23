import { useContext } from 'react';
import { CheckboxContext } from "../CheckboxContext";

export default function Filters() {
  const context = useContext(CheckboxContext);

  if (!context) {
    throw new Error("Filters must be used within a CheckboxProvider");
  }

  const { checkboxState, handleInputChange } = context;

  return (
    <div className='sticky top-6 flex-none h-fit w-fit border-2 border-[#301B12]/40 rounded-[25px] space-y-2 p-6'>
      <div className='text-lg'>
        <h1 className='font-bold text-2xl'>Price</h1>
        <div role="group" aria-labelledby="price">
          <div>
            <input type="checkbox" id="cheap" name="price" value="cheap" checked={checkboxState.cheap} onChange={handleInputChange} className="h-5 w-5 mr-2" aria-label="Cheap Price" />
            <label htmlFor="cheap">Cheap <span className='text-green-500'>$</span></label>
          </div>
          <div>
            <input type="checkbox" id="average" name="price" value="average" className="h-5 w-5 mr-2" checked={checkboxState.average} onChange={handleInputChange} aria-label="Average Price" />
            <label htmlFor="average">Average <span className='text-green-500'>$$</span></label>
          </div>
          <div>
            <input type="checkbox" id="expensive" name="price" value="expensive" className="h-5 w-5 mr-2" checked={checkboxState.expensive} onChange={handleInputChange} aria-label="Expensive Price" />
            <label htmlFor="expensive">Expensive <span className='text-green-500'>$$$</span></label>
          </div>
        </div>
      </div>
      <div className='text-lg'>
        <h1 className='font-bold text-2xl'>Rating</h1>
        <div role="group" aria-labelledby="rating">
          <div>
            <input type="checkbox" id="poor" name="rating" value="poor" className="h-5 w-5 mr-2" checked={checkboxState.poor} onChange={handleInputChange} aria-label="Poor Rating" />
            <label htmlFor="poor">Poor ⭐️</label>
          </div>
          <div>
            <input type="checkbox" id="good" name="rating" value="good" className="h-5 w-5 mr-2" checked={checkboxState.good} onChange={handleInputChange} aria-label="Good Rating" />
            <label htmlFor="good">Good ⭐️⭐️</label>
          </div>
          <div>
            <input type="checkbox" id="amazing" name="rating" value="amazing" className="h-5 w-5 mr-2" checked={checkboxState.amazing} onChange={handleInputChange} aria-label="Amazing Rating" />
            <label htmlFor="amazing">Amazing ⭐️⭐️⭐️</label>
          </div>
        </div>
      </div>
      <div className='text-lg'>
        <h1 className='font-bold text-2xl'>Amenities</h1>
        <div role="group" aria-labelledby="amenities">
          <div>
            <input type="checkbox" id="wifi" name="amenities" value="wifi" className="h-5 w-5 mr-2" checked={checkboxState.wifi} onChange={handleInputChange} aria-label="Wifi" />
            <label htmlFor="wifi">Wifi 🛰️</label>
          </div>
          <div>
            <input type="checkbox" id="pastries" name="amenities" value="pastries" className="h-5 w-5 mr-2" checked={checkboxState.pastries} onChange={handleInputChange} aria-label="Pastries" />
            <label htmlFor="pastries">Pastries 🍪</label>
          </div>
          <div>
            <input type="checkbox" id="goodseating" name="amenities" value="goodseating" className="h-5 w-5 mr-2" checked={checkboxState.goodseating} onChange={handleInputChange} aria-label="Good Seating" />
            <label htmlFor="goodseating">Good Seating 🪑</label>
          </div>
          <div>
            <input type="checkbox" id="coffeealternatives" name="amenities" value="coffeealternatives" className="h-5 w-5 mr-2" checked={checkboxState.coffeealternatives} onChange={handleInputChange} aria-label="Coffee Alternatives" />
            <label htmlFor="coffeealternatives">Coffee Alternatives 🫖</label>
          </div>
          <div>
            <input type="checkbox" id="milkalternatives" name="amenities" value="milkalternatives" className="h-5 w-5 mr-2" checked={checkboxState.milkalternatives} onChange={handleInputChange} aria-label="Milk Alternatives" />
            <label htmlFor="milkalternatives">Milk Alternatives 🐮</label>
          </div>
          <div>
            <input type="checkbox" id="beautifulview" name="amenities" value="beautifulview" className="h-5 w-5 mr-2" checked={checkboxState.beautifulview} onChange={handleInputChange} aria-label="Beautiful View" />
            <label htmlFor="beautifulview">Beautiful View ⛰️</label>
          </div>
        </div>
      </div>
      <div className='text-lg'>
        <h1 className='font-bold text-2xl'>Favorites</h1>
        <div role="group" aria-labelledby="favorites">
          <div>
            <input type="checkbox" id="favorite" name="favorite" value="favorites" className="h-5 w-5 mr-2" checked={checkboxState.favorite} onChange={handleInputChange} aria-label="Show Favorites" />
            <label htmlFor="favorite">Show Favorites ❤️</label>
          </div>
        </div>
      </div>
    </div>
  )
}
