import { css } from '@emotion/core'
import { typography, breakpoints, helpers, colors } from 'style'
import { ContactBlock } from 'lib/models/contactBlock'
import Columns from 'components/Columns/Columns'
import SocialLinks from 'components/SocialLinks/SocialLinks'

const titleStyle = css`
  ${typography.heading2};
  height: 30px;
  margin-bottom: 0;
`

const textStyle = css`
  margin: 0;
  white-space: pre-line;
`

const rightColStyle = css`
  @media (min-width: ${breakpoints.breakpointL}px) {
    padding-top: 30px;
  }
`

const phoneAndMailStyle = css`
  ${helpers.resetDefinitionListStyles};
  display: grid;
  grid-template-columns: auto auto;

  dt {
    display: block;
    width: 50px;
  }
  dd {
    display: inline-block;
  }
`

const linkStyle = css`
  ${helpers.resetLinkStyles};
`

const Contact = (props: ContactBlock) => {
  return (
    <Columns>
      <>
        <h2 css={titleStyle}>Kontakt</h2>
        <p css={textStyle}>{props.address}</p>
      </>
      <div css={rightColStyle}>
        <dl css={phoneAndMailStyle}>
          <dt>Büro:</dt>
          <dd>{props.phone}</dd>
          <dt>Mail:</dt>
          <dd>
            <a css={linkStyle} href={`mailto:${props.phone}`}>
              {props.mail}
            </a>
          </dd>
        </dl>
        <SocialLinks
          links={[
            {
              platform: 'instagram',
              url: props.instagram,
            },
            {
              platform: 'facebook',
              url: props.facebook,
            },
            {
              platform: 'youtube',
              url: props.youtube,
            },
          ]}
          color={colors.brown}
        />
      </div>
    </Columns>
  )
}

export default Contact
