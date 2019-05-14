import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';

interface IProps {
  caption: string;
  classN?: string;
  name?: string;
  type?: string;
  disabled?: boolean;
  onButtonClick?: any;
}

const cx = classNames.bind(styles);

const Button = (props: IProps) => {
  return (
    <button
      className={cx('button', props.classN, { disabled: props.disabled })}
      name={props.name}
      type={props.type}
      onClick={props.onButtonClick}
    >
      <span className={cx('span')}>{props.caption}</span>
    </button>
  );
};

export default Button;
