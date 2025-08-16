'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot field check
    if (e.target.honeypot.value) {
      console.log("Bot submission detected");
      return;
    }

    setResult("Sending....");

    window.grecaptcha.enterprise.ready(async () => {
      const token = await window.grecaptcha.enterprise.execute('6LeiHqgrAAAAADaXWsr2RU877crOiuXbRmR2osDs', {action: 'LOGIN'});
      
      const formData = new FormData(e.target);
      formData.append("access_key", "534984d9-9972-4266-b19a-22d4d7a97318");
      formData.append("g-recaptcha-response", token);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log("Form Submitted Successfully", data);
        setResult(data.message);
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-2xl w-full px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            If you’d like to contact me regarding a project or have any questions, please fill out the form below.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
          {/* Honeypot field for bot detection */}
          <input type="checkbox" name="honeypot" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:focus:ring-indigo-500"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:focus:ring-indigo-500"
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit Form
            </button>
          </div>
          {result && <div className="mt-4 text-center text-gray-600 dark:text-gray-300">{result}</div>}
        </form>
      </div>
    </section>
  );
}
