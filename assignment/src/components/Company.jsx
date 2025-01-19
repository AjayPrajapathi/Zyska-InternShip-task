

export const Company=({image,name})=>{

return(
    <div className="w-[170px] h-[48px] flex justify-center items-center gap-1 font-bold">
        <img src={image} width="44px" height="44px"/><p className="text-darkBlack text-2xl">{name}</p>
    </div>
)



}