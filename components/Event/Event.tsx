import { css } from '@emotion/core'
import { colors, layout, typography, breakpoints, helpers } from 'style'
import { EventBlock } from 'lib/models/eventBlock'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import Columns from 'components/Columns/Columns'
import { Fragment } from 'react'

const eventStyle = css`
  ${layout.container};
  margin-top: 20px;
`

const contentStyle = css`
  ${layout.block};
  padding-top: 10px;
  padding-bottom: 25px;
`

const dateStyle = css`
  ${typography.heading3};
  ${helpers.resetDefinitionListStyles};
  color: ${colors.darkBlue};
  margin-top: 1em;
  margin-bottom: 1.5em;

  span {
    display: block;
  }

  dt {
    font-size: 0.9em;
    width: 90px;
    margin-bottom: 3px;
  }

  dd {
    font-weight: 300;
  }
`

const columnTitleStyle = css`
  ${typography.heading3};
`

function getColor(category: string) {
  switch (category) {
    case 'educators':
      return { main: colors.darkBlue, text: 'white' }
    case 'family':
      return { main: colors.orange, text: colors.brown }
    default:
      return { main: colors.darkGreen, text: colors.brown }
  }
}

const Event = (props: EventBlock) => {
  const color = getColor(props.category)

  return (
    <article css={eventStyle}>
      <SplitBanner
        color={color.main}
        textColor={color.text}
        title={props.title}
        image={props.image}
        content={props.description}
      />
      <div css={contentStyle}>
        <dl css={dateStyle}>
          <span>
            <dt>Termin:</dt> <dd>{props.date}</dd>
          </span>
          {props.place && (
            <span>
              <dt>Ort:</dt> <dd>{props.place}</dd>
            </span>
          )}
          {props.time && (
            <span>
              <dt>Uhrzeit:</dt> <dd>{props.time}</dd>
            </span>
          )}
        </dl>
        <p>{props.content}</p>
      </div>
      <Columns borderColor={color.main}>
        {props.info.map((column, idx) => (
          <Fragment key={idx}>
            <h3 css={columnTitleStyle}>{column.title}</h3>
            <p>{column.description}</p>
          </Fragment>
        ))}
      </Columns>
    </article>
  )
}

export default Event
