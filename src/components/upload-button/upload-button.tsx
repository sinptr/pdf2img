import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonProps } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
});

export interface UploadButtonProps extends Omit<ButtonProps, 'ref' | 'onChange' | 'id'> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
}

const UploadButton = React.forwardRef<HTMLInputElement, React.PropsWithoutRef<UploadButtonProps>>(
  (props, ref) => {
    const { onChange, id, ...rest } = props;
    const classes = useStyles();

    return (
      <>
        <label htmlFor={id}>
          <input
            ref={ref}
            onChange={onChange}
            accept="application/pdf"
            className={classes.input}
            id={id}
            multiple
            type="file"
          />

          <Button component="span" {...rest} />
        </label>
      </>
    );
  },
);

export default UploadButton;
