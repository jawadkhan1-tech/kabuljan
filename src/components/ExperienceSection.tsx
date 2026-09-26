import { Flame, Users, ChefHat, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      icon: <ChefHat className="h-10 w-10 text-accent mb-4" />,
      title: "AUTHENTIC FLAVORS",
      description: "Traditional Afghan-inspired dishes prepared with recipes passed down through generations."
    },
    {
      icon: <Users className="h-10 w-10 text-accent mb-4" />,
      title: "FAMILY HOSPITALITY",
      description: "A warm, welcoming environment perfect for family gatherings and making memories."
    },
    {
      icon: <Flame className="h-10 w-10 text-accent mb-4" />,
      title: "FRESH FROM THE GRILL",
      description: "Sizzling, freshly prepared BBQ and tikka, grilled to perfection over open coals."
    },
    {
      icon: <MapPin className="h-10 w-10 text-accent mb-4" />,
      title: "QUETTA'S TASTE",
      description: "A culinary experience deeply connected with the vibrant food culture of Quetta."
    }
  ];

  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">
            The Kabul Jaan Experience
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-xl shadow-sm border border-secondary/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="p-4 bg-primary/5 rounded-full mb-6">
                {exp.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-primary mb-3 tracking-wide">
                {exp.title}
              </h3>
              <p className="text-text/70 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
