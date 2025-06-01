import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white dark:bg-secondary-light rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-secondary dark:text-white">
            {question}
          </h3>
          {isOpen ? (
            <ChevronUp className="text-primary" size={20} />
          ) : (
            <ChevronDown className="text-primary" size={20} />
          )}
        </div>
        <div
          className={`mt-2 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-48" : "max-h-0"
          }`}
        >
          <p className="text-secondary-light dark:text-neutral-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Apakah maggot itu bau?",
      answer:
        "Tidak, jika dirawat dengan benar, maggot tidak berbau menyengat. Kami akan mengajarkan cara perawatan yang tepat melalui panduan lengkap.",
    },
    {
      question: "Apakah maggot itu berbahaya?",
      answer:
        "Tidak. Maggot justru membantu mengurai sampah organik dengan cepat dan efisien. Mereka adalah solusi alami untuk pengelolaan limbah makanan.",
    },
    {
      question: "Apakah bisa untuk pemula?",
      answer:
        "Sangat bisa! Kami menyediakan starter kit lengkap, panduan step-by-step, dan bimbingan komunitas yang akan membantu Anda memulai dengan mudah.",
    },
    {
      question: "Hasilnya bisa dijual?",
      answer:
        "Bisa! Maggot bisa dijadikan pakan ikan, burung, ayam dengan harga jual mencapai Rp500.000/kg. Selain itu, hasil sampingannya bisa dijadikan pupuk organik bernilai ekonomis.",
    },
  ];

  return (
    <section
      id="faq"
      className="section bg-neutral-light/20 dark:bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -ml-40 -mb-40"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-white mb-6">
            <HelpCircle size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4 text-center">
            FAQ
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-center max-w-2xl mt-6 text-secondary-light dark:text-neutral-light">
            Masih bingung? Temukan jawaban untuk pertanyaan yang sering diajukan tentang
            budidaya maggot dan HelloMaggie!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
