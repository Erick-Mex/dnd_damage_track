import Image, { StaticImageData } from "next/image";

interface playerInfo {
  name: string;
  img_url: StaticImageData;
  damage: number
}

export default function PlayerCard({ name, img_url, damage }: playerInfo) {
  return (
    <>
      <Image 
        className="rounded-full w-full h-auto" 
        src={img_url}
        alt={name}
      />
      <p className="text-center p-2 font-bold md:text-lg lg:text-xl">{name}</p>
      <p className="text-center text-sm text-gray-600">Total Damage: {damage}</p>
    </>
  );
}
