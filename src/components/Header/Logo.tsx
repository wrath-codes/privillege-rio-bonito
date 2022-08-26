import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="text-4xl font-bold tracking-tight w-64 flex cursor-pointer mb-3 text-gray-200 items-center">
        <div className="text-teal-700 font-bold mr-1">.</div>
        privillège
        <div className="text-xl pt-9 ml-8 mt-2 absolute">rio bonito</div>
      </div>
    </Link>
  );
}
