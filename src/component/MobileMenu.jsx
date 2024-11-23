import { productlist } from '@/data';
import React, { useState } from 'react'
import { FaFire } from "react-icons/fa6";
import { MdSportsCricket } from "react-icons/md";
import { GiCardKingDiamonds } from "react-icons/gi";
import { PiNumberSquareSevenBold } from "react-icons/pi";
import { GiDominoTiles } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { PiFishSimpleBold } from "react-icons/pi";
import { MdOutlineCasino } from "react-icons/md";
import { FaPlane } from "react-icons/fa";


const MobileMenu = () => {
    const [active, setactive] = useState("all");
    const [filterpro, setfilterpro] = useState(productlist);

    const [activeItem, setActiveItem] = useState('হট গেমস');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const filterProduct = (items) => {
        setactive(items);
        if (items === "all") {
            setfilterpro(productlist);
        } else {
            const filterItem = productlist.filter((item) => item.category === items);
            setfilterpro(filterItem);
        }

    };
    console.log(active);
    return (
        <div className='flex-col column-gap-4 '>
            <div className=' shadow flex items-start justify-start w-auto  h-auto overflow-auto  border-b-2'>
                <button className={`font-bold min-w-[78px] h-[80px] border-l-2 ${activeItem === "হট গেমস" ? "active" : " "}`}
                    onClick={() => filterProduct("হট গেমস")} >
                    <div className='flex flex-col items-center justify-center gap-2 ' onClick={() => { handleItemClick('হট গেমস') }}>
                        <h3 className='text-orange-500 text-3xl font-customFont'><FaFire /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>হট গেমস</span>
                    </div>
                </button>
                <button className={`font-bold  min-w-[80px] h-[80px] border-l-2 ${activeItem === "ক্রিকেট" ? "active" : " "} `}
                    onClick={() => filterProduct("ক্রিকেট")} >
                    <div className='flex flex-col items-center justify-center gap-2' onClick={() => { handleItemClick('ক্রিকেট') }} >
                        <h3 className='text-orange-500 text-3xl font-customFont'><MdSportsCricket /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>ক্রিকেট</span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2 ${activeItem === "ক্যাসিনো" ? "active" : " "
                        } `}
                    onClick={() => filterProduct("ক্যাসিনো")}>
                    <div className='flex flex-col items-center justify-center gap-2 '
                        onClick={() => { handleItemClick('ক্যাসিনো') }} >
                        <h3 className='text-orange-500 text-3xl font-customFont'><GiCardKingDiamonds /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>ক্যাসিনো</span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2 ${activeItem === "স্লট" ? "active" : " "
                        }  `}
                    onClick={() => filterProduct('স্লট')}> {""}
                    <div className='flex flex-col items-center justify-center gap-2 '
                        onClick={() => { handleItemClick('স্লট') }}
                    >
                        <h3 className='text-orange-500 text-3xl font-customFont'><PiNumberSquareSevenBold /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>স্লট</span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2  ${activeItem === "টেবিলখেলা" ? "active" : " "
                        } `}
                    onClick={() => filterProduct('টেবিলখেলা')}> {""}
                    <div className='flex flex-col items-center justify-center gap-2'
                        onClick={() => { handleItemClick('টেবিলখেলা') }}>
                        <h3 className='text-orange-500 text-3xl font-customFont'><GiDominoTiles /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>টেবিল খেলা </span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2  ${activeItem === "এসবি" ? "active" : " "
                        } `}
                    onClick={() => filterProduct('এসবি')}> {""}
                    <div className='flex flex-col items-center justify-center gap-2'
                        onClick={() => { handleItemClick('এসবি') }}>
                        <h3 className='text-orange-500 text-3xl font-customFont'><IoFootballOutline /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>এসবি</span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2  ${activeItem === "মাছ" ? "active" : " "
                        } `}
                    onClick={() => filterProduct('মাছ')}> {""}
                    <div className='flex flex-col items-center justify-center gap-2'
                        onClick={() => { handleItemClick('মাছ') }}>
                        <h3 className='text-orange-500 text-3xl font-customFont'><PiFishSimpleBold /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>মাছ ধরা</span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2 ${activeItem === "লটারি" ? "active" : " "
                        }  `}
                    onClick={() => filterProduct('লটারি')}> {""}
                    <div className='flex flex-col items-center justify-center gap-2 '
                        onClick={() => { handleItemClick('লটারি') }}>
                        <h3 className='text-orange-500 text-3xl font-customFont'><MdOutlineCasino /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>লটারি</span>
                    </div>
                </button>
                <button
                    className={`font-bold min-w-[80px] h-[80px] border-l-2 ${activeItem === "ক্র্যাশ" ? "active" : " "
                        }  `}
                    onClick={() => filterProduct('ক্র্যাশ')}> {""}
                    <div className='flex flex-col items-center justify-center gap-2'
                        onClick={() => { handleItemClick('ক্র্যাশ') }}>
                        <h3 className='text-orange-500 text-3xl font-customFont'><FaPlane /></h3>
                        <span className='text-[12px] text-orange-500 font-customFont'>ক্র্যাশ</span>
                    </div>
                </button>
            </div>

            <div className=" w-full flex  flex-wrap items-center justify-center gap-3 mt-3">
                {filterpro.length > 0
                    ? filterpro.map((item) => (
                        <div className=" w-[150px] h-[150px]   bg-slate-800 rounded-md flex flex-col items-center justify-center gap-4 ">
                            <img
                                className=" w-full  h-full object-center rounded-sm"
                                src={item.image}
                                alt=""
                            />
                        </div>

                    ))
                    : " "}
            </div>

        </div>
    )
}

export default MobileMenu
