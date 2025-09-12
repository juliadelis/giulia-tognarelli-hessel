import AboutPhoto from "../../../public/img/about-giulia-hessel.png";

export default function About() {
  return (
    <section id="about" className="container px-4 py-[108px]">
      <div className="container md:left-auto  uppercase mb-[30px] md:mb-[60px] text-[28px] md:text-[48px] text-center text-[#311910]  md:text-right  font-regular leading-tight">
        <h2 className=" md:w-[80%] md:ml-auto">
          Advocacia trabalhista com estratégia, clareza e resultados.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="col-span-7 relative h-full content-end items-end md:items-center md:min-h-[520px] grid-cols-1 md:grid-cols-12 ">
          <p className="text-[#311910] md:w-[90%] font-montserrat font-medium self-end mb-[20px] md:mb-0">
            Advogada inscrita na OAB/SP nº 526.738, formada pela Faculdade de
            Direito de Sorocaba e pós-graduanda em Direito e Processo do
            Trabalho pela PUC/RS. Iniciei minha trajetória com três anos de
            estágio na área trabalhista, atuando tanto na defesa de empresas
            quanto de trabalhadores, o que me proporcionou uma visão abrangente
            e estratégica das relações de trabalho.
            <br />
            <br />
            Desde então, dedico minha atuação ao Direito do Trabalho, no
            contencioso e no consultivo, com experiência na elaboração de
            contratos, aditivos e termos de compliance, além da implementação de
            medidas preventivas para empresas. Como advogada autônoma, também
            atendo demandas cíveis, sempre com foco em oferecer soluções
            jurídicas claras, eficientes e seguras, alinhadas às necessidades de
            cada cliente.
          </p>
        </div>
        <div className="col-span-5 w-full h-full right-0 ">
          <img
            src={AboutPhoto}
            alt="Giulia Hessel"
            className="object-right rounded-[32px] md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
