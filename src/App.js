import { IoSearchOutline } from "react-icons/io5";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="px-[7%]">
        <div className="w-1/2 h-[80vh] flex flex-col py-24 justify-around p-4">
          <h1 className="text-6xl font-bold">
            <span className="text-blue">Toshkent</span> dagi eng yaxshi
            mutaxassislar
          </h1>
          <div className="relative h-14 flex mt-6 bg-gray-200 rounded-xl justify-between w-full">
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
            <button className="py-2 px-4 text-gray-400 border rounded-xl">
              Ish topish
            </button>
          </div>
        </div>
      </main>
      <div className="px-[7%] grid grid-cols-4">

      </div>
    </>
  );
}
