import "./App.css";
import rcalogo from "./assets/images/rcalogo.png";
import rca1 from "./assets/images/rca1.jpg";
import rca from "./assets/images/rca.png";
import rca2 from "./assets/images/rca2.jpg";
import rca3 from "./assets/images/rca3.jpg";
import i1 from "./assets/images/275.png";
import i2 from "./assets/images/362.png";
import i3 from "./assets/images/403.png";
import i4 from "./assets/images/477.png";
import i5 from "./assets/images/363.png";
import i6 from "./assets/images/568.png";
import i7 from "./assets/images/666.png";

function App() {
  return (
    <section className="relative">
      <nav className="flex items-center justify-center rounded-full w-[850px] h-[90px] left-[22%]  bg-green-500 top-8 relative backdrop-blur-lg z-20">
        <ul className="absolute gap-8 items-center justify-center left-10 text-white z-50 flex ">
          <li className="relative text-white z-50 text-xl text-center">
            <picture>
              <img src={i1} width={50} />
            </picture>
            <span className="text-sm font-semibold text-black/70 ">×3</span>
          </li>
          <li className="relative text-white z-50 text-xl text-center">
            <picture>
              <img src={i2} width={50} />
            </picture>
            <span className="text-sm font-semibold text-black/70 ">×9</span>
          </li>
          <li className="relative text-white z-50 text-xl text-center">
            <picture>
              <img src={i3} width={50} />
            </picture>
            <span className="text-sm font-semibold text-black/70 ">×3</span>
          </li>
        </ul>
        <ul className="absolute gap-8 items-center justify-center right-14 text-white z-50 flex ">
          <li className="relative text-white z-50 text-xl text-center">
            <picture>
              <img src={i5} width={50} className="" />
            </picture>
            <span className="text-sm font-semibold text-black/70 ">×13</span>
          </li>
          <li className="relative text-white z-50 text-xl text-center">
            <picture>
              <img src={i6} width={50} />
            </picture>
            <span className="text-sm font-semibold text-black/70 ">×2</span>
          </li>
          <li className="relative text-white z-50 text-xl text-center">
            <picture>
              <img src={i4} width={50} />
            </picture>
            <span className="text-sm font-semibold text-black/70 ">×2</span>
          </li>
        </ul>
        <picture className="absolute top-0 flex justify-center items-center w-[230px] h-[80px] bg-white rounded-b-[120px] z-10">
          <img
            src={rcalogo}
            alt="rcalogo"
            title="rca"
            width={110}
            height={110}
            className="z-50"
          />
        </picture>

        <p className="absolute -translate-x-[244px] top-0 flex justify-center items-center w-[300px] h-[80px] bg-green-500 rounded-t-[120px] z-10 "></p>
        <p className="absolute -translate-x-[100px] top-0 flex justify-center items-center w-[300px] h-[40px] bg-white z0 "></p>
        <p className="absolute translate-x-[244px] top-0 flex justify-center items-center w-[300px] h-[80px] bg-green-500 rounded-t-[120px] z-10 "></p>
        <p className="absolute translate-x-[100px] top-0 flex justify-center items-center w-[300px] h-[40px] bg-white z0 "></p>
      </nav>
      <div
        className={`!w-[90%] h-[90vh] mx-auto bg-gradient-to-t from-black  rounded-3xl relative flex items-center justify-center -mt-8 max-md:overflow-hidden`}
      >
        <picture className="absolute top-0 left-0 w-full h-full ">
          <img src={rca3} className="rounded-3xl w-full h-full" />
        </picture>
        <div className="absolute top-0 left-0 w-full h-[90vh] bg-black/80 z-10 rounded-3xl"></div>
        <div className="flex items-center justify-center flex-row-reverse">
          <picture className="z-40 relative after:-left-5 after:rounded-full after:top-5 after:absolute after:h-full after:w-0.5 after:bg-[#ffbf00]">
            <img src={rca} width={420} alt="raja" className="z-40" />
          </picture>
          <p className="text-white w-[450px] text-5xl text-center z-40 mr-10 leading-[70px] noto">
            وليضل الرجاء مثالا جديرا بالاقتداء من لدن مختلف الأندية الرياضية
            الوطنية
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
