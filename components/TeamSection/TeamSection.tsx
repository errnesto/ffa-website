import { css } from '@emotion/core'
import { layout, colors, breakpoints, helpers } from 'style'
import { TeamBlock, TeamCategory } from 'lib/models/teamBlock'
import WideImage from 'components/WideImage/WideImage'
import TeamMember from './_Member'
import leaveHouseImg from './_leave-house.svg'
import leaveEducatorsImg from './_leave-educators.svg'
import leaveKitaImg from './_leave-kita.svg'

const memberListStyle = (leaveImage: string) => css`
  ${helpers.resetListStyles};
  ${layout.container};
  ${layout.block};
  background-color: ${colors.lightGreen};
  background-image: url(${leaveImage});
  background-repeat: no-repeat;
  background-size: calc(60% - 80px) 450px;
  background-position: right 40px center;
  height: 100vh;
  max-height: 500px;
  overflow: scroll;
  padding-top: 40px;
`

function getColor(category: TeamCategory) {
  switch (category) {
    case 'house':
      return colors.darkGreen
    case 'educators':
      return colors.darkBlue
    case 'kita':
      return colors.brown
    case 'others':
      return colors.lightGreen
  }
}

function getBackgroundImage(category: TeamCategory) {
  switch (category) {
    case 'house':
      return leaveHouseImg
    case 'educators':
      return leaveEducatorsImg
    case 'kita':
    case 'others':
      return leaveKitaImg
  }
}

export default function TeamSection(props: TeamBlock) {
  const color = getColor(props.category)
  const bgImage = getBackgroundImage(props.category)

  return (
    <section>
      <header title={props.title}>
        <WideImage
          asHeader
          text={props.title}
          image={props.image}
          color={color}
        />
      </header>
      <ul css={memberListStyle(bgImage)}>
        {props.members.map((member, i) => (
          <li key={i}>
            <TeamMember member={member} color={color} />
          </li>
        ))}
      </ul>
    </section>
  )
}