import React from "react";
import styled from "styled-components";

import ProviderSection from "components/ProviderSection";

import Header from "images/header.svg";

const HomeView = () => {
  return (
    <HomeContainer>
      <HomeSection>
        <div className="standout">
              <img src={Header} alt={"No child should go hungry"} />
      </div>
        <About>
          <h1>No child should go hungry</h1>
          <p>
            Manchester United and England footballer Marcus Rashford’s campaign to
            alleviate child poverty has inspired businesses, charities and local
            authorities to offer free meals to struggling families over the
            half-term school holidays, after Conservative MPs voted against
            extending free school meals.
          </p>
          <p style={{ fontSize: 21, position: "relative" }}>
            <span className={"quotes"}>
              <Quotes />
            </span>
            <em>
              The superstars of this nation lie in local communities. Even after
              taking the biggest hits you have wrapped your arms around your
              community to catch children as they fell. I really can’t thank you
              enough, you’re amazing.
            </em>
          </p>
          <p style={{ color: "#BA0D37" }}>Marcus Rashford</p>
        </About>
      </HomeSection>
      <ProviderSection />
    </HomeContainer>
  );
};

export default HomeView;

const Quotes = () => (
  <svg width="29" height="22" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.272 21.056c1.835 0 3.403-.619 4.704-1.856 1.301-1.237 1.952-3.115 1.952-5.632-1.237-.213-2.155-.683-2.752-1.408a3.815 3.815 0 01-.896-2.496c0-1.024.256-2.09.768-3.2.512-1.11 1.45-2.347 2.816-3.712L10.688 0C7.018 2.432 4.32 4.757 2.592 6.976.864 9.195 0 11.626 0 14.272c0 2.048.587 3.69 1.76 4.928 1.173 1.237 2.677 1.856 4.512 1.856zm15.168 0c1.835 0 3.403-.619 4.704-1.856 1.301-1.237 1.952-3.115 1.952-5.632-1.237-.213-2.155-.683-2.752-1.408a3.815 3.815 0 01-.896-2.496c0-1.024.256-2.09.768-3.2.512-1.11 1.45-2.347 2.816-3.712L25.856 0c-3.67 2.432-6.368 4.757-8.096 6.976-1.728 2.219-2.592 4.65-2.592 7.296 0 2.048.587 3.69 1.76 4.928 1.173 1.237 2.677 1.856 4.512 1.856z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
);

const HomeContainer = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HomeSection = styled.div`
  overflow-y: auto;
  @media screen and (min-width: 1000px) {
    height: calc(100vh - 88px);
    /* padding: 60px 80px; */
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  .standout {
    display: none;
    @media screen and (min-width: 1000px) {
      display: block;
    }
  }

  .quotes {
    left: -50px;
    position: absolute;
    top: 0;
    /* transform: scale(-1, 1); */
  }

  img {
    margin-bottom: 30px;
    object-fit: contain;
    width: 100%;
  }
`;

const About = styled.div`
display: none;
@media screen and (min-width: 768px) {
    display: block;
  }
`
