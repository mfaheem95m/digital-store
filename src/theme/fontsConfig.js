import MetropolisRegular from "../../public/fonts/Metropolis-Regular.woff";
import MetropolisBold from "../../public/fonts/Metropolis-Bold.otf";
import MetropolisMedium from '../../public/fonts/Metropolis-Medium.woff';
import MetropolisSemiBold from '../../public/fonts/Metropolis-SemiBold.woff';


const metropolisRegular = {
  fontFamily: "Metropolis-Regular",
  fontStyle: "normal",
  fontDisplay: "block",
  fontWeight: "bold",
  src: `
    local('Metropolis-Regular'),
    url(${MetropolisRegular}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const metropolisBold = {
  fontFamily: 'Metropolis-Bold',
  fontStyle: "normal",
  fontDisplay: "block",
  fontWeight: "bold",
  src: `
    local('Metropolis-Bold"'),
    url(${MetropolisBold}) format('otf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const metropolisMedium = {
  fontFamily: 'Metropolis-Medium',
  fontStyle: "normal",
  fontDisplay: "block",
  fontWeight: "bold",
  src: `
    local('Metropolis-Medium'),
    url(${MetropolisMedium}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const metropolisSemiBold = {
  fontFamily: 'Metropolis-SemiBold',
  fontStyle: "normal",
  fontDisplay: "block",
  fontWeight: "bold",
  src: `
    local('Metropolis-SemiBold'),
    url(${MetropolisSemiBold}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const arr = [
  metropolisRegular,
  metropolisBold,
  metropolisMedium,
  metropolisSemiBold
];
export default arr;
