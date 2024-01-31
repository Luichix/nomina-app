import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface PackProps extends React.PropsWithChildren {
  theme?: 'dark' | 'light';
  style?: string;
}

export const Pack = ({ children, theme, style }: PackProps) => {
  return (
    <div className={classNames(styles.pack, styles[theme], style)}>
      {children}
    </div>
  );
};

export default Pack;
