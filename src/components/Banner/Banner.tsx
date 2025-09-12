type HomeBannerProps = {
  photo: string;
  alt?: string;
};

export default function HomeBanner({
  photo,
  alt = "Hero photo",
}: HomeBannerProps) {
  return (
    <section
      aria-label="Hero"
      className="md:mt-6 relative container w-[100vw] md:h-[765px] mx-auto  overflow-hidden md:rounded-[32px] 
                 bg-gradient-to-br from-[#3A2317] via-[#2C1A11] to-[#1B100A] text-[#BE9D7C] ">
      <div className="absolute w-full h-full right-0">
        <img
          src={photo}
          alt={alt}
          className="w-full h-full hidden md:flex object-right object-cover md:object-center "
        />
      </div>

      <div className="relative grid h-full w-full items-end md:items-center min-h-[520px] grid-cols-1 md:grid-cols-12">
        <div className="col-span-8 px-6 py-14 sm:px-10 md:px-12 lg:px-16 lg:py-20 items-start">
          <div className="flex flex-col justify-start md:items-start">
            <h1 className="text-[54px] text-center md:text-left sm:text-5xl font-regular leading-tight">
              GIULIA TOGNARELLI HESSEL
            </h1>

            <h2 className="text-[22px] md:text-left text-center tracking-widest uppercase">
              Advocacia e Consultoria
            </h2>

            <div className="pt-2 mt-[40px] mx-auto md:mx-0">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[#BE9D7C]
                           px-5 py-2.5 text-[18px] font-medium tracking-wide no-underline
                           text-[#BE9D7C] hover:bg-[#BE9D7C]/10 transition">
                QUERO UMA CONSULTORIA
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
