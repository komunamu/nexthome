export default function EducationPage() {
  const educationHistory = [
    {
      date: "2005.9 - 2011.5",
      title: "Ph.D. in Information Technology",
      institution: "University Of North Carolina at Charlotte",
      description: "Dissertation Title: User-centric Secure Cross-site Interaction Framework for Online Social Networking Service.",
    },
    {
      date: "2001.8 - 2004.5",
      title: "Master of Science in Information Technology",
      institution: "Rochester Institute of Technology",
      description: "Master Project: Presentation Remote Controller on the Palm PDA",
    },
    {
      date: "1996.3 - 1998.2",
      title: "Master of Science in Mechanics & Design",
      institution: "Koomin University",
      description: "Master Thesis: Buckling Analysis of Reinforced Laminated Composite Shell",
    },
    {
      date: "1990.3 - 1994.2",
      title: "Bachelor of Engineering in Mechanics & Design",
      institution: "Koomin University",
      description: "",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My academic background.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
            {educationHistory.map((item, index) => (
              <div key={item.title} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center bg-gray-300 dark:bg-gray-600 w-4 h-4 rounded-full"></div>
                <div className={`w-5/12 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-md font-semibold text-gray-600 dark:text-gray-300">{item.institution}</p>
                  {item.description && <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
