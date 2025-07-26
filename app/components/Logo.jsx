import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/lws_logo.png" alt="Lws" height={100} width={165} />
    </Link>
  );
}
