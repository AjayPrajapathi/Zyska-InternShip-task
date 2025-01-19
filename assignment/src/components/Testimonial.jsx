import { assets } from "../assets/asset"

export const Testimonial=()=>{



    return(<div className="flex flex-col justify-center items-center gap-10 w-[1216px] mx-auto">
        <h1 className="flex"><img src={assets.sisyphus} height="16px" width="16px"/>Sisyphus</h1>
   <h1 className="text-center text-5xl">We’ve been using Untitled to kick start every new project and can’t imagine working without it. </h1>
<div className="flex flex-col justify-center items-center gap-4">
    <img src={assets.sisphusAvatar} height="64px" width="64px"/>
    <h1 className="font-bold text-[18px]">Candice Wu</h1>
  <p className="text-customBlack">Product Manager, Sisyphus</p>
</div>

    </div>)
}