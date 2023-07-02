import Image from "next/image"
import coding from "../../images/coding.jpg"
import travelling from "../../images/travelling.jpg"

export default function TheRtSystem() {
  return (
    <div className="h-[80vh] w-full flex pr-12 pl-12">
    <div className="flex-1 mt-12">
      <Image 
        width={260}
        height={400}
        src={travelling}
        alt="A coffee shop"
        className="relative left-44 rounded-[15px]"
      />
      <Image 
        width={230}
        height={350}
        src={coding}
        alt="A cortado coffee"
        className="relative left-80 -top-48 shadow-lg rounded-[15px]"
      />
    </div>
    <div className="flex-1 flex items-center justify-center">
      <p className="w-2/4">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </div>
  </div>
  
  )
}