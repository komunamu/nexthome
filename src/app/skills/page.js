export default function SkillsPage() {
  const skills = [
    { name: 'Anaconda', icon: '/icons/Anaconda-Dark.svg' },
    { name: 'Python', icon: '/icons/Python-Dark.svg' },
    { name: 'Jupyter', icon: '/icons/Jupyter.svg' },
    { name: 'VS Code', icon: '/icons/VSCode-Dark.svg' },
    { name: 'Android', icon: '/icons/Android.svg' },
    { name: 'Java', icon: '/icons/Java-Dark.svg' },
    { name: 'Dart', icon: '/icons/Dart-Dark.svg' },
    { name: 'Flutter', icon: '/icons/Flutter-Dark.svg' },
    { name: 'Android Studio', icon: '/icons/AndroidStudio-Dark.svg' },
    { name: 'Swift', icon: '/icons/Swift.svg' },
    { name: 'Xcode', icon: '/icons/Xcode.svg' },
    { name: 'SQLite', icon: '/icons/SQLite.svg' },
    { name: 'Firebase', icon: '/icons/Firebase-Dark.svg' },
    { name: 'C#', icon: '/icons/CSharp.svg' },
    { name: 'Visual Studio', icon: '/icons/VisualStudio-Dark.svg' },
    { name: 'Azure', icon: '/icons/Azure-Dark.svg' },
    { name: 'Apache', icon: '/icons/Apache.svg' },
    { name: 'PHP', icon: '/icons/PHP-Dark.svg' },
    { name: 'Laravel', icon: '/icons/Laravel-Dark.svg' },
    { name: 'Linux', icon: '/icons/Linux-Dark.svg' },
    { name: 'MySQL', icon: '/icons/MySQL-Dark.svg' },
    { name: 'HTML', icon: '/icons/html-svgrepo-com.svg' },
    { name: 'CSS', icon: '/icons/css-svgrepo-com.svg' },
    { name: 'JavaScript', icon: '/icons/js-svgrepo-com.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap-4-logo-svgrepo-com.svg' },
    { name: 'jQuery', icon: '/icons/jquery-icon.svg' },
    { name: 'AngularJS', icon: '/icons/AngularJS.svg' },
    { name: 'Photoshop', icon: '/icons/adobe-photoshop-svgrepo-com.svg' },
    { name: 'Github', icon: '/icons/github-svgrepo-com.svg' },
    { name: 'Git', icon: '/icons/git-svgrepo-com.svg' },
    { name: 'Wordpress', icon: '/icons/Wordpress.svg' },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Here are some of the technologies and tools I work with.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5">
            {skills.map((skill) => (
              <div key={skill.name} className="relative pl-9">
                <dt className="font-semibold">
                  <img src={skill.icon} alt={skill.name} className="absolute left-0 top-1 h-7 w-7" />
                  <span>{skill.name}</span>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}