"use client";
import {
  FormEvent,
  useState,
} from "react";
import PlayerCard from "./PlayerCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons/faFloppyDisk";
import { DB } from "../lib/firebase/config";
import { collection, addDoc, FieldValue, Timestamp } from "firebase/firestore";
import style from "./PlayerForms.module.css";

//Static images
import Vulkar from "/public/players/vulkar.webp";
import Mikael from "/public/players/Mikael.webp";
import Gabriel from "/public/players/Gabriel.webp";
import Karlos from "/public/players/karlos.webp";
import Marasi from "/public/players/Marasi.webp";

interface PlayerInfo {
  vulkar_damage:  string,
  mikael_damage:  string,
  gabriel_damage: string,
  karlos_damage:  string,
  marasi_damage: string 
}

export default function PlayerForms() {
  const [PlayersDamageTotal, setPlayerDamage] = useState({
    vulkar_damage:  0,
    mikael_damage:  0,
    gabriel_damage: 0,
    karlos_damage:  0,
    marasi_damage:  0
  })

  const [playerInputs, setPlayerInputs] = useState<PlayerInfo>({
    vulkar_damage:  "0",
    mikael_damage:  "0",
    gabriel_damage: "0",
    karlos_damage:  "0",
    marasi_damage:  "0",
  })

  const vulkarHandler = (action: string) => {
    const value = parseInt(playerInputs["vulkar_damage"])
    if (action == "increment") {
      setPlayerInputs({
        ...playerInputs,
        vulkar_damage: (value+1).toString()
      })
    } else {
      setPlayerInputs({
        ...playerInputs,
        vulkar_damage: (value-1).toString()
      })
    }
  }

  const mikaelHandler = (action: string) => {
    const value = parseInt(playerInputs["mikael_damage"])
    if (action == "increment") {
      setPlayerInputs({
        ...playerInputs,
        mikael_damage: (value+1).toString()
      })
    } else {
      setPlayerInputs({
        ...playerInputs,
        mikael_damage: (value-1).toString()
      })
    }

  }

  const gabrielHandler = (action: string) => {
    const value = parseInt(playerInputs["gabriel_damage"])
    if (action == "increment") {
      setPlayerInputs({
        ...playerInputs,
        gabriel_damage: (value+1).toString()
      })
    } else {
      setPlayerInputs({
        ...playerInputs,
        gabriel_damage: (value-1).toString()
      })
    }
  }

  const karlosHandler = (action: string) => {
    const value = parseInt(playerInputs["karlos_damage"])
    if (action == "increment") {
      setPlayerInputs({
        ...playerInputs,
        karlos_damage: (value+1).toString()
      })
    } else {
      setPlayerInputs({
        ...playerInputs,
        karlos_damage: (value-1).toString()
      })
    }
  }

  const marasiHandler = (action: string) => {
    const value = parseInt(playerInputs["marasi_damage"])
    if (action == "increment") {
      setPlayerInputs({
        ...playerInputs,
        marasi_damage: (value+1).toString()
      })
    } else {
      setPlayerInputs({
        ...playerInputs,
        marasi_damage: (value-1).toString()
      })
    }
  }

  const handleOnFocus = (player_name: string) => {
    if (player_name == "vulkar") {
      if (playerInputs["vulkar_damage"] == "0")
        setPlayerInputs({
          ...playerInputs,
          vulkar_damage: ""
        })
    }
    else if (player_name == "mikael") {
      if (playerInputs["mikael_damage"] == "0")
        setPlayerInputs({
          ...playerInputs,
          mikael_damage: ""
        })

    }
    else if (player_name == "gabriel") {
      if (playerInputs["gabriel_damage"] == "0")
        setPlayerInputs({
          ...playerInputs,
          gabriel_damage: ""
        })
    }
    else if (player_name == "karlos") {
      if (playerInputs["karlos_damage"] == "0")
        setPlayerInputs({
          ...playerInputs,
          karlos_damage: ""
        })
    }
    else {
      if (playerInputs["marasi_damage"] == "0")
        setPlayerInputs({
          ...playerInputs,
          marasi_damage: ""
        })
    }
  }

  const handleOnBlur = (player_name: string) => {
    if (player_name == "vulkar") {
      if (isNaN(parseInt(playerInputs["vulkar_damage"])))
        setPlayerInputs({
          ...playerInputs,
          vulkar_damage: "0"
        })
    }
    else if (player_name == "mikael") {
      if (isNaN(parseInt(playerInputs["mikael_damage"])))
        setPlayerInputs({
          ...playerInputs,
          mikael_damage: "0"
        })

    }
    else if (player_name == "gabriel") {
      if (isNaN(parseInt(playerInputs["gabriel_damage"])))
        setPlayerInputs({
          ...playerInputs,
          gabriel_damage: "0"
        })
    }
    else if (player_name == "karlos") {
      if (isNaN(parseInt(playerInputs["karlos_damage"])))
        setPlayerInputs({
          ...playerInputs,
          karlos_damage: "0"
        })
    }
    else {
      if (isNaN(parseInt(playerInputs["marasi_damage"])))
        setPlayerInputs({
          ...playerInputs,
          marasi_damage: "0"
        })
    }
  }

  const resetValues = () => {
    setPlayerInputs({
      vulkar_damage: "0",
      mikael_damage: "0",
      gabriel_damage: "0",
      karlos_damage: "0",
      marasi_damage: "0"
    })
  }

  const handleApply = () => {
    setPlayerDamage({
      vulkar_damage: PlayersDamageTotal["vulkar_damage"] +    parseInt(playerInputs["vulkar_damage"]),
      mikael_damage: PlayersDamageTotal["mikael_damage"] +    parseInt(playerInputs["mikael_damage"]),
      gabriel_damage: PlayersDamageTotal["gabriel_damage"] +  parseInt(playerInputs["gabriel_damage"]),
      karlos_damage: PlayersDamageTotal["karlos_damage"] +    parseInt(playerInputs["karlos_damage"]),
      marasi_damage: PlayersDamageTotal["marasi_damage"] +    parseInt(playerInputs["marasi_damage"])
    })

    resetValues()
  }

  //TODO: agregar la informacion de los registros totales
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(collection(DB, 'dnd'), {
      date: Timestamp.now(),
      players: {
        vulkar: PlayersDamageTotal["vulkar_damage"],
        mikael: PlayersDamageTotal["mikael_damage"],
        gabriel: PlayersDamageTotal["gabriel_damage"],
        karlos: PlayersDamageTotal["karlos_damage"],
        marasi: PlayersDamageTotal["marasi_damage"],
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-autofill gap-8">
        <div>
          <PlayerCard name="Vulkar" img_url={Vulkar} damage={PlayersDamageTotal["vulkar_damage"]} />
          <div className="flex flex-row w-full h-10 relative">
            <button type="button" className={style.button_input_left} onClick={() => vulkarHandler("decrement")}>
              <span className={style.button_text}>-</span>
            </button>
            <input
              className={style.damage_input}
              type="number"
              inputMode="numeric"
              min="0"
              value={playerInputs["vulkar_damage"]}
              onFocus={() => handleOnFocus("vulkar")}
              onBlur={() => handleOnBlur("vulkar")}
              onChange={e => setPlayerInputs({...playerInputs, vulkar_damage: e.target.value})}
            />
            <button type="button" className={style.button_input_right} onClick={() => vulkarHandler("increment")}>
              <span className={style.button_text}>+</span>
            </button>
          </div>
        </div>
        <div>
          <PlayerCard name="Mikael" img_url={Mikael} damage={PlayersDamageTotal["mikael_damage"]} />
          <div className="flex flex-row w-full h-10 relative">
            <button type="button" className={style.button_input_left} onClick={() => mikaelHandler("decrement")}>
              <span className={style.button_text}>-</span>
            </button>
            <input
              className={style.damage_input}
              type="number"
              inputMode="numeric"
              min="0"
              value={playerInputs["mikael_damage"]}
              onFocus={() => handleOnFocus("mikael")}
              onBlur={() => handleOnBlur("mikael")}
              onChange={e => setPlayerInputs({...playerInputs, mikael_damage: e.target.value})}
            />
            <button type="button" className={style.button_input_right} onClick={() => mikaelHandler("increment")}>
              <span className={style.button_text}>+</span>
            </button>
          </div>
        </div>
        <div>
          <PlayerCard name="Gabriel" img_url={Gabriel} damage={PlayersDamageTotal["gabriel_damage"]} />
          <div className="flex flex-row w-full h-10 relative">
            <button type="button" className={style.button_input_left} onClick={() => gabrielHandler("decrement")}>
              <span className={style.button_text}>-</span>
            </button>
            <input
              className={style.damage_input}
              type="number"
              inputMode="numeric"
              min="0"
              value={playerInputs["gabriel_damage"]}
              onFocus={() => handleOnFocus("gabriel")}
              onBlur={() => handleOnBlur("gabriel")}
              onChange={e => setPlayerInputs({...playerInputs, gabriel_damage: e.target.value})}
            />
            <button type="button" className={style.button_input_right} onClick={() => gabrielHandler("increment")}>
              <span className={style.button_text}>+</span>
            </button>
          </div>
        </div>
        <div>
          <PlayerCard name="Karlos" img_url={Karlos} damage={PlayersDamageTotal["karlos_damage"]} />
          <div className="flex flex-row w-full h-10 relative">
            <button type="button" className={style.button_input_left} onClick={() => karlosHandler("decrement")}>
              <span className={style.button_text}>-</span>
            </button>
            <input
              className={style.damage_input}
              type="number"
              inputMode="numeric"
              min="0"
              value={playerInputs["karlos_damage"]}
              onFocus={() => handleOnFocus("karlos")}
              onBlur={() => handleOnBlur("karlos")}
              onChange={e => setPlayerInputs({...playerInputs, karlos_damage: e.target.value})}
            />
            <button type="button" className={style.button_input_right} onClick={() => karlosHandler("increment")}>
              <span className={style.button_text}>+</span>
            </button>
          </div>
        </div>
        <div>
          <PlayerCard name="Marasi" img_url={Marasi} damage={PlayersDamageTotal["marasi_damage"]} />
          <div className="flex flex-row w-full h-10 relative">
            <button type="button" className={style.button_input_left} onClick={() => marasiHandler("decrement")}>
              <span className={style.button_text}>-</span>
            </button>
            <input
              className={style.damage_input}
              type="number"
              inputMode="numeric"
              min="0"
              value={playerInputs["marasi_damage"]}
              onFocus={() => handleOnFocus("marasi")}
              onBlur={() => handleOnBlur("marasi")}
              onChange={e => setPlayerInputs({...playerInputs, marasi_damage: e.target.value})}
            />
            <button type="button" className={style.button_input_right} onClick={() => marasiHandler("increment")}>
              <span className={style.button_text}>+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-16 mt-8">
        <button
          type="button"
          onClick={handleApply}
          className="bg-transparent hover:bg-gray-400 text-gray-400 hover:text-white outline outline-2 outline-gray-300 focus:bg-gray-500 w-80 h-12 rounded-full"
          id="apply"
        >
          Apply
        </button>
        <button
          type="submit"
          className="bg-sky-400 hover:bg-sky-500 focus:bg-sky-600 text-white w-80 h-12 rounded-full"
          id="save"
        >
          <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
          &nbsp;&nbsp;Save
        </button>
      </div>
    </form>
  );
}
