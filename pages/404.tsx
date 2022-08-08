import Image from "next/image";
import PageLayout from "components/layout/PageLayout";
import { errors } from "content/text";

export default function Custom404() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center">
        <div className="font-bold text-2xl">{errors.missingPage}</div>
        <div className="my-2">
          <Image
            src={"/modCheck.webp"}
            height={90}
            width={90}
            alt={"modCheck"}
            priority={true}
          ></Image>
        </div>

        <Image
          src={"/404.webp"}
          height={538}
          width={706}
          alt={"This page couldn't be found"}
          priority={true}
        ></Image>
      </div>
    </PageLayout>
  );
}
