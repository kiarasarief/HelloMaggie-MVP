import React from "react";
import { Recycle, Leaf, DollarSign } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Tentang HelloMaggie!
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-light/20 dark:bg-secondary-light p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-block p-4 rounded-full bg-primary text-white mb-4">
              <Recycle size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary dark:text-white">
              Solusi Ramah Lingkungan
            </h3>
            <p className="text-secondary-light dark:text-neutral-light">
              Budidaya maggot adalah cara efektif untuk mengurangi limbah
              makanan organik dan mengurangi emisi metana dari landfill.
            </p>
          </div>

          <div className="bg-neutral-light/20 dark:bg-secondary-light p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-block p-4 rounded-full bg-primary text-white mb-4">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary dark:text-white">
              Edukatif & Praktis
            </h3>
            <p className="text-secondary-light dark:text-neutral-light">
              Kami menyediakan starter kit dan panduan lengkap untuk membantu
              kamu memulai perjalanan budidaya maggot dengan mudah.
            </p>
          </div>

          <div className="bg-neutral-light/20 dark:bg-secondary-light p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-block p-4 rounded-full bg-primary text-white mb-4">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary dark:text-white">
              Nilai Ekonomis
            </h3>
            <p className="text-secondary-light dark:text-neutral-light">
              Hasil budidaya maggot dapat dijual sebagai pakan ternak berprotein
              tinggi atau pupuk organik berkualitas tinggi.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-primary-dark/10 dark:bg-secondary-light/20 p-6 md:p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-full h-64 rounded-xl overflow-hidden">
                <img
                  src="MenanamPohon.jpg"
                  alt="Sustainable farming practices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                Mengapa Memilih HelloMaggie!
              </h3>
              <p className="text-secondary-light dark:text-neutral-light mb-6">
                HelloMaggie! adalah platform wirausaha sosial yang membantu
                pelaku usaha makanan, khususnya Gen Z, mengelola limbah sisa
                makanan secara produktif melalui budidaya maggot—larva lalat
                Black Soldier Fly yang mampu mengurai sampah organik dengan
                cepat, tanpa bau, dan aman. Kami menyediakan starter kit
                praktis, panduan budidaya yang mudah dipahami, serta komunitas
                online pendukung. 
              </p>
              <p className="text-secondary-light dark:text-neutral-light">
                Dengan HelloMaggie!, kamu bisa ubah limbah
                jadi pupuk atau pakan ternak bernilai jual tinggi, sekaligus
                ikut menjaga lingkungan. Dari sisa makanan, lahirlah peluang
                usaha baru!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
