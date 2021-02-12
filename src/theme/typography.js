import Typography from 'typography'
import fontConfig from '../../assets/theme/font'

const theme = {
  title: 'main',
  baseFontSize: fontConfig.baseFontSize,
  baseLineHeight: fontConfig.baseLineHeight,
  scaleRatio: fontConfig.scaleRatio,
  googleFonts: fontConfig.googleFonts,
  headerFontFamily: fontConfig.headerFontFamily,
  bodyFontFamily: fontConfig.bodyFontFamily,
  headerWeight: fontConfig.headerWeight,
  bodyWeight: fontConfig.bodyWeight,
  blockMarginBottom: fontConfig.blockMarginBottom,
  includeNormalize: fontConfig.includeNormalize,
  bodyColor: fontConfig.bodyColor,
  headerColor: fontConfig.headerColor,
}

export default new Typography(
  theme
)
