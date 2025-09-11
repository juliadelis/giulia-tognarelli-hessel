import { GoPlus } from "react-icons/go";

export default function Articles() {
  return (
    <section
      id="articles"
      className="relative container mb-[100px] text-[#311910]">
      <div className="flex flex-col gap-[30px]   md:py-0 py-[30px]">
        <div className=" m-auto  md:left-auto   mb-[30px]  text-[48px] text-center text-[#311910]  md:text-left  font-regular leading-tight">
          <h2 className="text-[#311910] md:ml-auto uppercase">
            Artigos publicados
          </h2>
        </div>
        <div className=" px-4 bg-[#EEE6DE] rounded-[32px] m-auto text-center md:text-left">
          <div className="flex flex-col gap-[17px]">
            <div className="  py-[40px] px-[30px] flex flex-col gap-[12px]">
              <h3 className=" font-semibold text-[24px] uppercase">
                O PENSAR COMO SUPERAÇÃO DA IDEOLOGIA NO CONTEXTO EDUCACIONAL EM
                HANNAH ARENDT
              </h3>
              <p className="font-montserrat">
                O presente artigo aborda o tema do pensar filosófico como
                possibilidade de superação do elemento ideológico no âmbito
                educacional...
              </p>
              <a
                href="/o-pensar-como-superacao-da-ideologia-no-contexto-educacional-em-hannah-arendt.pdf"
                className="flex gap-1 font-medium underline uppercase font-montserrat self-center md:self-start">
                <GoPlus size={22} />
                Ler mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
