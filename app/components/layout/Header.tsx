import Link from 'next/link';

const Header = () => {
    return (
        <div className="w-full flex-col justify-start items-start inline-flex">
            <div className="border-b border-black/30 justify-center items-center inline-flex">
                <div className="bg-white/75 backdrop-blur-[50px]" />
            </div>
            <div className="h-[54px] justify-center items-start gap-[122.54px] flex">
                <div className="text-black text-[17px] font-['SF Pro'] leading-snug w-[154px] h-[54px] flex justify-center items-center font-semibold">
                    9:41
                </div>
                <div className="w-[154px] h-[54px] justify-center items-center flex">
                    <div className="w-[19px] h-[13px]">
                        <img src="/images/CellularConnection.svg" />
                    </div>
                    <div className="w-[17px] h-[13px] ml-[7.5px]">
                        <img src="/images/Wifi.svg" />
                    </div>
                    <div className="w-[27px] h-[13px ml-[7.5px]">
                        <img src="/images/Battery.svg" />
                    </div>
                </div>
            </div>
            <div className="my-[11px] w-full flex justify-between">
                <Link href={'/'}>
                    <div className=" justify-start items-center flex">
                        <img src="/images/Chevron.svg" className="mr-[6px]"></img>
                    </div>
                </Link>
                <div className="text-center text-black text-[17px] font-['SF Pro'] font-bold">ㅅㅁㅅ닷컴</div>
                <Link href={'/cart'}>
                    <img src="/images/ShoppingBag.svg" className="w-[25px] h-[25px]"></img>
                </Link>
            </div>
        </div>
    );
};

export default Header;
