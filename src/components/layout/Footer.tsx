import React from "react";
import { Instagram, Mail, Leaf } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="text-primary-light mr-2" size={24} />
              <h2 className="text-xl font-bold text-primary-light">
                HelloMaggie!
              </h2>
            </div>
            <p className="text-neutral-light max-w-sm">
              Solusi cerdas untuk mengubah limbah makanan menjadi sumber daya
              bernilai ekonomi melalui budidaya maggot.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-light">
              Kontak Kami
            </h3>
            <div className="flex items-center space-x-2 text-neutral-light hover:text-white transition duration-200">
              <Mail size={20} />
              <a href="mailto:hello@hellomaggie.id" className="hover:underline">
                hello@hellomaggie.id
              </a>
            </div>
            <div className="flex items-center space-x-2 text-neutral-light hover:text-white transition duration-200">
              <Instagram size={20} />
              <a
                href="https://instagram.com/hellomaggie.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @hellomaggie.id
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-light">Alamat</h3>
            <p className="text-neutral-light">
              i-CELL FTUI, Kukusan, Beji
              <br />
              Depok City, West Java
              <br />
              Indonesia 16425
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary text-center text-neutral-light">
          <p>
            © {new Date().getFullYear()} HelloMaggie! - MVP Mata Kuliah
            Wirausaha Tek Inf 01
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
