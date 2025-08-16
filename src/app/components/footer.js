import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Dr.Ko&apos;s homepage</span>
          </p>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Dr. Ko
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.instagram.com/dr.pickleball" target="_blank" rel="noopener noreferrer" className="text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="https://github.com/komunamu" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M12 2C6.48 2 2 6.48 2 12a10 10 0 0 0 7.17 9.67.6.6 0 0 0 .82-.78V20.1c-2.8.6-3.4-1.3-3.4-1.3a2.7 2.7 0 0 0-1.1-1.4c-.9-.6.07-.6.07-.6a2.1 2.1 0 0 1 1.5 1 2.2 2.2 0 0 0 3 1.1.6.6 0 0 1 .2-1.3c-2.3-.3-4.7-1.1-4.7-5.2a4.1 4.1 0 0 1 1.1-2.8.6.6 0 0 1 .1-2.8s.9-.3 2.8 1a9.7 9.7 0 0 1 5.2 0c2-.8 2.8-1 2.8-1a.6.6 0 0 1 .1 2.8 4.1 4.1 0 0 1 1.1 2.8c0 4.1-2.4 4.9-4.7 5.2a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 0 .8.8A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
