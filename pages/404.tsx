import Image from "next/image";
import { errors } from "../content/text";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-2xl">{errors.missingPage}</div>
      <div className="my-2">
        <Image
          src={"/modCheck.webp"}
          height={90}
          width={90}
          alt={"modCheck"}
        ></Image>
      </div>

      <Image
        src={"/404.webp"}
        height={1077}
        width={1413}
        alt={"This page couldn't be found"}
      ></Image>
    </div>
  );
}
