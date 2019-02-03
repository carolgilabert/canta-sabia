import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'Cutive',
      styles: ['400', '400i', '700', '700i', '900']
    },
    {
      name: 'IBM Plex Sans Condensed',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['Cutive', 'regular'],
  bodyFontFamily: ['IBM Plex Sans Condensed', 'regular'],
  headerColor: 'black',
  bodyColor: '#333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontSize: '4.2rem',
      fontWeight: 900
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 900
    },
    h3: {
      fontSize: '1.6rem',
      marginBottom: '0.74rem'
    }
  })
});

export default typography;
