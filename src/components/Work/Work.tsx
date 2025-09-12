import backgroundImg from "../../../public/marca-dagua.svg";

export default function Work() {
  return (
    <section
      id="work"
      className="relative container px-4 bg-[#EEE6DE] md:rounded-[32px] md:min-h-[554px] mb-[100px]">
      <div className="absolute h-[100%] left-0">
        <img
          src={backgroundImg}
          alt="graph"
          className="w-full h-full object-left object-fill rounded-[32px]"
        />
      </div>
      <div className="grid grid-cols-1 content-center gap-[30px] md:gap-0 md:grid-cols-12 md:min-h-[554px] md:py-0 py-[30px]">
        <div className="col-span-12 md:col-span-7 md:m-auto    mb-[30px] text-[28px]  md:text-[40px] text-center text-[#311910]  md:text-left  font-regular leading-tight">
          <h2 className="text-[#311910] md:ml-auto uppercase">
            Direito Trabalhista
          </h2>
          <p className="text-[#311910] font-montserrat text-[18px]">
            Segurança e estratégia nas relações de trabalho.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 text-[#E0D0BF] m-auto text-center md:text-left">
          <div className="flex flex-col gap-[17px]">
            <div className="bg-[#311910] rounded-[32px] py-[40px] px-[30px] flex flex-col gap-[12px]">
              <h3 className="  text-[24px] uppercase">Direito consultivo</h3>
              <p className="font-montserrat">
                Orientação preventiva para decisões mais seguras.
              </p>
            </div>
            <div className="bg-[#311910] rounded-[32px] py-[40px] px-[30px] flex flex-col gap-[12px]">
              <h3 className="  text-[24px] uppercase">Direito contencioso</h3>
              <p className="font-montserrat">
                Atuação firme e estratégica na defesa dos interesses do cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
