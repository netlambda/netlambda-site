import styled from '@emotion/styled'
import {
  space,
  width,
  // fontSize,
  color,
  textAlign,
  justifyContent,
  responsiveStyle,
} from 'styled-system'

// const wrap = responsiveStyle({
//   prop: 'wrap',
//   cssProperty: 'flexWrap',
//   key: 'asds',
// })

export const Box = styled.div`
  overflow: hidden;
  ${space} ${width} ${color} ${textAlign};
`

// ${space} ${width} ${fontSize} ${color} ${textAlign};
export const Flex = styled.div`
  display: flex;
  justify-content: flex-wrap;
`
// ${justifyContent} ${wrap};
