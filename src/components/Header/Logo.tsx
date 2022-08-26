import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="mb-3 flex w-64 cursor-pointer items-center text-4xl font-bold tracking-tight text-gray-200">
        <div className="mr-1 font-bold text-teal-700">.</div>
        privillège
        <div className="absolute ml-8 mt-2 pt-9 text-xl">rio bonito</div>
      </div>
    </Link>
  );
}
