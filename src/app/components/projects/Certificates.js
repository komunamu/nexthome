import Image from 'next/image';

const certificates = [
  {
    name: 'Hubspot SEO Certficiate',
    image: '/certificates/SEO-Hubspot.jpg',
  },
  {
    name: 'Google Analytics Certficiate',
    image: '/certificates/Google Analytics.jpg',
  },
  {
    name: 'GraphQL Certficiate',
    image: '/certificates/graphQL.jpg',
  },
];

export default function Certificates() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Certificates
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {certificates.map((cert) => (
            <div key={cert.name} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex flex-col items-center">
                <Image
                  alt={cert.name}
                  className="w-full h-auto object-cover object-center rounded-lg"
                  src={cert.image}
                  width={600}
                  height={360}
                />
                <h2 className="title-font text-lg font-medium text-gray-900 mt-4 dark:text-white">
                  {cert.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}