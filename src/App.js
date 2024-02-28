import { IoSearchOutline } from "react-icons/io5";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { FaChevronRight } from "react-icons/fa6";
import { icon1 } from "./images";

export default function App() {
  const obj = [
    {
      id: 1,
      title: "Ariza qoldiring",
      description:
        "Batafsil tavsiflang, sizga qanday ish kerak buni bajaring tizim quyidagilarni Danladi siz mutaxassislarsiz",
    },
    {
      id: 2,
      title: "Taklifni qabul qiling",
      description:
        "Mutaxassislarning o'zlari siz bilan bog'lanadi, eng yaxshi dasturiy ta'minotni tanlang narxlar, anketalar sharhlar",
    },
    {
      id: 3,
      title: "Fikringizni qoldiring",
      description:
        "Bajarilgandan keyin ishlarni unutmang fikr qoldiring tanlangan mutaxassis",
    },
  ];

  const datas = [
    {
      id: 0,
      src: "",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="px-[7%]">
        <div className="w-1/2 h-[80vh] flex flex-col py-24 justify-around p-4">
          <h1 className="text-6xl font-bold">
            <span className="text-blue">Toshkent</span> dagi eng yaxshi
            mutaxassislar
          </h1>
          <div className="relative h-14 flex mt-6 bg-white rounded-xl justify-between w-full">
            <IoSearchOutline className="absolute left-2 top-[30%]  text-2xl" />
            <input
              type="text"
              className="bg-transparent border-none w-[65%] outline-none indent-8"
              placeholder="Mutaxasislarni qidirish"
            />
            <Button>Arizani Qoldirish</Button>
          </div>
          <div className="mt-4 flex gap-4 ">
            <button className="py-2 px-3 text-white font-bold bg-blue rounded-xl">
              Mutaxassis Topish
            </button>
            <button className="py-2 px-4 text-gray-500 border-gray-500 border-2 rounded-xl">
              Ish topish
            </button>
          </div>
        </div>
      </main>
      <div className="px-[7%]  grid grid-cols-4 gap-6 ">
        <div className="px-4 py-6 ">
          <h2 className="font-bold text-3xl">
            Toshkentda eyesberg.uz da qanday mutaxassis topsa boladi?
          </h2>
          <p className="text-gray py-4">
            5 daqiqada eng yaxshi mutaxassisni toping!
          </p>
          <a href="#" className="flex text-gray items-center gap-4 ">
            <button className="w-12 h-12 rounded-full border-2 border-gray-400 flex justify-center items-center">
              <FaChevronRight />
            </button>
            <p>Promo videoni tomosha qiling</p>
          </a>
        </div>
        {obj.map((item) => (
          <div className="bg-white px-6 py-6" key={item.id}>
            <span className="text-blue font-bold my-4 block text-2xl">
              {item.id}
            </span>
            <h2 className="font-bold text-3xl">{item.title}</h2>
            <p className="mt-6 text-gray">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="px-[7%]">
        <h2 className="text-3xl font-bold">
          Toshkent da toifalar bo'yicha xizmatlar
        </h2>
        <div className="grid grid-cols-3"></div>
      </div>
      <div></div>
    </>
  );
}
