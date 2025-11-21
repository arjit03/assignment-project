import React from "react";

export default function Best() {
    return (
        <section className="text-white bg-[#1C2418] flex flex-col justify-center items-center">
            <p
                className="text-white font-inter font-semibold text-[55px] mt-30 mb-20
          [text-shadow:0px_1.99px_1.59px_rgba(0,0,0,0.0863),
           0px_4.53px_3.62px_rgba(0,0,0,0.1254),
           0px_7.88px_6.31px_rgba(0,0,0,0.1545),
           0px_12.52px_10.02px_rgba(0,0,0,0.18),
           0px_19.32px_15.46px_rgba(0,0,0,0.2055),
           0px_30.15px_24.12px_rgba(0,0,0,0.2346),
           0px_50.05px_40.04px_rgba(0,0,0,0.2737),
           0px_100px_80px_rgba(0,0,0,0.36)]
           max-[480px]:text-[40px]"
            >
                Our Best o2
            </p>

            {/* Card */}
            <div
                className="
          min-w-[300px] max-w-[1600px] w-[90%] mx-auto
          border border-white bg-[#262E22] rounded-[92px]
          flex gap-5 mb-20 h-[755px]
          max-[1085px]:flex-col max-[1085px]:h-auto max-[1085px]:py-8 max-[1085px]:px-6
        "
            >
                {/* Image wrapper */}
                <div className="flex-1 flex items-center justify-center max-[1085px]:w-full">
                    <img
                        src="plant7.png"
                        alt=""
                        className="
                        max-[480px]:h-[300px] max-[480px]:w-[300px]
              w-full max-w-[877px] h-[877px] object-contain mt-[-120px] ml-[-80px]
              [box-shadow:0px_-2.71px_2.21px_0px_rgba(0,0,0,0.0478),
               0px_-6.52px_5.32px_0px_rgba(0,0,0,0.0687),
               0px_-12.27px_10.02px_0px_rgba(0,0,0,0.085),
               0px_-21.89px_17.87px_0px_rgba(0,0,0,0.1013),
               0px_-40.94px_33.42px_0px_rgba(0,0,0,0.1222),
               0px_-98px_80px_0px_rgba(0,0,0,0.17)]
              max-[1466px]:w-[600px] max-[1466px]:h-[600px] max-[1466px]:mt-0 max-[1466px]:ml-0
              max-[1175px]:w-[400px] max-[1175px]:h-[400px]
              max-[1085px]:relative max-[1085px]:mt-0 max-[1085px]:ml-0 max-[1085px]:max-w-[420px] max-[1085px]:h-auto max-[1085px]:mx-auto
            max-[1085px]:ml-70 max-[1085px]:mr-70
              "
                    />
                </div>

                {/* Content */}
                <article className="flex-1 flex flex-col gap-6 justify-center pr-10 max-[1085px]:pr-0 max-[1085px]:items-center max-[1085px]:text-center">
                    <p
                        className="
              font-inter font-semibold text-[38px] text-white opacity-75 leading-12
              max-[1350px]:text-[30px] max-[1050px]:text-[25px]
              max-[1085px]:text-[30px] max-[1085px]:px-2
            "
                    >
                        We Have Small And Best O2 Plants Collection’s
                    </p>

                    <p className="font-inter font-semibold text-[28px] max-[1350px]:text-[20px] text-white leading-8 max-w-[720px] w-full opacity-75 max-[1050px]:text-[18px] max-[1085px]:max-w-[600px]">
                        Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                    </p>

                    <p className="font-inter font-semibold text-[28px] max-[1350px]:text-[20px] text-white leading-8 max-w-[720px] w-full opacity-75 max-[1050px]:text-[18px] max-[1085px]:max-w-[600px]">
                        Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                    </p>

                    <div className="w-full flex items-center justify-between mt-[-6px] max-[1085px]:flex-col max-[1085px]:gap-4 max-[1085px]:items-center">
                        <button className="border-2 border-white px-14 py-3 font-inter text-[28px] rounded-[12px] cursor-pointer max-[1085px]:px-10">
                            <span className="text-white font-normal text-[28px] opacity-75">Explore</span>
                        </button>

                        <div className="flex gap-10 items-center mr-20 max-[1085px]:mr-0 max-[1085px]:order-3">
                            <img src="right.png" alt="" className="h-[24px] w-[24px] rotate-180 opacity-35" />
                            <span className="font-bold font-inter text-white text-[20px] opacity-75">
                                01/<span className="font-bold font-inter text-white text-[15px] opacity-75">04</span>
                            </span>
                            <img src="right.png" alt="" className="cursor-pointer h-[24px] w-[24px] opacity-75" />
                        </div>
                    </div>
                </article>
            </div>

            <div className="mt-12 mb-12 flex items-center justify-center gap-3">
                <span className="w-[34px] h-[11px] bg-white rounded-full opacity-75"></span>
                <span className="w-[11px] h-[11px] bg-white rounded-full opacity-75"></span>
                <span className="w-[11px] h-[11px] bg-white rounded-full opacity-75"></span>
            </div>
        </section>
    );
}
