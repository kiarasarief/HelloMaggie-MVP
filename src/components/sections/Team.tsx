import React from "react";
import { Users } from "lucide-react";

type TeamMemberProps = {
  name: string;
  role: string;
  quote: string;
  focus: string;
  image: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  quote,
  focus,
  image,
}) => {
  return (
    <div className="bg-white dark:bg-secondary-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-6 hover:scale-105 transition-transform duration-300">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-secondary dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <blockquote className="text-secondary-light dark:text-neutral-light italic mb-4 text-center">
          "{quote}"
        </blockquote>
        <p className="text-sm text-secondary-light dark:text-neutral-light text-center">
          <strong className="text-primary">Fokus:</strong> {focus}
        </p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="section bg-primary-dark/10 dark:bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary-dark text-white mb-6">
            <Users size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4 text-center">
            Tim di Balik HelloMaggie!
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-center max-w-2xl mt-6 text-secondary-light dark:text-neutral-light">
            Kami adalah tim yang berdedikasi untuk mengatasi masalah limbah
            makanan dengan solusi inovatif dan berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TeamMember
            name="Kharisma Aprilia"
            role="Founder & Inisiator"
            quote="Saya ingin membuat solusi yang tidak hanya berdampak pada lingkungan, tapi juga membuka peluang usaha bagi Gen Z seperti kita."
            focus="Edukasi maggot, desain starter kit, strategi sosial"
            image="kharisma.jpg"
          />
          <TeamMember
            name="Nabiel Harits"
            role="Co-Founder Komunitas & Riset"
            quote="Kami percaya bahwa perubahan besar bisa dimulai dari satu rumah, satu ember, dan satu koloni maggot."
            focus="Riset potensi limbah organik, pengembangan komunitas & edukasi"
            image="nabiel.jpg"
          />
          <TeamMember
            name="Putri Kiara"
            role="Co-Founder Teknologi"
            quote="Dengan teknologi sederhana, kita bisa bantu orang-orang mengelola limbah makanan mereka secara efisien."
            focus="Form, platform edukasi digital"
            image="kiara.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
