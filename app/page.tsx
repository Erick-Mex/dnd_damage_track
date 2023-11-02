import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PlayerForms from "./components/PlayerForms";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center sm:justify-end p-5">
        <button className="w-[90%] h-12 sm:w-40 bg-sky-400 hover:bg-sky-500 active:bg-sky-600  text-white rounded-full">
          <FontAwesomeIcon icon={faPlus} size="lg" />
          &nbsp;&nbsp;New Session
        </button>
      </div>
      <section className="p-8">
        <PlayerForms />
      </section>
    </main>
  );
}
