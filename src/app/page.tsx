import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="pt-8 sm:mx-32">
      <Link href={"/book/details"} className={buttonVariants()}>
        Get a Booking Today
      </Link>
    </div>
  );
}
