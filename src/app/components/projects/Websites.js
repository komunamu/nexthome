import Image from 'next/image';
import Link from 'next/link';

const websites = [
  {
    name: 'Goyuum',
    image: '/websiteImg/goyuum.jpg',
    url: 'https://www.goyuum.com/web/',
  },
  {
    name: 'Lve Laser',
    image: '/websiteImg/lvelaser.jpg',
    url: 'https://lvelaser.com/',
  },
  {
    name: 'Carolina Beauty',
    image: '/websiteImg/carolinabeauty.jpg',
    url: 'https://carolinabeautycharlotte.com/',
  },
  {
    name: 'Hands On Well',
    image: '/websiteImg/handsonwell.jpg',
    url: 'https://handsonwell.org/',
  },
  {
    name: 'Workbylee',
    image: '/websiteImg/workbylee.jpg',
    url: 'https://www.workbylee.com/',
  },
];

export default function Websites() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Websites
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {websites.map((site) => (
            <div key={site.name} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex flex-col items-center">
                <Link href={site.url} target="_blank">
                  <Image
                    alt={site.name}
                    className="w-full h-auto object-cover object-center rounded-lg"
                    src={site.image}
                    width={600}
                    height={360}
                  />
                </Link>
                <Link href={site.url} target="_blank">
                  <h2 className="title-font text-lg font-medium text-gray-900 mt-4 dark:text-white">
                    {site.name}
                  </h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}