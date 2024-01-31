import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IconLabelProps extends React.PropsWithChildren {
  label: string;
  handleClick: () => void;
  theme: 'light' | 'dark';
  iconType: 'success' | 'error' | 'warning' | 'info' | 'normal';
}

export const IconLabel = ({
  label,
  handleClick,
  children,
  iconType = 'normal',
  theme = 'light',
}: IconLabelProps) => {
  return (
    <div className={classNames(styles.iconLabel)}>
      <span className={classNames(styles.label, styles[theme])}>{label}</span>
      <i
        className={classNames(styles.icon, [styles[`${iconType}-${theme}`]])}
        onClick={handleClick}
      >
        {children}
      </i>
    </div>
  );
};

export default IconLabel;
