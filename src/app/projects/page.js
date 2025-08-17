import Image from "next/image";
import Certificates from "../components/projects/Certificates";
import Websites from "../components/projects/Websites";

// Function to fetch data from Notion API
async function getNotionData() {
  // Get environment variables
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  // Remove any quotes that might be in the database ID and trim whitespace
  const NOTION_DATABASE = process.env.NOTION_DATABASE?.replace(
    /["']/g,
    ""
  ).trim();
  console.log("Using Notion Database ID:", NOTION_DATABASE);

  if (!NOTION_TOKEN || !NOTION_DATABASE) {
    console.error("Missing Notion API credentials");
    return [];
  }

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28", // This is still the latest version as of 2023
      "Content-Type": "application/json",
    },
    // Ensure we're not getting cached responses
    cache: "no-store",
    body: JSON.stringify({
      // Simplified filter to just get all entries from the database
      // Remove the filter to get all entries
    }),
  };

  try {
    // Make sure we're using the correct API endpoint
    // Log the full URL for debugging
    const apiUrl = `https://api.notion.com/v1/databases/${NOTION_DATABASE}/query`;
    console.log("Full Notion API URL:", apiUrl);

    const response = await fetch(apiUrl, options);

    // Log the request details for debugging
    console.log("Notion API request:", {
      url: `https://api.notion.com/v1/databases/${NOTION_DATABASE}/query`,
      token: NOTION_TOKEN ? "Token provided" : "No token",
      database: NOTION_DATABASE,
    });

    if (!response.ok) {
      // Get the response text for more detailed error information
      const errorText = await response.text();
      console.error("Notion API error response:", errorText);
      throw new Error(`Notion API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Notion API response:", data);

    // const projectNames = data.results.map((project) => ({
    //   name: project.properties.Name?.title?.[0]?.plain_text || "Untitled",
    // }));

    // console.log("Project Names:", projectNames);

    // Extract the projects from the Notion API response
    return data.results || [];
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return [];
  }
}

export default async function Projects() {
  // Fetch projects data
  const projects = await getNotionData();

  return (
    <>
      {/* Display projects from Notion */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Projects fetched from Notion API
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:border-gray-800">
                    <div className="p-6">
                      <Image
                        src={project.cover?.file?.url}
                        alt={
                          project.properties.Name?.title?.[0]?.plain_text ||
                          "Project Cover"
                        }
                        width={400}
                        height={200}
                        className="object-cover h-[200px] rounded-t-lg rounded-b-lg"
                        quality={100}
                      />

                      <h1 className="title-font text-lg font-semibold text-gray-900 mb-3 dark:text-white">
                        {project.properties.Name?.title?.[0]?.plain_text ||
                          "Untitled"}
                      </h1>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-500">
                        {project.properties.company?.rich_text?.[0]
                          .plain_text || "No Company"}
                      </h2>
                      <p className="leading-relaxed mb-3 dark:text-gray-300">
                        {project.properties.Challenge?.rich_text?.[0]
                          ?.plain_text || ""}
                      </p>
                      <p className="leading-relaxed mb-3 whitespace-pre-line dark:text-gray-300">
                        {project.properties.Description?.rich_text?.[0]
                          ?.plain_text || "No description"}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center">
                <p>No projects found</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Certificates />
      <Websites />
    </>
  );
}
