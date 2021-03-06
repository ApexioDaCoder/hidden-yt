import React from 'react';
import { useTheme, Backdrop } from '@nextui-org/react';
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  VisualState,
  useKBar
} from 'kbar';
import KBarOption from './option';
import KBarSearch from './search';
import KBarResults from './results';
import generateStyles from './styles';

const KBar = () => {
  const { theme } = useTheme();
  const styles = generateStyles(theme);
  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden
  }));

  return (
    <KBarPortal>
      <Backdrop
        blur
        className="backdrop"
        visible={visible}
        maxWidth={styles.container.maxWidth}
      >
        <KBarPositioner>
          <KBarAnimator style={styles.container}>
            <KBarSearch placeholder="What do you need?" />
            <KBarResults
              style={styles.result}
              onRender={(
                action,
                handlers,
                state
              ) => (
                <KBarOption action={action} handlers={handlers} state={state} />
              )}
            />
          </KBarAnimator>
        </KBarPositioner>
      </Backdrop>
      <style jsx>
        {`
          :global(.backdrop .content) {
            height: 100%;
          }

          :global(.nextui-backdrop-layer-blur) {
            background: rgba(0, 0, 0, 0.4) none repeat scroll 0% 0%;
          }
        `}
      </style>
    </KBarPortal>
  );
};

export default KBar;
