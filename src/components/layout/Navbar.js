import React, { useState, useEffect } from "react";
import Image from "next/image"
import seroLogo from "/public/assets/logo/serooblue.png";
import Link from "next/link";
import { Menu, X } from "react-feather";
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { navServices } from "../data/data";




function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(prev=>!prev);
    }

    useEffect(() => {
        setNav(false);
    }, [])

  return (
    <div className="bg-yellow-400 shadow-md relative">
        <nav className="px-4 lg:px-24 py-1 container md:mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/"><Image src={seroLogo} width={100} height={100} alt="sero logo desktop" /></Link>
                </div>

                <div className="hidden lg:flex gap-x-10 text-seroBlue font-medium text-base">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Popover className="relative">
                        {({ open, close }) => (
                        <>
                        <Popover.Button
                        className={classNames(
                        open ? "text-seroBlue" : "text-seroBlue",
                        "group inline-flex items-center outline-none"
                        )}
                        >
                        <span>Service</span>
                        <ChevronDownIcon
                        className={classNames(
                        open ? "text-seroBlue" : "text-seroBlue",
                        "ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-seroBlue"
                        )}
                        aria-hidden="true"
                        />
                        </Popover.Button>

                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute left-1/2 z-20 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {navServices.map((item) => (
                        <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => close()}
                        className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                        >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                        </Link>
                        ))}
                        </div>
                        <div className="bg-gray-50 p-5 sm:p-8">
                        <Link
                        href="#"
                        className="-m-3 flow-root rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                        >
                        <span className="flex items-center">
                        <span className="text-base font-medium text-seroBlue">Book a Consultation</span>
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                        Let"s provide you with an unquestionable Top-Tier Service today.
                        </span>
                        </Link>
                        </div>
                        </div>
                        </Popover.Panel>
                        </Transition>
                        </>
                        )}
                        </Popover> 
                    <Link href="/contact-us">Contact Us</Link>
                </div>

                <button
                type="button"
                className="hidden lg:inline-flex items-center rounded-md border border-transparent bg-seroBlue px-4 py-2 text-base font-medium text-yellow-400 focus:outline-none"
                >
                Book a Consultation
                </button>

                <div className="lg:hidden block pr-6" onClick={handleNav}>
                    {nav ? <X size={26} className="text-seroBlue" /> : <Menu size={26} className="text-seroBlue" />}
                </div>
            </div>

            <div className="lg:hidden">
                <div className={classNames(nav ? "fixed inset-0 z-50 overflow-hidden " : "hidden")}>
                    <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity opacity-100"></div>
                    <div className="fixed inset-0 flex items-start justify-end overflow-y-auto translate-x-0">
                        <div className="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition">
                            <nav className="divide-y divide-slate-900/10 text-base leading-7 text-seroBlue]">
                                <div className="flex items-center justify-between px-3 py-2">
                                    <Image src={seroLogo} width={80} height={80} alt="sero logo mobile" />
                                    <div onClick={() => {setNav(false)}}>
                                         <X size={26} className="text-seroBlue" />
                                    </div>
                                </div>

                                <div className="p-8">
                                    <ul className="flex flex-col space-y-6 text-seroBlue font-medium text-base">
                                    <li><Link href="/" onClick={() => setNav(false)}>Home</Link></li>
                                    <li><Link href="/about" onClick={() => setNav(false)}>About</Link></li>
                                    <li>
                                        <Popover className="relative">
                                        {({ open, close }) => (
                                        <>
                                        <Popover.Button
                                        className={classNames(
                                        open ? "text-seroBlue" : "text-seroBlue",
                                        "group inline-flex items-center outline-none"
                                        )}
                                        >
                                        <span>Service</span>
                                        <ChevronDownIcon
                                        className={classNames(
                                        open ? "text-seroBlue" : "text-seroBlue",
                                        "ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-seroBlue"
                                        )}
                                        aria-hidden="true"
                                        />
                                        </Popover.Button>

                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                        >
                                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-3xl">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                        {navServices.map((item) => (
                                        <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setNav(false)}
                                        className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                                        >
                                        <div className="">
                                        <p className="text-base font-medium text-seroBlue">{item.name}</p>
                                        </div>
                                        </Link>
                                        ))}
                                        </div>
                                        </div>
                                        </Popover.Panel>
                                        </Transition>
                                        </>
                                        )}
                                        </Popover>
                                    </li>
                                    <li><Link href="/contact-us" onClick={() => setNav(false)}>Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="px-8 py-5">
                                    <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-seroBlue px-4 py-2 text-base font-medium text-yellow-400 focus:outline-none"
                                    >
                                    Book a Consultation
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar