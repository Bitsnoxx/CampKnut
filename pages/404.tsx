import Image from "next/image";
import { Center } from "@mantine/core";

export default function Custom404() {
  return (
    <>
      <Center>
        <h1>404 - Page Not Found</h1>
      </Center>
      <Center>
        <Image
          src={"/404.webp"}
          height={600}
          width={1000}
          alt={"This page couldn't be found"}
        ></Image>
      </Center>
    </>
  );
}
