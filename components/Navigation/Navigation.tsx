import { css } from '@emotion/core'
import { useState, useEffect } from 'react'
import { Router } from 'next/router'
import { colors, breakpoints, helpers } from 'style'
import navigationItems from 'lib/navigationItems'
import mobileNavigationButton from './_mobileNavigationButton.svg'
import closeIcon from './_closeIcon.svg'
import NavigationLink from './_NavigationLink'

const buttonStyle = css`
  ${helpers.resetButtonStyles};
  cursor: pointer;

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.breakpointL}px) {
    display: none;
  }
`

const navButtonStyle = css`
  ${buttonStyle};
  width: 50px;
`

const closeButtonStyle = css`
  ${buttonStyle};
  position: absolute;
  top: 25px;
  right: 20px;
  width: 20px;
`

const navigationListStyle = ({ isExpanded }: { isExpanded: boolean }) => css`
  ${helpers.resetListStyles};
  display: ${isExpanded ? 'block' : 'none'};
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  background-color: ${colors.beige};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 40px 30px;
  z-index: 100;

  @media (min-width: ${breakpoints.breakpointL}px) {
    position: static;
    display: flex;
    overflow: visible;
    background-color: transparent;
    padding: 0;
    margin-top: 30px;
  }
`

const navigationSectionStyle = css`
  border-bottom: 1px solid ${colors.brown};
  overflow: hidden;

  @media (min-width: ${breakpoints.breakpointL}px) {
    overflow: visible;
    border: 0;
  }
`

const Navigation = (props: { className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setIsExpanded(false)
    }

    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <nav className={props.className}>
      <button
        css={navButtonStyle}
        onClick={() => {
          setIsExpanded(true)
        }}
      >
        <img src={mobileNavigationButton} />
      </button>
      <ul css={navigationListStyle({ isExpanded })}>
        <button
          css={closeButtonStyle}
          onClick={() => {
            setIsExpanded(false)
          }}
        >
          <img src={closeIcon} />
        </button>
        {navigationItems.map((navigationItem, i) => {
          return (
            <li css={navigationSectionStyle} key={i}>
              <NavigationLink {...navigationItem} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
