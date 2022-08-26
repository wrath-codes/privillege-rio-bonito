/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Início", href: "/", current: true },
  { name: "Sobre", href: "/about", current: false },
  { name: "Plantas", href: "/plants", current: false },
  { name: "Contato", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const router = useRouter();
  const isActive = router.asPath;
  return (
    <Disclosure as="nav" className="bg-slate-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-end justify-end sm:items-stretch sm:justify-end">
                <div className="flex-shrink-0 flex items-end">
                  <Link href="/" className="block lg:hidden h-8 w-auto">
                    <div className="text-3xl font-bold tracking-tight w-64 flex cursor-pointer mb-3 text-slate-200 items-center">
                      <div className="text-teal-700 font-bold mr-1">.</div>
                      privillège
                      <div className="text-lg pt-9 ml-8 mt-2 absolute">
                        rio bonito
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link key={item.name} href={item.href} passHref>
                        <a
                          className={classNames(
                            isActive === item.href
                              ? "bg-slate-900 text-white"
                              : "text-slate-300 hover:bg-slate-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    isActive === item.href
                      ? "bg-slate-900 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
