import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There <br />
        This is Ebubeker Rexha
      </SectionTitle>
      <SectionText>
        Frontend and Backend Developer with great skills in JavaScript, React JS
        and Node JS. I develop all type of web apps including Ecommerce
        websites.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/ebubeker-rexha-3528bb1a2/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
