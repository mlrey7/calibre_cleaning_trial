import BookingFormServer from "@/components/BookingFormServer";
import { Suspense } from "react";
import { Loader2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-5">
      <div className="h-24 flex justify-between items-center w-full container">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="calibre logo"
            width={150}
            height={72}
            className="h-[72px]"
          />
        </Link>

        <a href="tel:+611300991368">
          <div className="flex justify-center items-center  border-2 border-primary rounded px-4 py-3">
            <div className="flex gap-1">
              <Phone className="text-primary" />
              <p className="font-bold">1300 991 368</p>
            </div>
          </div>
        </a>
      </div>
      <div className="bg-primary w-full h-32">
        <div className="container h-full">
          <div className="px-16 md:px-32 flex py-2 sm:py-6 h-full items-center">
            <h1 className="text-3xl text-center sm:text-left md:text-4xl text-primary-foreground">
              Book today <br className="hidden sm:block" />
              and get your house clean
            </h1>
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="p-5">
            <Loader2 className="animate-spin w-10 h-10 text-primary" />
          </div>
        }
      >
        <div className="container">
          <BookingFormServer />
        </div>
      </Suspense>
    </main>
  );
}
