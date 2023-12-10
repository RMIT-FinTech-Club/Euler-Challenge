'use client';

import { NextLogo } from './next.jsx';
import Link from 'next/link';
import CloseIcon from '../../public/close.svg';
import MenuIcon from '@/public/menu.svg';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image'; // Import the Image component from next/image

export function GlobalNav() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const questions = [
        {
                name: "Question 1",
                slug: "question1",
        },
        {
                name: "Question 2",
                slug: "question2",
        },
        {
                name: "Question 3",
                slug: "question3",
        }
    ]

    return (
        <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
            <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
                <Link
                    href="/"
                    className="group flex w-full items-center gap-x-2.5"
                    onClick={close}
                >
                    <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
                        <NextLogo />
                    </div>

                    <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
                        Euler Challenge
                    </h3>
                </Link>
            </div>
            <button
                type="button"
                className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-medium text-gray-100 group-hover:text-gray-400">
                    Menu
                </div>
                {isOpen ? (
                    <Image width={16} height={16} src='/close.svg' alt="Close Icon" />
                ) : (
                    <Image width={19} height={19} src='/menu.svg' alt="Menu Icon" />
                )}
            </button>

            <div
                className={clsx('overflow-y-auto lg:static lg:block', {
                    'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
                    hidden: !isOpen,
                })}
            >
            <nav className="space-y-3 px-2 pb-24 pt-5">
                {questions.map((question) => {
                    return (
                    <div key={question.name}>
                        <div>
                        <NavItem question={question} close={close} />
                        </div>
                    </div>
                    );
                })}
        </nav>
      </div>
    </div>
  );
}

function NavItem({question, close}) {
    return (
        <Link
            onClick={close}
            href={`/${question.slug}`}
            className={clsx(
                'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 text-gray-400 hover:bg-gray-800'
            )}
        >
            {question.name}
        </Link>
    )
}
