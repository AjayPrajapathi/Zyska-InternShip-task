import { Questions } from "./Questions"
import { faqList } from "../assets/asset"

export const FAQSection=()=>{


    return(
        <div className="flex flex-col justify-center items-center py-[96px] gap-16 ">
            <div className="flex flex-col gap-5 mx-auto justify-center items-center">
            <h1 className="text-4xl text-darkBlack">Frequently asked questions</h1>
            <p className="text-customBlack text-xl">Everything you need to know about the product and billing.</p>
            </div>


          <div className="px-8 gap-16 flex flex-col justify-center items-center">
         <Questions list={faqList}/>
                   
          </div>

        </div>
    )

}