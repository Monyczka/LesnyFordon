import svg1 from "../../images/logo.svg";
import svg2 from "../../images/galeria.svg";
import svg3 from "../../images/cennik.svg";
import svg4 from "../../images/contact.svg";
import svg5 from "../../images/monte.svg";

export const listStyle = {
  marginLeft: 60,
};

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "O nas",
  headline: "Przedszkole, które uczy samodzielności, daje wolność i zachęca do działania!",
  description:
      "Pedagogikę Montessori łączymy z elementami przedszkola leśnego, którego podstawą jest ideologia pedagogiki waldorfskiej, autorstwa Steinera. Jej celem jest wspieranie wszechstronnego, holistycznego rozwoju dziecka w zakresie 3 stref: myślenia, uczuć i woli.",
  buttonLabel: "O Montessori",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  direction: "monte",
  big_picture: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Galeria",
  headline: "Tu powstanie galeria zdjęć",
  description: "Pojawią się tu fotografie nie tylko okazjonalnych wydarzeń z życia placówki, ale również naszych codziennych aktywności i prac.",
  buttonLabel: "Nasz cennik",
  imgStart: true,
  img: svg2,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
  direction: "signup",
  big_picture: false,
};
export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Cennik",
  headline: " ",
  description:
      <ol style={listStyle}>
        <li>Coffee</li>
        <li>1. Czesne: 950 zł za każdy miesiąc (na 2022 r.).</li>
        <li>Milk</li>
      </ol>,
  buttonLabel: "Skontaktuj się z nami",
  imgStart: false,
  img: svg3,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
  direction: "contact",
  big_picture: false,
};
export const homeObjFour = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Kontakt",
  headline: "Skontaktuj się z nami:",
  description:
      "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Wróć do początku",
  imgStart: false,
  img: svg4,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  direction: "home",
  big_picture: false,
};
export const homeObjFive = {
  id: "monte",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "pedagogika montessori",
  headline: "JAJCA!",
  description:
      "dupsko!",
  buttonLabel: "Zobacz nasze zdjęcia",
  imgStart: false,
  img: svg5,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  direction: "discover",
  big_picture: true,
};