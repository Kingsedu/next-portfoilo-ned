import React from "react";
const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailed to cutsomer specification",
  },
  {
    id: "02",
    title: "SEO Optimization",
    description:
      "Enhancing your website\'s visibility and ranking on search engine",
  },
  {
    id: "03",
    title: "Front-End",
    description:
      "Building fast, interactive user interfaces with modern frameworks for a smooth user experience.",
  },
  {
    id: "04",
    title: "Backend",
    description:
      "Developing secure, scalable server-side logic, APIs, and databases that power your application.",
  },
  {
    id: "05",
    title: "DevOps",
    description:
      "Automating deployment, scaling, and infrastructure to ensure reliable and efficient application delivery.",
  },
  {
    id: "06",
    title: "Animation",
    description:
      "Creating smooth, purposeful animations that enhance usability and bring interfaces to life.",
  },
  {
    id: "07",
    title: "Content Creation",
    description:
      "Producing clear, engaging digital content that communicates value and drives user engagement.",
  },
];
const Services = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
