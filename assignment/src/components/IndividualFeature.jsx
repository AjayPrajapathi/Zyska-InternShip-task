

export const IndividualFeature=({image,heading,details})=>{



    return(<div className="w-[384px] h-[178px] flex flex-col justify-center items-center gap-5">
        <img src={image} height="18px" width="18px" />
        <h1 className="text-xl text-darkBlack">{heading}</h1>
        <p className="text-customBlack text-[16px] text-center">{details}</p>

    </div>)
}