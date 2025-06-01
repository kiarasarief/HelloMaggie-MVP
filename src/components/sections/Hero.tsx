import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown, Leaf, Recycle, DollarSign } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden bg-gradient-to-br from-white to-neutral-light/30 dark:from-secondary dark:to-secondary-light wave-pattern">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 dark:bg-primary/5"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full -ml-40 -mb-40 dark:bg-primary/5"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                🌱 Eco-Friendly Solution
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-secondary dark:text-white">
              ♻️ Ubah Limbah Makanan Jadi{" "}
              <span className="text-primary">Cuan</span> Bersama Maggot!
            </h1>

            <p className="text-lg text-secondary-light dark:text-neutral-light mb-8 max-w-lg">
              Kenalkan, kami dari HelloMaggie! Solusi untuk kamu yang
              punya sisa makanan, tapi bingung cara kelolanya. Edukatif,
              praktis, dan bernilai ekonomis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink
                to="googleform"
                smooth={true}
                duration={800}
                offset={-80}
                className="btn-primary group"
              >
                <span>Isi Form Minat Sekarang</span>
                <ArrowDown size={18} className="ml-2 animate-bounce" />
              </ScrollLink>

              <ScrollLink
                to="about"
                smooth={true}
                duration={800}
                offset={-80}
                className="btn-outline"
              >
                <span>Learn More</span>
              </ScrollLink>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full inline-block mb-2">
                  <Leaf className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium text-secondary-light dark:text-neutral-light">
                  Ramah Lingkungan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full inline-block mb-2">
                  <Recycle className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium text-secondary-light dark:text-neutral-light">
                  Zero Waste
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full inline-block mb-2">
                  <DollarSign className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium text-secondary-light dark:text-neutral-light">
                  Nilai Ekonomis
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-white transform hover:scale-105 transition-transform duration-300">
                <img
                  src="LalatBlackSoldier.jpg"
                  alt="Sustainable farming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-primary bg-white transform hover:scale-105 transition-transform duration-300">
                <img
                  src="Budidaya.jpg"
                  alt="Compost and sustainability"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 bg-white dark:bg-secondary-light p-4 rounded-lg shadow-lg transform rotate-12">
                <p className="text-primary font-bold">Rp500rb/kg</p>
                <p className="text-sm text-secondary-light">
                  Potensi Penghasilan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-current text-white dark:text-secondary"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
