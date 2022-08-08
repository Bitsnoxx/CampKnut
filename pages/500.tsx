import Image from "next/image";

import PageLayout from "components/layout/PageLayout";
import { errors } from "content/text";

export default function Custom500() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center">
        <div className="font-bold text-2xl pb-5">{errors.serverError}</div>
        <div className="my-2">
          <Image
            src={"/500.webp"}
            height={600}
            width={800}
            alt={"Server error"}
            priority={true}
          ></Image>
        </div>
      </div>
    </PageLayout>
  );
}
