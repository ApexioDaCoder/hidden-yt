import { styled } from '@nextui-org/react';

export const StyledNavMainContainer = styled('nav', {
  top: 0,
  height: '76px',
  position: 'sticky',
  background: 'transparent',
  zIndex: '$max',

  '& .text': {
    color: '$colors$headerIconColor'
  }
});

export const StyledNavContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  size: '100%',

  '& .navbar__social-icon': {
    fill: '$colors$headerIconColor'
  },

  variants: {
    showBlur: {
      true: {
        ///background: '$headerBackground'
      }
    },
    detached: {
      true: {
        backdropFilter: 'saturate(180%) blur(12px)',
        boxShadow: '0px 5px 20px -5px rgba(2, 1, 1, 0.1), inset 0 -1px 0 hsl(0deg 0% 100% / 10%)',
        background: '$headerBackground'
      },
      false: {
        backdropFilter: 'none',
        boxShadow: 'inset 0 -1px 0 hsl(0deg 0% 100% / 10%)',
        background: 'transparent'
      }
    }
  }
});