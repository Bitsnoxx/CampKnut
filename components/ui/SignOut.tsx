import { useSession } from "next-auth/react";

export default function SignOut() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return true;
  } else {
    return false;
  }
}
