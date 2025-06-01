import React from "react";
import { ExternalLink } from "lucide-react";

const GoogleForm: React.FC = () => {
  return (
    <section
      id="googleform"
      className="section bg-white dark:bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 dark:bg-primary/5"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
            Tertarik Menggunakan HelloMaggie!?
          </h2>

          <p className="text-lg text-secondary-light dark:text-neutral-light mb-10">
            Isi form minat untuk mendapatkan informasi lebih lanjut dan menjadi
            bagian dari solusi pengelolaan limbah makanan yang ramah lingkungan
            dan menguntungkan.
          </p>

          <div className="bg-primary-dark/10 dark:bg-secondary-light/20 rounded-xl p-8 mb-8 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold mb-4 text-secondary dark:text-white">
              Program Early Access
            </h3>
            <p className="text-secondary-light dark:text-neutral-light mb-6">
              Dapatkan akses awal ke starter kit HelloMaggie! dan panduan
              eksklusif dengan mengisi form pendaftaran minat.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe3izgSub8GXuuKJZ5NUgahR7IF4ZsSrFxUcH6qw6Qj-K9SxQ/viewform?usp=sharing&ouid=117707008783178828007"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <span>Form Minat</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-secondary-light p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">1.</div>
              <h3 className="text-lg font-semibold text-secondary dark:text-white mb-2">
                Isi Form
              </h3>
              <p className="text-secondary-light dark:text-neutral-light">
                Lengkapi data di Google Form
              </p>
            </div>

            <div className="bg-white dark:bg-secondary-light p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">2.</div>
              <h3 className="text-lg font-semibold text-secondary dark:text-white mb-2">
                Verifikasi
              </h3>
              <p className="text-secondary-light dark:text-neutral-light">
                Tim kami akan menghubungi via email
              </p>
            </div>

            <div className="bg-white dark:bg-secondary-light p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">3.</div>
              <h3 className="text-lg font-semibold text-secondary dark:text-white mb-2">
                Mulai
              </h3>
              <p className="text-secondary-light dark:text-neutral-light">
                Terima starter kit dan panduan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleForm;
