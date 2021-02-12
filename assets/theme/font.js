export default {
  baseFontSize: '16px',
  // Distance between lines
  baseLineHeight: 1,
  // Size of hs and is calculated from baseFontSize
  scaleRatio: 2,
  // Fonst fetched from google fonts
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [ '400', '400i', '700', '700i', ],
    },
    {
      name: 'Merriweather',
      styles: [ '400', '400i', '700', '700i', ],
    },
  ],
  // Fonts for hs, we need at least two
  headerFontFamily: [ 'Montserrat', 'Merriweather', ],
  // Fonts for p, span, and div, we need at least two
  bodyFontFamily: [ 'Montserrat', 'Merriweather', ],
  // Weight of hs
  headerWeight: 'bold',
  // Weight of p, span and div
  bodyWeight: 'normal',
  // Hs bottom margin
  blockMarginBottom: 1,
  // Include normalize.css
  includeNormalize: true,
  // Color of p, span and div
  bodyColor: 'hsl(0, 0%, 50%)',
  // Hs color
  headerColor: 'hsl(0, 0%, 50%)',
}
