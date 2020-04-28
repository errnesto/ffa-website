import { css } from '@emotion/core'
import { transparentize } from 'polished'
import * as breakpoints from './breakpoints'
import * as colors from './colors'

export const container = css`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

export const block = css`
  padding: 20px;
  box-sizing: border-box;
  background-color: ${transparentize(0.2, colors.beige)};

  @media (min-width: ${breakpoints.breakpointM}px) {
    padding: 20px 45px;
  }
`

export const grid = ({
  columns = 12,
  rows = 1,
  columnGap = 20,
  rowGap = 0,
} = {}) => css`
  display: grid;
  grid-column-gap: ${columnGap}px;
  grid-row-gap: ${rowGap}px;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  grid-template-rows: repeat(${rows}, minmax(0, auto));
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;
`
