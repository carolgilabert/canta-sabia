import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'IBM Plex Mono',
      styles: ['400', '400i', '700', '700i', '900']
    },
    {
      name: 'IBM Plex Sans Condensed',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['IBM Plex Mono', 'regular'],
  bodyFontFamily: ['IBM Plex Sans Condensed', 'regular'],
  headerColor: 'black',
  bodyColor: '#333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      fontStyle: 'italic'
    }
  })
});

export default typography;
