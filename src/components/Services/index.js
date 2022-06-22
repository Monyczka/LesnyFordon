import React from "react";
import Icon1 from "../../images/oferta-zajec-2.svg";
import Icon2 from "../../images/oferta-zajec-1.svg";
import Icon3 from "../../images/oferta-zajec-3.svg";
import {
  ServicesContainer,
  ServiceCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
const index = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Oferta zajęć</ServicesH1>
      <ServicesWrapper>
        <ServiceCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Język angielski</ServicesH2>
          <ServicesP>
            115 zł miesięcznie
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Język niemiecki</ServicesH2>
          <ServicesP>
            130 zł miesięcznie
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Język hiszpański</ServicesH2>
          <ServicesP>
            150 zł miesięcznie
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Adaptacja</ServicesH2>
          <ServicesP>
            10 zł/h - pobyt na terenie przedszkola po wcześniejszym uzgodnieniu
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Warsztaty kulinarne</ServicesH2>
          <ServicesP>
            15 zł za jedne warsztaty w tym skłaniki potrzebne na zajęcia
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Indywidualna fizjoterapia</ServicesH2>
          <ServicesP>
            150 zł - Ćwiczenia z fizjoterapeutą dostosowane do indywidualnych potrzeb dziecka
          </ServicesP>
        </ServiceCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default index;
